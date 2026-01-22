import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-32 lg:pb-28">
            {/* Background Decorative Blob */}
            <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4 transform">
                <div className="h-96 w-96 rounded-full bg-blue-50/50 blur-3xl lg:h-[800px] lg:w-[800px]" />
            </div>
            <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/3 translate-y-1/4 transform">
                <div className="h-64 w-64 rounded-full bg-teal-50/50 blur-3xl lg:h-[600px] lg:w-[600px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

                    {/* Left Column: Content */}
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-primary mb-6">
                            <ShieldCheck className="mr-2 h-4 w-4" />
                            Agenzia autorizzata OAM
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-neutral-dark sm:text-5xl md:text-6xl mb-6">
                            Soluzioni di credito su misura per dipendenti e pensionati
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Cessione del quinto, prestiti personali e consulenza finanziaria trasparente.
                            Affidati a Biofinance per ottenere liquidità in modo semplice, sicuro e regolamentato,
                            con il supporto di un consulente dedicato in ogni fase.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contatti"
                                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-amber-600 hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Richiedi una consulenza gratuita
                            </a>
                            <a
                                href="#servizi"
                                className="inline-flex items-center justify-center rounded-lg border-2 border-primary/10 bg-white px-8 py-4 text-base font-semibold text-primary transition-all hover:border-primary hover:bg-blue-50"
                            >
                                Scopri i servizi
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </div>

                        <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center">
                                <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                                Esito rapido
                            </div>
                            <div className="flex items-center">
                                <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                                Zero spese anticipate
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                        <div className="relative rounded-2xl bg-gray-100 shadow-2xl overflow-hidden aspect-[4/3] group">
                            <img
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000"
                                alt="Consulente finanziaria Biofinance"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80"></div>

                            {/* Overlay Content representing Trust/Growth */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center pb-12">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/30">
                                    <ShieldCheck className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-white text-xl font-bold mb-1">Sicurezza Certificata</h3>
                                <p className="text-blue-100 text-sm">
                                    Operiamo nel pieno rispetto delle normative vigenti.
                                </p>
                            </div>

                        </div>

                        {/* Decorative card floating - Moved outside overflow-hidden */}
                        <div className="absolute -bottom-6 -left-6 z-20 w-48 rounded-lg bg-white p-4 shadow-xl animate-pulse-slow">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <ShieldCheck className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Status</p>
                                    <p className="font-bold text-primary">Approvato</p>
                                </div>
                            </div>
                        </div>

                        {/* Background elements */}
                        <div className="absolute -top-12 -right-12 -z-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
