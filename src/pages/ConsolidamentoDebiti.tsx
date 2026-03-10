import React from 'react';
import {
    ArrowRight,
    TrendingDown,
    Sparkles,
    Coins,
    LayoutList,
    BrainCircuit,
    HeartPulse
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ConsolidamentoDebiti: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 bg-secondary-light overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6">
                                <Sparkles className="w-4 h-4" />
                                RISTRUTTURAZIONE DEBITO
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Consolidamento Debiti: Riprendi il controllo del tuo stipendio.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Mutuo auto, carta di credito, prestito per i mobili, piccolo prestito personale... A fine mese, la somma delle rate soffoca il tuo stipendio. Il <span className="font-bold">Consolidamento Debiti tramite Cessione del Quinto</span> è la strategia per uscire da questa spirale. L'obiettivo non è fare "nuovi debiti", ma ristrutturare quelli esistenti.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1573163281530-5be9c2948c3e?auto=format&fit=crop&q=80&w=1200"
                                    alt="Consolidamento Debiti Biofinance"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                                <div className="absolute bottom-10 left-10 right-10 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Un'Unica Rata</h3>
                                    <p className="text-lg italic text-white/90">Semplifica la tua vita finanziaria.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Come funziona l'operazione? */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-neutral-bg rounded-[4rem] p-10 lg:p-20 border border-gray-100 relative overflow-hidden isolate">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -mt-48 -mr-48 blur-3xl"></div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 leading-tight">Come funziona l'operazione?</h2>
                                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                                    Biofinance eroga una Cessione del Quinto (o una Delega) sufficiente a:
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                        </div>
                                        <p className="text-lg text-gray-700">
                                            <span className="font-bold">Estinguere</span> tutti i piccoli finanziamenti in corso (facciamo noi i bonifici alle altre finanziarie).
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                        </div>
                                        <p className="text-lg text-gray-700">
                                            <span className="font-bold">Erogare liquidità extra</span> a te (la differenza).
                                        </p>
                                    </li>
                                </ul>

                                <div className="mt-12 p-8 bg-white rounded-3xl border border-secondary/20 shadow-sm inline-block">
                                    <div className="flex items-center gap-4 text-primary font-bold text-xl">
                                        <Coins className="w-8 h-8 text-secondary" />
                                        <span>Invece di 4 rate da 100€ (Totale 400€) avrai <span className="text-secondary font-black">1 sola rata</span> da 250€.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-50 flex flex-col items-center text-center">
                                <LayoutList className="w-16 h-16 text-secondary mb-8" />
                                <h4 className="text-2xl font-bold text-primary mb-4">Gestione Semplificata</h4>
                                <p className="text-gray-600 text-lg">Un solo impegno mensile, nessuna scadenza da rincorrere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* I vantaggi psicologici ed economici */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">I vantaggi psicologici ed economici</h2>
                        <p className="text-xl text-gray-600">Perché consolidare è una scelta intelligente.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Stop ai ritardi */}
                        <div className="flex gap-8 group">
                            <div className="w-16 h-16 bg-neutral-bg rounded-2xl flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                                <BrainCircuit className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-4"><span className="font-bold">Stop ai ritardi:</span></h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Essendo trattenuta alla fonte, non rischierai mai più di dimenticare un bollettino e finire segnalato in CRIF.
                                </p>
                            </div>
                        </div>

                        {/* Tasso più basso */}
                        <div className="flex gap-8 group">
                            <div className="w-16 h-16 bg-neutral-bg rounded-2xl flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                                <TrendingDown className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-4"><span className="font-bold">Tasso più basso:</span></h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Spesso i "piccoli prestiti" hanno tassi (TAEG) altissimi (oltre il 12-14%). La Cessione del Quinto ha tassi mediamente molto più bassi. Consolidando, risparmi sugli interessi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-primary p-12 lg:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10">
                            <HeartPulse className="w-16 h-16 text-secondary mx-auto mb-8" />
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">Libera il tuo stipendio oggi stesso.</h2>
                            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                                Analizziamo gratuitamente la tua situazione debitoria e troviamo la soluzione di consolidamento più vantaggiosa.
                            </p>
                            <Link
                                to="/contatti"
                                className="bg-secondary hover:bg-emerald-600 text-white font-black py-6 px-12 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm inline-flex items-center group/btn"
                            >
                                RICHIEDI ANALISI CONSOLIDAMENTO
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConsolidamentoDebiti;
