import React from 'react';
import {
    Building2,
    Clock,
    Zap,
    ArrowRight,
    Building,
    Landmark,
    University,
    PieChart,
    Wallet
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EntiLocali: React.FC = () => {
    const targets = [
        {
            icon: <Building2 className="w-8 h-8" />,
            title: <><span className="font-bold">Comuni</span> e Città Metropolitane</>
        },
        {
            icon: <Landmark className="w-8 h-8" />,
            title: <><span className="font-bold">Regioni</span> e Province</>
        },
        {
            icon: <University className="w-8 h-8" />,
            title: <><span className="font-bold">Camere di Commercio</span></>
        },
        {
            icon: <Building className="w-8 h-8" />,
            title: "Dipendenti di Enti Pubblici non Economici"
        }
    ];

    const benefits = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Proattività Amministrativa",
            desc: "Il nostro team di back-office contatta proattivamente l'ufficio personale del tuo ente per accelerare il rilascio del Certificato di Stipendio."
        },
        {
            icon: <PieChart className="w-8 h-8" />,
            title: <span className="font-bold">Delega di Pagamento</span>,
            desc: "Molti Enti Locali accettano la 'seconda trattenuta'. Se hai bisogno di più liquidità, puoi impegnare fino al 40% dello stipendio."
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: <span className="font-bold">Tassi Bloccati</span>,
            desc: "Anche se l'istruttoria richiede tempo per la burocrazia locale, il tasso preventivato rimane bloccato per tutta la durata della pratica."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 bg-neutral-bg overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Cessione del Quinto Enti Locali: Il Credito per la Pubblica Amministrazione.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Lavorare per un Ente Locale (Comune, Provincia, Regione) offre una solidità che <span className="font-bold">Biofinance</span> premia con prodotti finanziari dedicati. A differenza dei dipendenti statali centrali, la tua busta paga è gestita da amministrazioni territoriali: noi abbiamo l'esperienza per dialogare velocemente con gli uffici ragioneria di ogni singolo Comune italiano, piccolo o grande che sia.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/img/prestiti-enti-locali.jpg"
                                    alt="Enti Locali Biofinance"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chi sono i destinatari? */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Chi sono i destinatari?</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {targets.map((target, idx) => (
                            <div key={idx} className="bg-neutral-bg p-8 rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {target.icon}
                                </div>
                                <h3 className="text-lg font-bold text-primary leading-tight">{target.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Perché scegliere Biofinance? */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Perché scegliere Biofinance per il tuo Ente?</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[3rem] border border-gray-50 flex flex-col items-center text-center group hover:shadow-lg transition-all">
                                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{benefit.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-primary rounded-[4rem] p-12 lg:p-20 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-10 rounded-full -mt-20 -mr-20"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <Wallet className="w-16 h-16 text-secondary mb-8" />
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight text-white">Ottieni Liquidità per i tuoi progetti</h2>
                            <p className="text-xl text-white/80 mb-10 max-w-2xl">
                                Scopri le condizioni competitive riservate ai dipendenti della Pubblica Amministrazione locale.
                            </p>
                            <Link
                                to="/contatti"
                                className="bg-secondary hover:bg-teal-600 text-white font-black py-6 px-12 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm inline-flex items-center group"
                            >
                                CALCOLA RATA ENTI LOCALI
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EntiLocali;
