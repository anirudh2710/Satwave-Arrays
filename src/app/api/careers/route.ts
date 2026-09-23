import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx'];
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB

export async function POST(request: NextRequest) {
    try {
        const contentType = request.headers.get('content-type') || '';
        if (!contentType.includes('multipart/form-data') && !contentType.includes('application/x-www-form-urlencoded')) {
            return NextResponse.json(
                { error: 'All fields are mandatory and must be submitted as multipart form data.' },
                { status: 400 }
            );
        }

        const formData = await request.formData();

        const firstName = formData.get('firstName')?.toString().trim();
        const lastName = formData.get('lastName')?.toString().trim();
        const email = formData.get('email')?.toString().trim();
        const phone = formData.get('phone')?.toString().trim();
        const gender = formData.get('gender')?.toString().trim();
        const address = formData.get('address')?.toString().trim();
        const positionTitle = formData.get('positionTitle')?.toString().trim() || 'General Application';
        const resume = formData.get('resume') as File | null;

        // Validation - all fields are mandatory
        const errors: Record<string, string> = {};

        if (!firstName) {
            errors.firstName = 'First name is required.';
        }
        if (!lastName) {
            errors.lastName = 'Last name is required.';
        }

        if (!email) {
            errors.email = 'Email address is required.';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errors.email = 'Please enter a valid email address.';
            }
        }

        if (!phone) {
            errors.phone = 'Phone number is required.';
        } else {
            const phoneRegex = /^[\d\s+\-()]{7,25}$/;
            if (!phoneRegex.test(phone)) {
                errors.phone = 'Please enter a valid phone number.';
            }
        }

        if (!gender) {
            errors.gender = 'Gender selection is required.';
        }

        if (!address) {
            errors.address = 'Address is required.';
        }

        if (!resume || !(resume instanceof File) || resume.size === 0) {
            errors.resume = 'Resume is required. Please upload a PDF or Word document.';
        } else {
            const fileName = resume.name.toLowerCase();
            const hasValidExt = ALLOWED_EXTENSIONS.some(ext => fileName.endsWith(ext));
            if (!hasValidExt) {
                errors.resume = 'Invalid file format. Allowed formats: .pdf, .doc, .docx';
            } else if (resume.size > MAX_FILE_SIZE_BYTES) {
                errors.resume = 'Resume file size exceeds the 10MB limit.';
            }
        }

        if (Object.keys(errors).length > 0) {
            return NextResponse.json(
                { error: 'All fields are mandatory and must be valid.', errors },
                { status: 400 }
            );
        }

        // Process email if RESEND_API_KEY is available
        if (process.env.RESEND_API_KEY) {
            const resend = new Resend(process.env.RESEND_API_KEY);
            const arrayBuffer = await resume!.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            const emailData = await resend.emails.send({
                from: 'Satwave Careers <noreply@satwave.ai>',
                to: ['info@satwave.ai'],
                replyTo: email,
                subject: `New Job Application: ${positionTitle} - ${firstName} ${lastName}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
                        <h2 style="color: #000; border-bottom: 2px solid #222; padding-bottom: 10px;">
                            New Job Application Received
                        </h2>
                        <div style="margin: 20px 0; line-height: 1.6;">
                            <p><strong>Position Applied For:</strong> ${positionTitle}</p>
                            <p><strong>Applicant Name:</strong> ${firstName} ${lastName}</p>
                            <p><strong>Email ID:</strong> <a href="mailto:${email}">${email}</a></p>
                            <p><strong>Phone Number:</strong> ${phone}</p>
                            <p><strong>Gender:</strong> ${gender}</p>
                            <p><strong>Address:</strong></p>
                            <div style="background-color: #f5f5f5; padding: 12px; border-radius: 6px; white-space: pre-wrap;">${address}</div>
                            <p><strong>Attached Resume:</strong> ${resume!.name} (${(resume!.size / (1024 * 1024)).toFixed(2)} MB)</p>
                        </div>
                        <hr style="border: none; border-top: 1px solid #ddd; margin: 25px 0;">
                        <p style="color: #666; font-size: 12px;">
                            This application was submitted via the Satwave Careers portal.
                        </p>
                    </div>
                `,
                attachments: [
                    {
                        filename: resume!.name,
                        content: buffer,
                    },
                ],
            });

            console.log('📬 Resend careers response:', JSON.stringify(emailData, null, 2));

            return NextResponse.json({
                message: 'Thank you! Your application has been submitted successfully.',
                data: emailData,
            });
        } else {
            console.log('⚠️ RESEND_API_KEY is not configured. Logged career submission:', {
                positionTitle,
                firstName,
                lastName,
                email,
                phone,
                gender,
                address,
                resumeName: resume?.name,
                resumeSize: resume?.size,
            });

            return NextResponse.json({
                message: 'Thank you! Your application has been submitted successfully (development mode).',
            });
        }
    } catch (error: any) {
        console.error('❌ Error processing career application:', error);
        return NextResponse.json(
            {
                error: 'An unexpected error occurred while processing your application. Please try again later.',
                details: error?.message,
            },
            { status: 500 }
        );
    }
}
