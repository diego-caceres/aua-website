import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  // Check for required environment variables
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('Missing SMTP credentials. SMTP_USER and SMTP_PASS must be set.');
    return res.status(500).json({
      error: 'El servidor no está configurado correctamente. Por favor, contacta al administrador.'
    });
  }

  try {
    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to AUA
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'contacto.aidauruguay@gmail.com',
      subject: `Contacto Web AUA: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Nuevo mensaje desde el sitio web de AUA</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #3b82f6;">
            <h3 style="margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto del sitio web de AUA.
          </p>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to user
    const confirmationOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Confirmación - Asociación Uruguaya de Apneistas',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">¡Gracias por contactarnos!</h2>
          <p>Hola ${name},</p>
          <p>Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Resumen de tu mensaje:</h3>
            <p><strong>Asunto:</strong> ${subject}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p>Saludos,<br><strong>Equipo AUA</strong></p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px;">
            Asociación Uruguaya de Apneistas<br>
            contacto.aidauruguay@gmail.com
          </p>
        </div>
      `,
    };

    await transporter.sendMail(confirmationOptions);

    return res.status(200).json({
      success: true,
      message: 'Mensaje enviado con éxito'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      error: 'Error al enviar el mensaje. Por favor, intenta de nuevo más tarde.'
    });
  }
}
