'use client';

import { useState } from 'react';

export default function contactButton() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSendEmail = async () => {
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'xavier.mantellato.pro@gmail.com', // Remplacez par votre adresse email de test enregistrée dans Resend
          subject: 'Nouveau message depuis le portfolio',
          html: '<p>Bonjour, ceci est un test envoyé via le bouton !</p>',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi');
      }

      setStatus({ type: 'success', message: 'Email envoyé avec succès !' });
    } catch (error: any) {
      console.error('Erreur client :', error);
      setStatus({ type: 'error', message: error.message || 'Une erreur est survenue' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <button
        onClick={handleSendEmail}
        disabled={loading}
        className="bg-[#D47032] text-[#223831] text-sm rounded-full px-5 py-2.5 mt-5 mx-2 transition-transform hover:-translate-y-0.5"
      >
        {loading ? 'Envoi en cours...' : 'xavier.mantellato.pro@gmail.com'}
      </button>

      {status && (
        <p className={status.type === 'success' ? 'text-green-600' : 'text-red-600'}>
          {status.message}
        </p>
      )}
    </div>
  );
}