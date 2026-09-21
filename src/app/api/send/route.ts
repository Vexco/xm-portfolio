import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { to, subject, html } = body;

    // Journal de débogage des données d'entrée
    console.log('[DEBUG] Tentative d\'envoi d\'email :', { to, subject });

    const data = await resend.emails.send({
      from: 'Acme <xmantellato@gmail.com>', // Utilisez votre domaine vérifié en production
      to: [to || 'xavier.mantellato.pro@gmail.com'],
      subject: subject || 'Test Resend - Next.js',
      html: html || '<p>Ceci est un email de test envoyé via <strong>Resend</strong> !</p>',
    });

    // Journal de débogage du retour Resend
    console.log('[DEBUG] Réponse Resend :', data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    // Capture et affichage détaillé de l'erreur
    console.error('[DEBUG ERROR] Erreur lors de l\'envoi via Resend :', error);
    return NextResponse.json(
      { error: 'Échec de l\'envoi de l\'email', details: error },
      { status: 500 }
    );
  }
}