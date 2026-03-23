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
        const excludeFields = ['website', 'privacy', 'cv_base64'];
        const labelMapping: Record<string, string> = {
            nome: 'Nome',
            cognome: 'Cognome',
            firstName: 'Nome',
            lastName: 'Cognome',
            email: 'Email',
            telefono: 'Telefono',
            phone: 'Telefono',
            messaggio: 'Messaggio',
            importo: 'Importo richiesto',
            importoRichiesto: 'Importo richiesto',
            numeroRate: 'Numero rate',
            dataNascita: 'Data di nascita',
            birthDate: 'Data di nascita',
            areaInteresse: 'Area di interesse',
            linkedin: 'Profilo LinkedIn',
            motivazione: 'Motivazione/Note',
            cv_filename: 'Nome file CV',
            comparto: 'Comparto/Settore',
            nomeAzienda: 'Nome Azienda',
            bisogno: 'Bisogno/Esigenza',
            tipoSoggettivita: 'Messaggio/Note',
            stipendioNetto: 'Stipendio netto',
            eta: 'Età',
            tipoImpiego: 'Tipo impiego',
            importoDesiderato: 'Importo desiderato',
            durataMesi: 'Durata (mesi)',
            professione: 'Professione',
            cap: 'CAP',
            nomeCognome: 'Nome e Cognome',
            quantitaPrestiti: 'Numero prestiti in corso',
            azienda: 'Azienda'
        };

        const fieldsHtml = Object.entries(formData)
            .filter(([key]) => !excludeFields.includes(key))
            .map(([key, value]) => {
                const label = labelMapping[key] || key;
                const displayValue = value === true ? 'Sì' : value === false ? 'No' : value;
                return `<li><strong>${label}:</strong> ${displayValue}</li>`;
            })
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

        // 4. Handle Attachments
        const attachments = [];
        if (formData.cv_base64 && formData.cv_filename) {
            attachments.push({
                filename: formData.cv_filename,
                content: Buffer.from(formData.cv_base64, 'base64'),
            });
        }

        // 5. Send email via Resend (Runtime initialization)
        const { Resend } = await import('resend');
        const resend = new Resend(apiKey);

        const { data, error } = await resend.emails.send({
            from: process.env.EMAIL_FROM || 'Biofinance <onboarding@resend.dev>',
            to: [process.env.CONTACT_EMAIL || 'info@biofinance.it'],
            replyTo: formData.email,
            subject: `Nuovo Lead: ${formType || 'Contatto'} - ${formData.firstName || formData.nome || formData.nomeCognome || ''} ${formData.lastName || formData.cognome || ''}`,
            html: emailHtml,
            attachments: attachments.length > 0 ? attachments : undefined,
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
