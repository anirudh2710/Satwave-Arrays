import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const { firstName, lastName, email, message } = await request.json();

        // Validate required fields
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'Satwave Contact Form <onboarding@resend.dev>',
            to: ['anikrish1998@gmail.com'], // Using your verified email for testing (Resend free tier limitation)
            // TODO: Change to ['info@satwave.ai'] after domain verification
            replyTo: email,
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #22257a; border-bottom: 2px solid #3b41b3; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <div style="margin: 20px 0;">
                        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                    </div>
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <p style="margin: 0;"><strong>Message:</strong></p>
                        <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
                    </div>
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                    <p style="color: #666; font-size: 12px;">
                        This email was sent from the Satwave contact form.
                    </p>
                </div>
            `,
        });

        console.log('📬 Resend response:', JSON.stringify(data, null, 2));

        return NextResponse.json(
            { message: 'Email sent successfully', data },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('❌ Error sending email:');
        console.error('Error message:', error.message);
        console.error('Error details:', JSON.stringify(error, null, 2));

        return NextResponse.json(
            {
                error: 'Failed to send email',
                details: error.message,
                debugInfo: process.env.NODE_ENV === 'development' ? error : undefined
            },
            { status: 500 }
        );
    }
}
