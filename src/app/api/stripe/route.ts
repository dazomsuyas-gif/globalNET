import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2022-11-15'
});

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: body.items.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: item.image ? [item.image] : [],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/marketplace`,
      metadata: {
        orderId: body.orderId
      }
    });

    // Save order if prisma is available
    if (prisma) {
      try {
        await prisma.order.create({
          data: {
            userId: body.userId,
            products: body.items,
            total: body.total,
            paymentId: session.id
          }
        });
      } catch (e) {
        console.warn('Failed to save order to database');
      }
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
console.error('Stripe error:', error);
    return NextResponse.json({ error: 'Payment processing failed' }, { status: 500 });
  }
}
