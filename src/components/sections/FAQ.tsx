import React from 'react';
import { HelpCircle } from 'lucide-react';

interface FAQItem {
    question: React.ReactNode;
    answer: React.ReactNode;
}

interface FAQProps {
    items?: FAQItem[];
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
}

const extractText = (node: React.ReactNode): string => {
    if (node === null || node === undefined || typeof node === "boolean") {
        return "";
    }
    if (typeof node === "string" || typeof node === "number") {
        return String(node);
    }
    if (Array.isArray(node)) {
        return node.map(extractText).join(" ");
    }
    if (React.isValidElement(node)) {
        const element = node as React.ReactElement<{ children?: React.ReactNode }>;
        return extractText(element.props.children);
    }
    return "";
};

const FAQ: React.FC<FAQProps> = ({
    items,
    title = "Domande Frequenti",
    subtitle = "Risposte chiare ai dubbi più comuni sui nostri prodotti finanziari."
}) => {
    const defaultFaqs: FAQItem[] = [
        {
            question: "Che cos'è esattamente la Cessione del Quinto?",
            answer: "La Cessione del Quinto è una forma di prestito personale non finalizzato garantito dalla busta paga o dalla pensione. La rata mensile viene trattenuta direttamente dal datore di lavoro o dall'ente pensionistico e non può mai superare il 20% (un quinto) dell'importo netto mensile percepito. È regolamentata per legge ed include sempre coperture assicurative obbligatorie."
        },
        {
            question: "Posso richiedere un prestito a Biofinance se sono segnalato in CRIF?",
            answer: "Assolutamente sì. La Cessione del Quinto è l'unica forma di prestito accessibile anche a chi ha avuto disguidi finanziari in passato, segnalazioni come cattivo pagatore o pignoramenti in corso. La garanzia è costituita dal tuo stipendio o pensione, non dalla tua storia creditizia passata."
        },
        {
            question: "Quali documenti servono per avviare una richiesta?",
            answer: "Per un preventivo immediato con Biofinance bastano pochi documenti: documento d'identità valido, codice fiscale e gli ultimi due cedolini dello stipendio (o il cedolino della pensione e il modello OBIS M). Al resto della burocrazia, inclusa la richiesta del Certificato di Stipendio o della Quota Cedibile, pensiamo noi."
        }
    ];

    const displayFaqs = items || defaultFaqs;
    const faqSchemaItems = displayFaqs
        .map((faq) => ({
            question: extractText(faq.question).trim(),
            answer: extractText(faq.answer).trim(),
        }))
        .filter((faq) => faq.question && faq.answer);

    return (
        <section id="faq" className="section-padding bg-white">
            {faqSchemaItems.length > 0 && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: faqSchemaItems.map((faq) => ({
                                "@type": "Question",
                                name: faq.question,
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: faq.answer,
                                },
                            })),
                        }).replace(/</g, "\\u003c"),
                    }}
                />
            )}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
                        <HelpCircle className="w-10 h-10 text-secondary" />
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-lg text-gray-600">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {displayFaqs.map((faq, index) => (
                        <div key={index} className="bg-neutral-bg p-8 rounded-3xl border border-gray-100">
                            <h4 className="text-lg font-bold text-primary mb-4">{faq.question}</h4>
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
