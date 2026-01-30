import React from 'react';

const HowItWorks: React.FC = () => {
    const steps = [
        { number: "01", title: "Richiesta", desc: "Compila il modulo o contattaci per una prima analisi gratuita." },
        { number: "02", title: "Consulenza", desc: "Un consulente dedicato individuerà la soluzione su misura per te." },
        { number: "03", title: "Erogazione", desc: "Ottieni la liquidità richiesta in tempi rapidi e con zero pensieri." }
    ];

    return (
        <section id="come-funziona" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
                        Come funziona
                    </h2>
                    <p className="text-lg text-gray-600">
                        Il nostro processo è semplice, trasparente e guidato.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10 transform -translate-y-1/2"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center bg-white p-6">
                            <div className="w-16 h-16 rounded-full bg-white border-4 border-secondary text-secondary font-bold text-2xl flex items-center justify-center mb-6 shadow-sm z-10">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-neutral-dark">{step.title}</h3>
                            <p className="text-gray-600">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
