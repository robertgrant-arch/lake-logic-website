import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, location, issue } = body;

    // Log the submission (visible in Vercel logs)
    console.log('New contact form submission:', { name, email, phone, location, issue, timestamp: new Date().toISOString() });

    // TODO: Add email sending via nodemailer or Resend when SMTP creds are configured
    // TODO: Add Google Sheets integration when service account is set up

    // For now, send notification email using Resend or similar service
    // You can add RESEND_API_KEY or SMTP credentials in Vercel env vars
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Lake Logic Website <onboarding@resend.dev>',
            to: ['info@lake-logic.com'],
            subject: `New Inquiry from ${name}`,
            html: `
              <h2>New Lake Logic Website Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Location:</strong> ${location || 'Not provided'}</p>
              <p><strong>Issue:</strong></p>
              <p>${issue}</p>
              <hr />
              <p><em>Submitted at ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}</em></p>
            `,
          }),
        });
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
      }
    }

    // Google Sheets integration
    if (process.env.GOOGLE_SHEETS_API_KEY && process.env.GOOGLE_SHEET_ID) {
      try {
        await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEET_ID}/values/Leads!A:F:append?valueInputOption=USER_ENTERED&key=${process.env.GOOGLE_SHEETS_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              values: [[new Date().toISOString(), name, email, phone || '', location || '', issue]],
            }),
          }
        );
      } catch (sheetsError) {
        console.error('Failed to write to Google Sheets:', sheetsError);
      }
    }

    return NextResponse.json({ ok: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ ok: false, message: 'Something went wrong' }, { status: 500 });
  }
}
