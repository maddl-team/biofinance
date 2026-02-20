import React from 'react';
import {
    ShieldCheck,
    Cpu,
    CheckCircle2,
    MousePointer2,
    Shield,
    TrendingDown,
    Building,
    FileText,
    ArrowRight,
    School,
    Flame,
    Calculator
} from 'lucide-react';

const DipendentiStatali: React.FC = () => {
    const categories = [
        {
            icon: <Building className="w-6 h-6" />,
            title: "Ministeri",
            desc: "Giustizia, Interno, Economia, ecc."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Forze dell'Ordine",
            desc: "Polizia, Carabinieri e Forze Armate."
        },
        {
            icon: <School className="w-6 h-6" />,
            title: "Scuola",
            desc: "Personale Docente e ATA (MIUR)."
        },
        {
            icon: <Flame className="w-6 h-6" />,
            title: "Soccorso",
            desc: "Vigili del Fuoco e Protezione Civile."
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Agenzie Fiscali",
            desc: "Agenzia delle Entrate, Dogane."
        }
    ];

    const benefits = [
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "Niente Carta",
            desc: "Acquisiamo i dati stipendiali telematicamente (previo tuo consenso)."
        },
        {
            icon: <MousePointer2 className="w-8 h-8" />,
            title: "Trattenuta Automatica",
            desc: "La rata viene inserita direttamente nel cedolino digitale."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Credito Garantito",
            desc: "Grazie alla solidità dello Stato come datore di lavoro, l'assicurazione Rischio Impiego ha un costo irrisorio, lasciando più \"netto ricavo\" a te."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 bg-secondary-light overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Cessione del Quinto Statali: Il Privilegio della Stabilità.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Essere un dipendente statale significa servire il Paese. In cambio, il sistema finanziario riconosce alla tua categoria il miglior merito creditizio possibile. In Biofinance, i prestiti per dipendenti statali (gestiti tramite sistema NoiPA) godono di corsie preferenziali: tassi più bassi, istruttoria semplificata e accettazione quasi immediata.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1541829070764-84a7d30dee3f?auto=format&fit=crop&q=80&w=1200"
                                    alt="Dipendenti Statali Biofinance"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                                <div className="absolute bottom-10 left-10 right-10 text-white">
                                    <h3 className="text-2xl font-bold mb-2 text-white">NoiPA Digital Integration</h3>
                                    <p className="text-lg italic">Accesso diretto e semplificato per il pubblico impiego.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sistema NoiPA */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Il Sistema NoiPA: Semplice, Digitale, Sicuro.</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                            La gestione del tuo prestito avviene tramite l'integrazione con il sistema NoiPA (MEF).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-neutral-bg p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all text-center group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {benefit.icon}
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-3">{benefit.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Chi rientra? */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Chi rientra nella categoria "Statali"?</h2>
                        <p className="text-lg text-gray-600">Offriamo condizioni "Prime" a:</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:border-secondary transition-colors">
                                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mx-auto mb-4">
                                    {cat.icon}
                                </div>
                                <h4 className="text-lg font-bold text-primary mb-1">{cat.title}</h4>
                                <p className="text-sm text-gray-500">{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Perché Biofinance conviene agli Statali? */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">Perché Biofinance conviene agli Statali?</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Spesso le banche tradizionali offrono tassi standard. Noi, grazie agli accordi specifici con gli istituti eroganti convenzionati NoiPA, possiamo offrirti:
                            </p>
                            <div className="space-y-6">
                                {[
                                    { text: "Dilazione fino a 120 mesi anche per importi elevati (fino a 75.000€).", icon: <TrendingDown className="w-5 h-5" /> },
                                    { text: "Rinegoziazione vantaggiosa di cessioni in corso con altre finanziarie.", icon: <CheckCircle2 className="w-5 h-5" /> },
                                    { text: "Gestione a distanza in tutta Italia con firma digitale (SPID).", icon: <Cpu className="w-5 h-5" /> }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-neutral-bg p-5 rounded-2xl border border-gray-100">
                                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                                            {item.icon}
                                        </div>
                                        <p className="text-primary font-bold">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-primary rounded-[3rem] p-10 lg:p-14 text-white text-center shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-10 rounded-full -mr-32 -mt-32"></div>
                                <Calculator className="w-16 h-16 text-secondary mx-auto mb-6" />
                                <h3 className="text-3xl font-bold mb-8 text-white leading-tight">Ottieni subito la tua quotazione NoiPA</h3>
                                <button className="w-full bg-secondary hover:bg-teal-600 text-white font-black py-6 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm inline-flex items-center justify-center group">
                                    CALCOLA RATA STATALI (CONVENZIONE)
                                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DipendentiStatali;
