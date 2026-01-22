import React, { useState } from 'react';
import AccordionItem from '../ui/AccordionItem';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Quali sono i requisiti per richiedere la Cessione del Quinto?",
            answer: "La Cessione del Quinto è riservata a dipendenti pubblici, statali, privati (con contratto a tempo indeterminato) e pensionati. Non è richiesta alcuna garanzia reale oltre alla busta paga o alla pensione."
        },
        {
            question: "In quanto tempo posso ottenere la liquidità?",
            answer: "I tempi di erogazione sono rapidi. Una volta completa la documentazione necessaria, l'istruttoria viene avviata immediatamente per garantire l'erogazione nel minor tempo possibile."
        },
        {
            question: "Posso richiedere un finanziamento se ho già altri prestiti in corso?",
            answer: "Sì, la Cessione del Quinto e la Delegazione di Pagamento possono coesistere con altri impegni finanziari, purché si rimanga entro i limiti di sostenibilità della rata (massimo 20% dello stipendio netto per la cessione)."
        },
        {
            question: "La consulenza è davvero gratuita?",
            answer: "Assolutamente sì. La consulenza offerta da Biofinance è completamente gratuita e senza impegno. Il nostro obiettivo è trovare la soluzione migliore per te prima di procedere con qualsiasi contratto."
        }
    ];

    return (
        <section id="faq" className="section-padding bg-neutral-bg">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
                        Domande Frequenti
                    </h2>
                    <p className="text-lg text-gray-600">
                        Risposte chiare ai dubbi più comuni sui nostri prodotti finanziari.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
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
