"use client";

import React from 'react';
import {
    ShieldCheck,
    Clock,
    TrendingDown,
    FileText,
    Shield,
    ArrowRight,
    Wallet,
    HelpCircle,
    Star,
    Calculator
} from 'lucide-react';
import Link from 'next/link';

const AnticipoTFS: React.FC = () => {
    const benefits = [
        {
            icon: <Clock className="w-8 h-8" />,
            title: <span className="font-bold">Nessuna Rata Mensile:</span>,
            desc: "Non dovrai pagare alcuna rata mensile. Il prestito verrà estinto direttamente dall'INPS quando erogherà il tuo TFS."
        },
        {
            icon: <Wallet className="w-8 h-8" />,
            title: <span className="font-bold">Liquidità in un'unica soluzione:</span>,
            desc: "Ricevi l'importo concordato direttamente sul tuo conto corrente, in tempi rapidi."
        },
        {
            icon: <TrendingDown className="w-8 h-8" />,
            title: <span className="font-bold">Tassi Agevolati:</span>,
            desc: "Essendo un credito garantito dallo Stato, benefici di condizioni finanziarie estremamente vantaggiose."
        }
    ];

    const requirements = [
        { text: "Documento di identità e Codice Fiscale.", icon: <FileText className="w-5 h-5" /> },
        { text: "Prospetto di Liquidazione TFS rilasciato dall'INPS.", icon: <FileText className="w-5 h-5" /> },
        { text: "Cedolino della pensione.", icon: <FileText className="w-5 h-5" /> }
    ];

    const faqs = [
        {
            q: "Quanto tempo ci vuole per ottenere l'Anticipo TFS con Biofinance rispetto ai tempi INPS?",
            a: "Mentre l'INPS può impiegare dai 12 ai 24 mesi (e talvolta oltre) per erogare la prima tranche del tuo TFS, con Biofinance riceverai l'intera somma in un'unica soluzione in poche settimane, subito dopo l'approvazione e la notifica all'Ente."
        },
        {
            q: "Devo pagare delle rate mensili per restituire questo anticipo?",
            a: "Assolutamente no. L'Anticipo TFS non prevede trattenute mensili sulla tua pensione. Il capitale anticipato verrà rimborsato direttamente dall'INPS a noi nel momento in cui maturerà il tuo diritto alla liquidazione."
        },
        {
            q: "Posso richiedere l'Anticipo TFS se ho già una Cessione del Quinto sulla pensione in corso?",
            a: "Sì, i due prodotti sono completamente compatibili e indipendenti. La Cessione del Quinto incide sulla rata della pensione mensile, mentre l'Anticipo TFS utilizza esclusivamente il tuo fondo di liquidazione accantonato come garanzia."
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
                                Anticipo TFS: Il Tuo Trattamento di Fine Servizio, Senza Attese.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Hai dedicato una vita intera al servizio dello Stato o della Pubblica Amministrazione. Ora che sei in pensione, il tuo Trattamento di Fine Servizio (TFS) è un diritto acquisito. Purtroppo, i tempi di erogazione dell'INPS possono richiedere anni. In Biofinance, offriamo un prodotto specifico per statali in pensione o cessati dal servizio: l'Anticipo TFS. Ti permettiamo di ottenere subito la tua liquidità, senza dover rimandare i tuoi progetti.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-2xl border border-gray-100">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-primary mb-2">Calcola il tuo Anticipo TFS</h3>
                                    <p className="text-gray-500 text-sm">Inserisci i dati per un preventivo gratuito</p>
                                </div>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="Nome" className="bg-neutral-bg border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-secondary/50 outline-none w-full" />
                                        <input type="text" placeholder="Cognome" className="bg-neutral-bg border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-secondary/50 outline-none w-full" />
                                    </div>
                                    <input type="tel" placeholder="Telefono" className="bg-neutral-bg border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-secondary/50 outline-none w-full" />
                                    <input type="email" placeholder="Email" className="bg-neutral-bg border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-secondary/50 outline-none w-full" />
                                    <input type="text" placeholder="Importo TFS (opzionale)" className="bg-neutral-bg border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-secondary/50 outline-none w-full" />
                                    <button className="w-full bg-secondary hover:bg-emerald-600 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-secondary/20 uppercase tracking-widest text-xs">
                                        CALCOLA IL TUO ANTICIPO ORA
                                    </button>
                                    <p className="text-[10px] text-gray-400 text-center flex items-center justify-center gap-1">
                                        <Shield className="w-3 h-3" />
                                        Preventivo 100% gratuito. I tuoi dati sono al sicuro.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Come funziona */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Come funziona l'Anticipo TFS con Biofinance?</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed text-center">
                            L'Anticipo TFS è un finanziamento garantito dalla tua stessa liquidazione. Non è un prestito personale tradizionale, ma un anticipo di ciò che è già tuo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-neutral-bg p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all text-center group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {benefit.icon}
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-3">{benefit.title}</h4>
                                <p className="text-gray-600 leading-relaxed text-center">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requisiti */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
                                    alt="Processo Anticipo TFS Biofinance"
                                    className="w-full h-[450px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">Requisiti per Richiederlo</h2>
                            <p className="text-lg text-gray-600 mb-8 text-center lg:text-left">
                                Per avviare la pratica di Anticipo TFS, il processo è snello e digitalizzato. Ti basterà fornirci:
                            </p>
                            <div className="space-y-6">
                                {requirements.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100">
                                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                                            {item.icon}
                                        </div>
                                        <div className="text-primary font-bold">{item.text}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
                            <HelpCircle className="w-10 h-10 text-secondary" />
                            FAQ
                        </h2>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-neutral-bg p-8 rounded-3xl border border-gray-100">
                                <h4 className="text-lg font-bold text-primary mb-4">{faq.q}</h4>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="section-padding bg-primary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-white/10 backdrop-blur-md p-10 lg:p-16 rounded-[4rem] border border-white/10 text-center">
                        <div className="flex justify-center mb-8">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 text-secondary fill-secondary mx-0.5" />)}
                        </div>
                        <p className="text-2xl lg:text-3xl text-white font-medium italic mb-10 leading-relaxed px-4 text-center">
                            "I soldi della liquidazione subito, senza la frustrazione dell'attesa."
                        </p>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto text-center px-4">
                            "Dopo 38 anni di servizio in Prefettura, l'idea di aspettare due anni per il mio TFS mi bloccava l'acquisto della casa al mare. Con Biofinance ho inviato il Prospetto INPS e in pochissimo tempo avevo i soldi sul conto. Nessuna rata da pagare ogni mese, ha pensato a tutto l'Inps con loro. Un servizio essenziale per noi ex statali."
                        </p>
                        <div className="mt-8">
                            <p className="text-secondary font-black tracking-widest uppercase text-sm">Giorgio F.</p>
                            <p className="text-gray-400 text-xs mt-1">Ex Dipendente Ministero dell'Interno (In Pensione)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-neutral-bg p-12 lg:p-16 rounded-[3rem] border border-gray-100 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-5 rounded-full -mr-32 -mt-32"></div>
                        <Calculator className="w-16 h-16 text-secondary mx-auto mb-6" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">Richiedi subito il tuo Anticipo TFS</h2>
                        <button className="bg-secondary hover:bg-emerald-600 text-white font-black py-6 px-12 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm inline-flex items-center group">
                            CALCOLA IL TUO ANTICIPO ORA
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AnticipoTFS;
