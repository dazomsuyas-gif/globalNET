import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15'
});

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'usd', productId, userId, metadata = {}, items } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const lineItems = items ? items.map((item: any) => ({
      price_data: {
        currency,
        product_data: {
          name: item.name,
          description: item.description,
          images: item.image ? [item.image] : [],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity || 1,
    })) : [{
      price_data: {
        currency,
        product_data: {
          name: metadata.productName || 'Product',
          description: metadata.description,
          images: Array.isArray(metadata.images) ? metadata.images : [],
        },
        unit_amount: Math.round(amount * 100),
      },
      quantity: 1,
    }];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      customer_email: user.email,
      client_reference_id: userId,
      metadata: {
        productId: productId || '',
        userId,
        ...metadata,
      },
      success_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/marketplace`,
    });

    if (session.id) {
      const totalAmount = items
        ? items.reduce((sum: number, item: any) => sum + (item.price * (item.quantity || 1)), 0)
        : amount;

      await prisma.order.create({
        data: {
          userId,
          total: totalAmount,
          paymentMethod: 'stripe',
          paymentId: session.id,
          status: 'pending',
          deliveryFee: 0,
        },
      });
    }

    return NextResponse.json({
      sessionId: session.id,
      url: session.url
    });
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
