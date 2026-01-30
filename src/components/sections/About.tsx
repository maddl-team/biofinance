import React from 'react';
import { BadgeCheck, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="chi-siamo" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image/Visual */}
                    <div className="relative order-2 lg:order-1">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-100 relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
                                alt="Team Biofinance al lavoro"
                                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-primary/10"></div>
                        </div>
                        {/* Pattern */}
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full z-0 blur-3xl"></div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
                            Chi è Biofinance
                        </h2>
                        <div className="prose prose-lg text-gray-600 mb-8">
                            <p className="mb-4">
                                Biofinance è un’Agenzia in Attività Finanziaria specializzata nel credito al consumo,
                                attiva nella consulenza e nell’erogazione di soluzioni di finanziamento per privati.
                            </p>
                            <p className="mb-4">
                                Operiamo con un approccio chiaro e responsabile, accompagnando il cliente dalla prima analisi
                                delle esigenze fino alla conclusione del finanziamento, con l’obiettivo di individuare
                                la soluzione più adatta e sostenibile nel tempo.
                            </p>
                        </div>

                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex items-start gap-4">
                            <BadgeCheck className="w-8 h-8 text-primary shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-primary mb-1">Certificazioni Ufficiali</h4>
                                <p className="text-sm text-gray-600">
                                    Biofinance è regolarmente iscritta all’OAM come Agente in Attività Finanziaria
                                    e al RUI IVASS come intermediario assicurativo.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <a
                                href="#chi-siamo"
                                className="inline-flex items-center justify-center bg-secondary hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                            >
                                Scopri di più
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
