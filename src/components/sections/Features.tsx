import React from 'react';
import { UserCheck, History, Sliders } from 'lucide-react';

const Features: React.FC = () => {
    const reasons = [
        {
            icon: UserCheck,
            title: <><span className="font-bold">Anche con Segnalazioni CRIF:</span></>,
            desc: <>Sei stato segnalato come cattivo pagatore o hai pignoramenti in corso? La Cessione del Quinto è un tuo diritto e <span className="font-bold">supera le segnalazioni in banca dati</span>.</>
        },
        {
            icon: Sliders,
            title: <><span className="font-bold">Tasso Fisso e Rata Costante:</span></>,
            desc: "Nessuna sorpresa. La rata non supererà mai il 20% (un quinto) del tuo stipendio o pensione netta."
        },
        {
            icon: History,
            title: <><span className="font-bold">Tutto Online o a Domicilio:</span></>,
            desc: "Gestiamo la pratica a distanza con firma digitale, oppure un nostro consulente ti raggiungerà in tutta Italia."
        },
    ];

    return (
        <section id="perche-biofinance" className="section-padding bg-neutral-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
                        Perché scegliere Biofinance per la tua Cessione del Quinto
                    </h2>
                    <p className="text-lg text-gray-600">
                        <span className="font-bold">Fiducia Totale</span>: la nostra moneta più preziosa. Ecco come operiamo per garantire la tua serenità finanziaria:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reasons.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary hover:shadow-lg transition-all text-center group">
                            <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-neutral-dark">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
