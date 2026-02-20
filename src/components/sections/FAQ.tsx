import React, { useState } from 'react';
import AccordionItem from '../ui/AccordionItem';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items?: FAQItem[];
    title?: string;
    subtitle?: string;
}

const FAQ: React.FC<FAQProps> = ({
    items,
    title = "Domande Frequenti",
    subtitle = "Risposte chiare ai dubbi più comuni sui nostri prodotti finanziari."
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const defaultFaqs = [
        {
            question: "Che cos'esattamente la Cessione del Quinto?",
            answer: "È una forma di prestito personale non finalizzato garantito dalla busta paga o dalla pensione. La rata mensile viene trattenuta direttamente dal datore di lavoro o dall'ente pensionistico e non può superare un quinto del totale netto mensile. È regolamentata per legge ed include sempre coperture assicurative obbligatorie."
        },
        {
            question: "Posso richiedere un prestito a Biofinance se sono segnalato in CRIF?",
            answer: "Sì! La Cessione del Quinto è accessibile anche a chi ha avuto difficoltà creditizie in passato, poiché la garanzia è costituita dal tuo stipendio o pensione, non dalla tua storia creditizia passata."
        },
        {
            question: "Quali documenti servono per avviare una richiesta?",
            answer: "Basta un documento d'identità valido, codice fiscale e gli ultimi due cedolini dello stipendio (o il cedolino della pensione e il modello OBIS M). Al resto della burocrazia, inclusa la richiesta del Certificato di Stipendio o della Quota Cedibile, pensiamo noi."
        }
    ];

    const displayFaqs = items || defaultFaqs;

    return (
        <section id="faq" className="section-padding bg-neutral-bg">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {subtitle}
                    </p>
                </div>

                <div className="space-y-4">
                    {displayFaqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            title={faq.question}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(index === openIndex ? null : index)}
                        >
                            <p>{faq.answer}</p>
                        </AccordionItem>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
