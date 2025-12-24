import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Gmail configuration
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const RECIPIENT_EMAIL = 'bert@boostifai.com';

// Translation messages
const translations = {
  en: {
    userSubject: 'Thank you for contacting Boostifai',
    userGreeting: 'Hi {name},',
    userThankYou:
      "Thank you for reaching out to Boostifai. We've received your message and our team will get back to you as soon as possible.",
    userMessageTitle: 'Your Message:',
    userClosing:
      'In the meantime, feel free to explore our <a href="https://boostifai.com" style="color: #4F46E5; text-decoration: none;">website</a> to learn more about our AI-powered SEO solutions.',
    userSignature: 'Best regards,',
    userTeam: 'The Boostifai Team',
    userCopyright: '© {year} Boostifai. All rights reserved.',
    adminSubject: 'New Contact Form Submission from {name}',
    adminTitle: 'New Contact Form Submission',
    adminName: 'Name:',
    adminEmail: 'Email:',
    adminMessageTitle: 'Message:',
    adminFooter: 'This email was sent from the Boostifai contact form.',
    adminTimestamp: 'Submitted at: {timestamp}',
  },
  nl: {
    userSubject: 'Bedankt voor uw contact met Boostifai',
    userGreeting: 'Hallo {name},',
    userThankYou:
      'Bedankt dat u contact met ons heeft opgenomen. We hebben uw bericht ontvangen en ons team zal zo snel mogelijk contact met u opnemen.',
    userMessageTitle: 'Uw bericht:',
    userClosing:
      'In de tussentijd kunt u gerust onze <a href="https://boostifai.com" style="color: #4F46E5; text-decoration: none;">website</a> verkennen om meer te leren over onze AI-aangedreven SEO-oplossingen.',
    userSignature: 'Met vriendelijke groet,',
    userTeam: 'Het Boostifai Team',
    userCopyright: '© {year} Boostifai. Alle rechten voorbehouden.',
    adminSubject: 'Nieuw contactformulier van {name}',
    adminTitle: 'Nieuw contactformulier',
    adminName: 'Naam:',
    adminEmail: 'E-mail:',
    adminMessageTitle: 'Bericht:',
    adminFooter: 'Deze e-mail is verzonden via het Boostifai contactformulier.',
    adminTimestamp: 'Verzonden op: {timestamp}',
  },
};

export async function POST(request: NextRequest) {
  console.log('Contact API called');

  try {
    const body = await request.json();
    const { name, email, message, locale } = body;

    console.log('Contact form submission:', { name, email, locale });

    // Validate required fields
    if (!name || !email || !message || !locale) {
      console.error('Missing required fields');
      return NextResponse.json(
        { error: 'Name, email, message, and locale are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Validate environment variables
    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      console.error('Gmail credentials not configured');
      console.error('GMAIL_USER:', GMAIL_USER ? 'Set' : 'Not set');
      console.error('GMAIL_APP_PASSWORD:', GMAIL_APP_PASSWORD ? 'Set' : 'Not set');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    // Get translations for the locale
    const t = translations[locale as keyof typeof translations] || translations.en;
    const currentYear = new Date().getFullYear();
    const timestamp = new Date().toLocaleString(locale === 'nl' ? 'nl-NL' : 'en-US');

    // Email to admin
    const adminMailOptions = {
      from: GMAIL_USER,
      to: RECIPIENT_EMAIL,
      subject: t.adminSubject.replace('{name}', name),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            ${t.adminTitle}
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>${t.adminName}</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>${t.adminEmail}</strong> ${email}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">${t.adminMessageTitle}</h3>
            <p style="background-color: #fff; padding: 15px; border-left: 4px solid #4F46E5; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>${t.adminFooter}</p>
            <p>${t.adminTimestamp.replace('{timestamp}', timestamp)}</p>
          </div>
        </div>
      `,
      replyTo: email,
    };

    // Email confirmation to user
    const userMailOptions = {
      from: GMAIL_USER,
      to: email,
      subject: t.userSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            ${t.userSubject}
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            ${t.userGreeting.replace('{name}', name)}
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            ${t.userThankYou}
          </p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">${t.userMessageTitle}</h3>
            <p style="color: #666; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            ${t.userClosing}
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px; margin: 5px 0;">${t.userSignature}</p>
            <p style="color: #333; font-size: 16px; font-weight: bold; margin: 5px 0;">${t.userTeam}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px; text-align: center;">
            <p>${t.userCopyright.replace('{year}', currentYear.toString())}</p>
          </div>
        </div>
      `,
    };

    console.log('Sending emails...');

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    console.log('Emails sent successfully');

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
