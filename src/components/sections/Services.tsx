import React from 'react';
import { Wallet, Landmark, BadgeEuro, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
    return (
        <section id="servizi" className="section-padding bg-neutral-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

                    {/* Service 1 */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
                        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary">
                            <Wallet className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-neutral-dark">Cessione del quinto</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                            La cessione del quinto è una forma di finanziamento rateizzato riservata a dipendenti e pensionati.
                            La rata viene trattenuta direttamente dallo stipendio o dalla pensione e non può superare un quinto dell’importo mensile netto.
                        </p>
                        <div className="bg-neutral-bg rounded-lg p-4 mb-6">
                            <h4 className="font-semibold text-sm mb-3 text-primary flex items-center">
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
                                    Accessibile anche con altri finanziamenti
                                </li>
                            </ul>
                        </div>
                        <a href="#contatti" className="text-secondary font-medium hover:text-teal-700 inline-flex items-center mt-auto">
                            Richiedi preventivo →
                        </a>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
                        <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 text-secondary">
                            <Landmark className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-neutral-dark">Delegazione di pagamento</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                            La delegazione di pagamento consente di affiancare un ulteriore finanziamento alla cessione del quinto,
                            aumentando l’importo complessivo disponibile.
                        </p>
                        <div className="mt-auto">
                            <a href="#contatti" className="text-secondary font-medium hover:text-teal-700 inline-flex items-center">
                                Richiedi informazioni →
                            </a>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
                        <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 text-accent">
                            <BadgeEuro className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-neutral-dark">Prestiti personali</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                            I prestiti personali Biofinance sono finanziamenti non finalizzati,
                            pensati per coprire esigenze personali o familiari senza vincoli di utilizzo.
                        </p>
                        <div className="mt-auto">
                            <a href="#contatti" className="text-secondary font-medium hover:text-teal-700 inline-flex items-center">
                                Scopri di più →
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
