import React from 'react';
import {
    ShieldCheck,
    Users,
    TrendingDown,
    MapPin,
    Globe,
    Zap,
    Shield,
    FileText,
    ArrowRight,
    Flame,
    Navigation,
    Calculator
} from 'lucide-react';
import Link from 'next/link';

const ForzeArmate: React.FC = () => {
    const categories = [
        {
            icon: <Navigation className="w-8 h-8" />,
            title: <span className="font-bold">Esercito Italiano, Marina Militare, Aeronautica.</span>,
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: <span className="font-bold">Arma dei Carabinieri.</span>,
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: <span className="font-bold">Polizia di Stato e Penitenziaria.</span>,
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: <span className="font-bold">Guardia di Finanza.</span>,
        },
        {
            icon: <Flame className="w-8 h-8" />,
            title: <span className="font-bold">Vigili del Fuoco.</span>,
        }
    ];

    const operativeAdvantages = [
        {
            icon: <MapPin className="w-8 h-8" />,
            title: <span className="font-bold">Nessuna limitazione per i Trasferimenti:</span>,
            desc: "Se vieni trasferito in un'altra caserma o regione, la Cessione del Quinto ti segue automaticamente. Non devi chiudere o rifare nulla."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: <span className="font-bold">Missioni all'Estero:</span>,
            desc: "Anche se sei impegnato in missioni internazionali, la gestione amministrativa rimane centralizzata in Italia (CNA Esercito o NoiPA), garantendo continuità nei pagamenti."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: <span className="font-bold">Valutazione Indennità Operative:</span>,
            desc: "Nel calcolo della quota cedibile, cerchiamo di valorizzare tutte le voci fisse e continuative del tuo cedolino per massimizzare l'importo erogabile."
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
                                Cessione del Quinto Forze Armate: Al fianco di chi ci protegge.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                La divisa che indossi è sinonimo di affidabilità. Per questo, <span className="font-bold">Biofinance</span> riserva ai membri delle Forze Armate e dell'Ordine condizioni finanziarie d'eccellenza. Sappiamo che la tua vita lavorativa ha esigenze specifiche: trasferimenti, missioni all'estero, avanzamenti di grado. La nostra Cessione del Quinto è flessibile e ti segue ovunque, gestita direttamente tramite il portale <span className="font-bold">NoiPA</span>.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/img/prestiti-forze-armate.jpg"
                                    alt="Forze Armate Biofinance"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* A chi ci rivolgiamo? */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">A chi ci rivolgiamo?</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                            Il prodotto è dedicato al personale in servizio permanente di:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            {categories.map((cat, idx) => (
                                <div key={idx} className="bg-neutral-bg p-8 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-primary leading-tight">{cat.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* I Vantaggi Operativi */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">I Vantaggi Operativi</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {operativeAdvantages.map((adv, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[3rem] border border-gray-50 hover:shadow-lg transition-all text-center group">
                                <div className="w-16 h-16 bg-neutral-bg rounded-2xl flex items-center justify-center text-secondary mx-auto mb-8 group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {adv.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{adv.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">{adv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tassi Agevolati e Convenzioni */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-secondary/20 blur-3xl rounded-full"></div>
                                <div className="relative bg-primary rounded-[3.5rem] p-10 lg:p-14 text-white shadow-2xl">
                                    <ShieldCheck className="w-16 h-16 text-secondary mb-8" />
                                    <h3 className="text-3xl font-bold mb-6 text-white">Tassi Agevolati e Convenzioni</h3>
                                    <p className="text-xl text-white/80 leading-relaxed mb-8">
                                        Grazie alla stabilità del tuo impiego statale, il rischio credito è prossimo allo zero. Questo ci permette di applicare <span className="font-bold">tassi TAN e TAEG ai minimi di mercato</span>, spesso inferiori a quelli proposti dalle banche generaliste. Inoltre, l'assicurazione "Rischio Vita e Impiego" (obbligatoria) ha costi estremamente ridotti per la tua categoria.
                                    </p>
                                    <div className="inline-flex items-center gap-2 text-secondary font-black tracking-widest uppercase text-sm">
                                        <TrendingDown className="w-5 h-5" />
                                        Condizioni Prime Garantite
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 leading-tight">Massima flessibilità, costi minimi.</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-10">
                                Spesso le banche tradizionali offrono tassi standard. La nostra convenzione automatica tramite portale NoiPA o CNA permette l'abbattimento immediato dei costi accessori.
                            </p>
                            <div className="bg-neutral-bg p-8 rounded-3xl border border-gray-100 flex items-start gap-4 ring-1 ring-primary/5">
                                <FileText className="w-8 h-8 text-secondary shrink-0" />
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-2">Documenti per il Preventivo</h4>
                                    <p className="text-gray-600 text-lg">
                                        Basta l'ultimo cedolino e il documento d'identità. Al resto (modello Allegato B o certificazione stipendiale) pensiamo noi tramite i canali telematici della Difesa o NoiPA.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white p-12 lg:p-20 rounded-[4rem] shadow-xl border border-gray-50 flex flex-col items-center">
                        <Calculator className="w-16 h-16 text-secondary mb-8" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">Richiedi la tua Quotazione</h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl">
                            Scopri subito le condizioni esclusive riservate alla tua divisa nel portale NoiPA.
                        </p>
                        <Link
                            href="/contatti"
                            className="bg-secondary hover:bg-teal-600 text-white font-black py-6 px-12 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm inline-flex items-center group"
                        >
                            RICHIEDI PREVENTIVO FORZE ARMATE
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForzeArmate;
