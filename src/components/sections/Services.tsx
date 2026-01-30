import React from 'react';
import { Wallet, Landmark, BadgeEuro, CheckCircle2, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
    return (
        <section id="servizi" className="section-padding bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary opacity-5 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
                        I nostri servizi
                    </h2>
                    <p className="text-lg text-gray-600">
                        Offriamo soluzioni di credito pensate per rispondere a esigenze diverse,
                        sempre nel rispetto delle normative vigenti e con condizioni chiare fin dall’inizio.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Service 1: Cessione del quinto */}
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group overflow-hidden">
                        {/* Image Header with Overlay Icon */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1556740985-ef5874bc7e5d?auto=format&fit=crop&q=80&w=800"
                                alt="Pensionato felice"
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
                            <h3 className="text-xl font-bold mb-3 text-neutral-dark">Cessione del quinto</h3>
                            <p className="text-gray-600 mb-6 text-sm flex-grow">
                                La rata viene trattenuta direttamente dallo stipendio o dalla pensione e non può superare un quinto dell’importo mensile.
                            </p>

                            <div className="bg-neutral-bg rounded-lg p-4 mb-6">
                                <h4 className="font-semibold text-xs uppercase tracking-wider mb-3 text-primary flex items-center">
                                    <CheckCircle2 className="w-4 h-4 mr-2 text-secondary" />
                                    Vantaggi principali
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 mr-2 shrink-0"></span>
                                        Rata fissa e sostenibile
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 mr-2 shrink-0"></span>
                                        Durata fino a 120 mesi
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 mr-2 shrink-0"></span>
                                        Anche con altri prestiti
                                    </li>
                                </ul>
                            </div>

                            <a
                                href="#contatti"
                                className="inline-flex items-center text-secondary font-black tracking-widest text-xs uppercase group mt-auto"
                            >
                                Richiedi preventivo
                                <div className="ml-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Service 2: Delegazione di pagamento */}
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group overflow-hidden">
                        {/* Image Header with Overlay Icon */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1512403754473-27835f7b9984?auto=format&fit=crop&q=80&w=800"
                                alt="Ristrutturazione casa"
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
                            <h3 className="text-xl font-bold mb-3 text-neutral-dark">Delegazione di pagamento</h3>
                            <p className="text-gray-600 mb-6 text-sm flex-grow">
                                Consente di affiancare un ulteriore finanziamento alla cessione del quinto, aumentando l’importo complessivo disponibile.
                            </p>

                            <div className="bg-neutral-bg rounded-lg p-4 mb-6">
                                <h4 className="font-semibold text-xs uppercase tracking-wider mb-3 text-primary flex items-center">
                                    <CheckCircle2 className="w-4 h-4 mr-2 text-secondary" />
                                    Vantaggi principali
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 mr-2 shrink-0"></span>
                                        Liquidità aggiuntiva
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 mr-2 shrink-0"></span>
                                        Fino a 120 mesi
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 mr-2 shrink-0"></span>
                                        Trattenuta in busta paga
                                    </li>
                                </ul>
                            </div>

                            <a
                                href="#contatti"
                                className="inline-flex items-center text-secondary font-black tracking-widest text-xs uppercase group mt-auto"
                            >
                                Richiedi informazioni
                                <div className="ml-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Service 3: Prestiti personali */}
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group overflow-hidden">
                        {/* Image Header with Overlay Icon */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
                                alt="Viaggio e famiglia"
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
                            <h3 className="text-xl font-bold mb-3 text-neutral-dark">Prestiti personali</h3>
                            <p className="text-gray-600 mb-6 text-sm flex-grow">
                                Finanziamenti non finalizzati, pensati per coprire esigenze personali o familiari senza vincoli di utilizzo.
                            </p>

                            <div className="bg-neutral-bg rounded-lg p-4 mb-6">
                                <h4 className="font-semibold text-xs uppercase tracking-wider mb-3 text-primary flex items-center">
                                    <CheckCircle2 className="w-4 h-4 mr-2 text-secondary" />
                                    Vantaggi principali
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 mr-2 shrink-0"></span>
                                        Nessun vincolo di spesa
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 mr-2 shrink-0"></span>
                                        Tasso fisso
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 mr-2 shrink-0"></span>
                                        Esito veloce
                                    </li>
                                </ul>
                            </div>

                            <a
                                href="#contatti"
                                className="inline-flex items-center text-secondary font-black tracking-widest text-xs uppercase group mt-auto"
                            >
                                Scopri di più
                                <div className="ml-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
