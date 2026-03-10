import React from 'react';
import {
    Briefcase,
    ShieldCheck,
    CheckCircle2,
    Zap,
    TrendingUp,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DipendentiPrivati: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 bg-secondary-light overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Cessione del Quinto Dipendenti Privati: Il Tuo Lavoro è la Tua Garanzia.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Se lavori nel settore privato (SRL, SPA o Cooperative), sai che la stabilità è un valore. In <span className="font-bold">Biofinance</span>, trasformiamo il tuo contratto a tempo indeterminato in liquidità immediata. Non serve ipotecare la casa o chiedere firme a garanti: la vera garanzia è il tuo stipendio e il TFR che hai accantonato in azienda.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/img/dipendenti-privati.jpg"
                                    alt="Lavoro e stabilità"
                                    className="w-full h-[400px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Come funziona */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                            Come funziona per il Settore Privato?
                        </h2>
                        <p className="text-lg text-gray-600">
                            A differenza dei dipendenti statali, per i privati l'elemento chiave è il <span className="font-bold">TFR (Trattamento di Fine Rapporto)</span>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-neutral-bg p-8 lg:p-12 rounded-[2rem] border border-gray-100">
                            <Briefcase className="w-12 h-12 text-secondary mb-6" />
                            <h3 className="text-2xl font-bold text-primary mb-4"><span className="font-bold">Il Ruolo del TFR:</span></h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Funge da "cuscinetto" di garanzia per l'assicurazione. Maggiore è il TFR accantonato, più facile sarà ottenere importi elevati.
                            </p>
                        </div>

                        <div className="bg-neutral-bg p-8 lg:p-12 rounded-[2rem] border border-gray-100">
                            <TrendingUp className="w-12 h-12 text-secondary mb-6" />
                            <h3 className="text-2xl font-bold text-primary mb-4"><span className="font-bold">Valutazione Azienda:</span></h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Non valutiamo solo te, ma anche la solidità del tuo datore di lavoro. Lavorare in un'azienda sana (con bilanci in utile e buon numero di dipendenti) ti permette di accedere ai coefficienti assicurativi migliori (Classe A o B).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Requisiti */}
            <section className="section-padding bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Requisiti Minimi per l'Accesso</h2>
                        <p className="text-white/80 text-lg">
                            Per garantire l'approvazione della pratica (YMYL: trasparenza prima di tutto), verifichiamo questi requisiti base:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: <span className="font-bold">Contratto:</span>, desc: "Tempo Indeterminato." },
                            { title: <span className="font-bold">Anzianità:</span>, desc: "Minimo 3-6 mesi di assunzione (superamento periodo di prova)." },
                            { title: <span className="font-bold">TFR:</span>, desc: "Una somma minima accantonata (anche in fondi pensione integrativi)." },
                            { title: <span className="font-bold">Azienda:</span>, desc: "SRL, SPA o Cooperative con almeno 16 dipendenti." }
                        ].map((req, idx) => (
                            <div key={idx} className="bg-white/10 p-8 rounded-3xl border border-white/20">
                                <CheckCircle2 className="w-8 h-8 text-secondary mb-4" />
                                <h4 className="text-xl font-bold mb-2 text-white">{req.title}</h4>
                                <p className="text-white/80">{req.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vantaggi */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">I Vantaggi Biofinance per i Privati</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: <span className="font-bold">Acconto Immediato:</span>,
                                desc: "Possiamo erogare un acconto subito dopo la firma del contratto, prima ancora che la pratica sia conclusa."
                            },
                            {
                                icon: <ShieldCheck className="w-8 h-8" />,
                                title: <span className="font-bold">Nessuna Motivazione:</span>,
                                desc: "Acquisto auto, ristrutturazione, viaggi o liquidità. Non ci serve sapere il perché."
                            },
                            {
                                icon: <TrendingUp className="w-8 h-8" />,
                                title: <span className="font-bold">Rata Costante:</span>,
                                desc: "Trattenuta diretta in busta paga. Nessun rischio di ritardi."
                            }
                        ].map((benefit, idx) => (
                            <div key={idx} className="bg-neutral-bg p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mb-8 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {benefit.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-primary mb-4">{benefit.title}</h4>
                                <p className="text-gray-600 leading-relaxed text-lg">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Soluzioni su misura */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-16 font-bold">
                        <h2 className="text-3xl lg:text-4xl text-primary mb-4">Soluzioni su Misura per la tua Azienda</h2>
                        <p className="text-gray-600 font-medium">Non tutte le aziende sono uguali. Abbiamo creato canali preferenziali:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-10 lg:p-14 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6"><span className="font-bold">Lavori in una Grande Azienda? (es. Luxottica, Ferrero, FCA)</span></h3>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    Le "Top Companies" godono di tassi paragonabili a quelli statali.
                                </p>
                            </div>
                            <Link
                                to="/prestiti-grandi-aziende"
                                className="inline-flex items-center text-secondary font-black tracking-widest text-sm uppercase group"
                            >
                                Vai ai Prestiti Grandi Aziende
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>

                        <div className="bg-white p-10 lg:p-14 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6"><span className="font-bold">Sei stato assunto da poco?</span></h3>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    Sei un neoassunto ma hai bisogno di liquidità? Scopri le opzioni limitate ma possibili.
                                </p>
                            </div>
                            <Link
                                to="/prestiti-neoassunti"
                                className="inline-flex items-center text-secondary font-black tracking-widest text-sm uppercase group"
                            >
                                Vai ai Prestiti Neoassunti
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DipendentiPrivati;
