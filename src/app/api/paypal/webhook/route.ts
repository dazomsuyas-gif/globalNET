import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const eventType = body.event_type;

    // Handle CHECKOUT.ORDER.COMPLETED
    if (eventType === 'CHECKOUT.ORDER.COMPLETED') {
      const orderId = body.resource?.id;
      const customId = body.resource?.payer?.payer_info?.email;

      if (orderId) {
        await prisma.order.updateMany({
          where: { paymentId: orderId },
          data: { status: 'completed' },
        });
      }
    }

    // Handle PAYMENT.CAPTURE.COMPLETED
    if (eventType === 'PAYMENT.CAPTURE.COMPLETED') {
      const orderId = body.resource?.custom_id;
      
      if (orderId) {
        await prisma.order.updateMany({
          where: { id: orderId },
          data: { status: 'completed' },
        });
      }
    }

    // Handle PAYMENT.CAPTURE.REFUNDED
    if (eventType === 'PAYMENT.CAPTURE.REFUNDED') {
      const orderId = body.resource?.custom_id;
      
      if (orderId) {
        await prisma.order.updateMany({
          where: { id: orderId },
          data: { status: 'refunded' },
        });
      }
    }

    return NextResponse.json({ message: 'Webhook received' });
  } catch (error) {
    console.error('PayPal webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}