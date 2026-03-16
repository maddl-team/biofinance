import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.error('RESEND_API_KEY missing');
            return NextResponse.json(
                { ok: false, error: 'Configurazione server incompleta (API Key mancante)' },
                { status: 500 }
            );
        }

        const body = await req.json();
        const {
            formType,
            formData,
            website, // Honeypot field
            sourceUrl
        } = body;

        // 1. Honeypot check
        if (website) {
            console.warn('Honeypot triggered');
            return NextResponse.json({ ok: false, error: 'Spam detected' }, { status: 400 });
        }

        // 2. Basic validation
        if (!formData || !formData.email) {
            return NextResponse.json({ ok: false, error: 'Email mancante' }, { status: 400 });
        }

        // 3. Construct email content
        const fieldsHtml = Object.entries(formData)
            .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
            .join('');

        const emailHtml = `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #1a365d;">Nuova Richiesta da ${formType || 'Sito Web'}</h2>
        <p>Hai ricevuto una nuova sottomissione dal sito <strong>Biofinance</strong>.</p>
        <hr style="border: 0; border-top: 1px solid #eee;" />
        <ul>
          ${fieldsHtml}
        </ul>
        <p style="font-size: 0.8em; color: #666; margin-top: 20px;">
          Provenienza: ${sourceUrl || 'N/A'}<br>
          Data: ${new Date().toLocaleString('it-IT')}
        </p>
      </div>
    `;

        // 4. Send email via Resend (Runtime initialization)
        const { Resend } = await import('resend');
        const resend = new Resend(apiKey);

        const { data, error } = await resend.emails.send({
            from: process.env.EMAIL_FROM || 'Biofinance <onboarding@resend.dev>',
            to: [process.env.CONTACT_EMAIL || 'info@biofinance.it'],
            replyTo: formData.email,
            subject: `Nuovo Lead: ${formType || 'Contatto'} - ${formData.firstName || formData.nome || ''} ${formData.lastName || formData.cognome || ''}`,
            html: emailHtml,
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json({ ok: false, error: 'Errore invio email' }, { status: 500 });
        }

        return NextResponse.json({ ok: true, data });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ ok: false, error: 'Errore interno' }, { status: 500 });
    }
}
