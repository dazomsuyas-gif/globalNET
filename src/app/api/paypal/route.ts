import { NextRequest, NextResponse } from 'next/server';
import { Client, Environment, OrdersController, CheckoutPaymentIntent } from '@paypal/paypal-server-sdk';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'USD', productId, userId, metadata = {} } = await request.json();

    if (typeof amount !== 'number' || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get user info
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Initialize PayPal client
    const clientId = process.env.PAYPAL_CLIENT_ID;
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return NextResponse.json(
        { error: 'PayPal credentials not configured' },
        { status: 500 }
      );
    }

    const client = new Client({
      clientCredentialsAuthCredentials: {
        oAuthClientId: clientId,
        oAuthClientSecret: clientSecret,
      },
      environment: process.env.PAYPAL_ENVIRONMENT === 'live' ? Environment.Production : Environment.Sandbox,
    });

    // Create PayPal order
    const ordersController = new OrdersController(client);
    const orderRequest = {
      intent: CheckoutPaymentIntent.Capture,
      purchaseUnits: [
        {
          amount: {
            currencyCode: currency,
            value: amount.toFixed(2),
          },
          description: metadata.description || 'Purchase from GlobalNET',
        },
      ],
    };

    const { result } = await ordersController.ordersCreate({
      body: orderRequest,
    });

    if (!result || !result.id) {
      throw new Error('Failed to create PayPal order');
    }

    // Store order in database
    const dbOrder = await prisma.order.create({
      data: {
        userId,
        total: amount,
        paymentMethod: 'paypal',
        paymentId: result.id,
        status: 'pending',
        deliveryFee: 0,
      },
    });

    return NextResponse.json({
      success: true,
      orderId: dbOrder.id,
      paypalOrderId: result.id,
      approvalUrl: result.links?.find((link: any) => link.rel === 'approve')?.href,
      message: 'PayPal order created successfully',
    });
  } catch (error) {
    console.error('PayPal error:', error);
    return NextResponse.json(
      { error: 'Failed to create PayPal order' },
      { status: 500 }
    );
  }
}