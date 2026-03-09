import React, { useState } from 'react';
import AccordionItem from '../ui/AccordionItem';

interface FAQItem {
    question: React.ReactNode;
    answer: React.ReactNode;
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
                            <div>{faq.answer}</div>
                        </AccordionItem>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
