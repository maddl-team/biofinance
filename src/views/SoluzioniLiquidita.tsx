"use client";

import React, { useRef } from 'react';
import {
    ShieldCheck,
    ArrowRight,
    TrendingDown,
    Layers,
    AlertCircle,
    HelpCircle,
    Star,
    Shield,
    Calculator,
    CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import FAQ from '../components/sections/FAQ';

const SoluzioniLiquidita: React.FC = () => {
    const formRef = useRef<HTMLDivElement>(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const solutions = [
        {
            icon: <Layers className="w-10 h-10" />,
            title: <span className="font-bold">Delegazione di Pagamento (Doppio Quinto):</span>,
            desc: "Per chi ha già la cessione impegnata. Ti permette di impegnare un ulteriore 20% del tuo stipendio, raddoppiando la liquidità a tua disposizione.",
            link: "/delegazione-di-pagamento"
        },
        {
            icon: <TrendingDown className="w-10 h-10" />,
            title: <span className="font-bold">Consolidamento Debiti:</span>,
            desc: "Hai troppe rate mensili? Questa soluzione prevede una rata unica per chiudere altri finanziamenti in corso, abbassando il tuo esborso mensile totale.",
            link: "/consolidamento-debiti"
        },
        {
            icon: <AlertCircle className="w-10 h-10" />,
            title: <span className="font-bold">Prestiti con Segnalazione CRIF / Cattivi Pagatori:</span>,
            desc: "Se hai avuto ritardi nei pagamenti in passato, la tua busta paga o pensione è l'unica garanzia che ci serve. Con noi, il blocco CRIF non è un ostacolo.",
            link: "/prestiti-segnalati-crif"
        }
    ];

    const faqs = [
        {
            q: "Sono segnalato come \"Cattivo Pagatore\" in CRIF a causa di un vecchio prestito. Siete sicuri che mi finanzierete?",
            a: "Sì. Le nostre soluzioni (Cessione del Quinto e Delega) si basano sulla garanzia della tua busta paga/pensione e del TFR, non sul tuo storico bancario. Non interroghiamo CRIF/Experian per approvare la pratica."
        },
        {
            q: "Ho già una Cessione del Quinto e un Prestito Personale in corso, la rata mensile mi sta soffocando. Cosa posso fare?",
            a: "Attraverso il Consolidamento Debiti o il Rinnovo della Cessione, possiamo estinguere i tuoi prestiti precedenti e aprirne uno nuovo. Il risultato è una sola rata mensile più leggera."
        },
        {
            q: "Cos'è la Delegazione di Pagamento e chi può richiederla?",
            a: "Conosciuta come \"Doppio Quinto\", è un finanziamento aggiuntivo che si affianca alla Cessione. È richiedibile da dipendenti statali, pubblici e privati (previo accordo con l'azienda)."
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
                                Soluzioni per Problemi di Liquidità: Superiamo Insieme gli Ostacoli.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                La vita può presentare imprevisti che richiedono uno sforzo economico maggiore. Se la classica Cessione del Quinto non è sufficiente, o se le banche ti hanno chiuso le porte a causa di disguidi passati, sei nel posto giusto. In Biofinance offriamo prodotti alternativi per chi ha bisogno di più soldi o ha problemi di accesso al credito. Il nostro obiettivo è farti ritrovare la serenità.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 text-primary font-semibold">
                                    <CheckCircle2 className="text-secondary w-6 h-6" />
                                    <span>Più liquidità immediata</span>
                                </div>
                                <div className="flex items-center gap-3 text-primary font-semibold">
                                    <CheckCircle2 className="text-secondary w-6 h-6" />
                                    <span>Consolidamento rate mensili</span>
                                </div>
                                <div className="flex items-center gap-3 text-primary font-semibold">
                                    <CheckCircle2 className="text-secondary w-6 h-6" />
                                    <span>Accesso al credito per segnalati CRIF</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative" ref={formRef}>
                            <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-2xl border border-gray-100">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-primary mb-2">Trova la soluzione giusta per te. Analisi gratuita.</h3>
                                    <p className="text-gray-500 text-sm">Nessun impegno, massima discrezione</p>
                                </div>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Nome</label>
                                            <input type="text" placeholder="Nome" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Cognome</label>
                                            <input type="text" placeholder="Cognome" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Telefono</label>
                                            <input type="tel" placeholder="Telefono" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Data di nascita</label>
                                            <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                        <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Di cosa hai bisogno?</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white text-gray-500">
                                            <option value="">Di cosa hai bisogno?</option>
                                            <option value="liquidita">Ho bisogno di più liquidità</option>
                                            <option value="consolidamento">Voglio unire le mie rate</option>
                                            <option value="crif">Ho segnalazioni CRIF</option>
                                        </select>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="privacy-liquidita"
                                            required
                                            className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                                        />
                                        <label htmlFor="privacy-liquidita" className="text-xs text-gray-500 leading-snug cursor-pointer">
                                            Ho letto l'informativa sulla <Link href="/privacy" className="text-primary font-bold hover:underline">Privacy Policy</Link> e acconsento al trattamento dei miei dati personali.
                                        </label>
                                    </div>
                                    <button className="w-full bg-secondary hover:bg-emerald-600 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-secondary/20 uppercase tracking-widest text-xs">
                                        RICHIEDI ANALISI GRATUITA
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Soluzioni Alternative */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 tracking-tight">Scopri le Nostre Soluzioni Alternative</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Abbiamo strutturato percorsi specifici per farti ripartire senza stress:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {solutions.map((sol, idx) => (
                            <Link key={idx} href={sol.link} className="bg-neutral-bg p-10 rounded-[3rem] border border-gray-100 text-center hover:shadow-xl transition-all group flex flex-col h-full">
                                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-secondary mb-8 mx-auto shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {sol.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4">{sol.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">{sol.desc}</p>
                                <div className="inline-flex items-center text-secondary font-bold group-hover:gap-2 transition-all">
                                    Scopri di più <ArrowRight className="ml-1 w-5 h-5" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQ
                title="FAQ"
                subtitle={null}
                items={faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
            />

            {/* Testimonial */}
            <section className="section-padding bg-primary relative overflow-hidden isolate">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-white/10 backdrop-blur-md p-10 lg:p-16 rounded-[4rem] border border-white/10 text-center">
                        <div className="flex justify-center mb-8">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 text-secondary fill-secondary mx-0.5" />)}
                        </div>
                        <p className="text-2xl lg:text-3xl text-white font-medium italic mb-10 leading-relaxed px-4 text-center">
                            "Mi hanno ridato la serenità che avevo perso."
                        </p>
                        <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-4xl mx-auto text-center px-4">
                            "Per un banale disguido con una carta revolving risultavo segnalato in CRIF. Nessuna banca mi dava ascolto. Il team di Biofinance non mi ha giudicato: hanno analizzato il mio contratto a tempo indeterminato e mi hanno accordato la cessione, permettendomi di estinguere i vecchi debiti. Un vero salvavita."
                        </p>
                        <div className="mt-8">
                            <p className="text-secondary font-black tracking-widest uppercase text-sm">Alessandro B.</p>
                            <p className="text-gray-400 text-xs mt-1 italic">Dipendente Privato</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Buttons */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary tracking-tight">Scegli il percorso più adatto a te</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link
                            href="/delegazione-di-pagamento"
                            className="bg-neutral-bg hover:bg-secondary text-primary hover:text-white p-8 rounded-[2.5rem] flex flex-col items-center text-center transition-all group overflow-hidden relative"
                        >
                            <span className="font-black tracking-widest uppercase text-xs z-10 group-hover:scale-110 transition-transform">SCOPRI LA DELEGAZIONE DI PAGAMENTO</span>
                            <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity translate-y-full group-hover:translate-y-0 duration-300"></div>
                        </Link>
                        <Link
                            href="/consolidamento-debiti"
                            className="bg-neutral-bg hover:bg-secondary text-primary hover:text-white p-8 rounded-[2.5rem] flex flex-col items-center text-center transition-all group overflow-hidden relative"
                        >
                            <span className="font-black tracking-widest uppercase text-xs z-10 group-hover:scale-110 transition-transform">SCOPRI IL CONSOLIDAMENTO DEBITI</span>
                            <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity translate-y-full group-hover:translate-y-0 duration-300"></div>
                        </Link>
                        <Link
                            href="/prestiti-segnalati-crif"
                            className="bg-neutral-bg hover:bg-secondary text-primary hover:text-white p-8 rounded-[2.5rem] flex flex-col items-center text-center transition-all group overflow-hidden relative"
                        >
                            <span className="font-black tracking-widest uppercase text-xs z-10 group-hover:scale-110 transition-transform">PRESTITI CON SEGNALAZIONE CRIF</span>
                            <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity translate-y-full group-hover:translate-y-0 duration-300"></div>
                        </Link>
                    </div>
                    <div className="mt-16 text-center">
                        <button
                            onClick={scrollToForm}
                            className="bg-primary hover:bg-primary/90 text-white font-black py-6 px-12 rounded-2xl transition-all shadow-xl shadow-primary/20 uppercase tracking-widest text-sm inline-flex items-center group"
                        >
                            RICHIEDI UNA ANALISI GRATUITA
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SoluzioniLiquidita;
