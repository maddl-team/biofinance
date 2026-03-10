import React from 'react';
import { Wallet, Landmark, BadgeEuro, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
    return (
        <section id="servizi" className="section-padding bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary opacity-5 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
                        Qual è la tua posizione lavorativa?
                    </h2>
                    <p className="text-lg text-gray-600">
                        Scegli il percorso dedicato a te per scoprire le convenzioni e i tassi riservati alla tua categoria.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Service 1: Dipendenti Privati */}
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="/img/dipendenti-privati.jpg"
                                alt="Dipendenti Privati"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-6">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg text-primary">
                                    <Wallet className="w-6 h-6" />
                                </div>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-3 text-neutral-dark"><span className="font-bold">Dipendenti Privati</span></h3>
                            <p className="text-gray-600 mb-6 text-sm flex-grow">
                                Lavori in una SPA, SRL o in una grande azienda come <span className="font-bold">Luxottica</span>, <span className="font-bold">Ferrero</span> o <span className="font-bold">Barilla</span>? Abbiamo accordi specifici per dipendenti di grandi realtà e PMI. Il tuo TFR è la tua garanzia per un prestito veloce e senza giustificativi di spesa.
                            </p>

                            <Link
                                to="/dipendenti-privati"
                                className="inline-flex items-center text-secondary font-black tracking-widest text-xs uppercase group mt-auto"
                            >
                                Scopri Prestiti Privati
                                <div className="ml-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Service 2: Dipendenti Statali e Pubblici */}
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="/img/dipendenti-statali.jpg"
                                alt="Dipendenti Statali e Pubblici"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-6">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg text-secondary">
                                    <Landmark className="w-6 h-6" />
                                </div>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-3 text-neutral-dark"><span className="font-bold">Dipendenti Statali e Pubblici</span></h3>
                            <p className="text-gray-600 mb-6 text-sm flex-grow">
                                Soluzioni dedicate a dipendenti <span className="font-bold">NoiPA</span>, Ministeri, <span className="font-bold">Scuola (MIUR)</span>, Forze Armate e <span className="font-bold">Sanità</span>. Sfrutta la stabilità del tuo impiego statale per ottenere i tassi più bassi del mercato e dilazioni fino a 120 mesi.
                            </p>

                            <Link
                                to="/dipendenti-statali"
                                className="inline-flex items-center text-secondary font-black tracking-widest text-xs uppercase group mt-auto"
                            >
                                Scopri Prestiti Statali
                                <div className="ml-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Service 3: Pensionati INPS ed Ex-INPDAP */}
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="/img/prestiti-pensionati.jpg"
                                alt="Pensionati"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-6">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg text-accent">
                                    <BadgeEuro className="w-6 h-6" />
                                </div>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-3 text-neutral-dark"><span className="font-bold">Pensionati INPS ed Ex-INPDAP</span></h3>
                            <p className="text-gray-600 mb-6 text-sm flex-grow">
                                Goditi la pensione senza pensieri. Grazie alla <span className="font-bold">Convenzione INPS</span>, la rata viene trattenuta direttamente dal cedolino, con assicurazione vita sempre inclusa a tutela dei tuoi eredi. Finanziamo fino a 85 anni di età (a scadenza piano).
                            </p>

                            <Link
                                to="/prestiti-pensionati"
                                className="inline-flex items-center text-secondary font-black tracking-widest text-xs uppercase group mt-auto"
                            >
                                Scopri Prestiti Pensionati
                                <div className="ml-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
