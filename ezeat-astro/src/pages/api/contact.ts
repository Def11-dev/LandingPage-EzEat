import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const firstName = data.get('firstName')?.toString().trim();
  const lastName  = data.get('lastName')?.toString().trim();
  const email     = data.get('email')?.toString().trim();
  const company   = data.get('company')?.toString().trim() || 'N/A';
  const interest  = data.get('interest')?.toString() || 'N/A';
  const message   = data.get('message')?.toString().trim();

  if (!firstName || !lastName || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'Ezeat Contact <noreply@ezeat.com>',
      to: import.meta.env.CONTACT_EMAIL ?? 'hello@ezeat.com',
      replyTo: email,
      subject: `New contact from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Resend error:', err);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
};
