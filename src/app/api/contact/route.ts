import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Try to use Resend if API key is available
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(resendKey);
        
        await resend.emails.send({
          from: 'contact@globalnet.com',
          to: 'hello@globalnet.com',
          subject: `New Contact Form: ${name}`,
          html: `
            <h1>New Message from ${name}</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `
        });
      } catch (emailError) {
        console.warn('Failed to send email via Resend:', emailError);
      }
    } else {
      console.warn('RESEND_API_KEY not configured, skipping email send');
    }

    return NextResponse.json({ success: true, message: 'Message received' });
  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json({ error: 'Failed to process message' }, { status: 500 });
  }
}
