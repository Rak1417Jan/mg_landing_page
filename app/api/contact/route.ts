import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const phone = formData.get('phone') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;
        const requirement = formData.get('requirement') as string;

        const files = formData.getAll('files') as File[];

        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // Port 587 uses STARTTLS, not implicit SSL
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Prepare attachments
        const attachments = [];
        for (const file of files) {
            if (file.size > 0 && file.size < 5 * 1024 * 1024) { // 5MB limit check
                const buffer = Buffer.from(await file.arrayBuffer());
                attachments.push({
                    filename: file.name,
                    content: buffer,
                });
            }
        }

        // Email Content
        const mailOptions = {
            from: `"${process.env.SMTP_FROM_NAME || 'MG Digital Website'}" <${process.env.SMTP_FROM_EMAIL}>`,
            to: 'printmgd@gmail.com', // Destination email
            subject: `New Quote Request from ${name}`,
            text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email || 'Not provided'}
        Requirement: ${requirement || message || 'No details provided'}
      `,
            html: `
        <h3>New Quote Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Requirement:</strong></p>
        <p>${requirement || message || 'No details provided'}</p>
      `,
            attachments: attachments,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
