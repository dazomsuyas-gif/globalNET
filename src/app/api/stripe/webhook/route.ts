import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { prisma } from '@/lib/prisma';

function getStripeClient() {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    throw new Error('Stripe secret key is not configured');
  }

  return new Stripe(secret, {
    apiVersion: '2022-11-15',
  });
}

function getWebhookSecret() {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    throw new Error('Stripe webhook secret is not configured');
  }

  return secret;
}

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing signature or webhook secret' },
        { status: 400 }
      );
    }

    const stripe = getStripeClient();
    const webhookSecret = getWebhookSecret();

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (error) {
      console.error('Webhook verification failed:', error);
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    // Handle checkout session completed
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;

      // Update order status
      await prisma.order.updateMany({
        where: { paymentId: session.id },
        data: { status: 'completed' },
      });

      // Get order details
      const order = await prisma.order.findFirst({
        where: { paymentId: session.id },
        include: { user: true }
      });

      if (order) {
        console.log(`Order ${order.id} completed for user ${order.user.email}`);
        // Here you can send confirmation emails, update inventory, etc.
      }
    }

    // Handle payment intent failed
    if (event.type === 'payment_intent.payment_failed') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      const clientReferenceId = paymentIntent.client_secret;

      console.error(`Payment failed: ${clientReferenceId}`);
      
      await prisma.order.updateMany({
        where: { paymentId: clientReferenceId || '' },
        data: { status: 'failed' },
      });
    }

    // Handle charge refunded
    if (event.type === 'charge.refunded') {
      const charge = event.data.object as Stripe.Charge;

      if (charge.metadata?.orderId) {
        await prisma.order.update({
          where: { id: charge.metadata.orderId },
          data: { status: 'refunded' },
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}