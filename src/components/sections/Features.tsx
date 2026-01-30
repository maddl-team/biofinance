import React from 'react';
import { Search, UserCheck, History, Sliders, Briefcase, User, ArrowRight, Building2 } from 'lucide-react';

const Features: React.FC = () => {
    const reasons = [
        { icon: Search, title: "Trasparenza", desc: "Condizioni chiare fin dall'inizio." },
        { icon: UserCheck, title: "Consulente dedicato", desc: "Un esperto al tuo fianco." },
        { icon: History, title: "Esperienza nel credito", desc: "Specializzati nel settore." },
        { icon: Sliders, title: "Approccio su misura", desc: "Soluzioni personalizzate." },
    ];

    return (
        <section className="section-padding bg-neutral-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Why Choose Us */}
                <div className="mb-20">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
                            Perché scegliere Biofinance
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reasons.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-secondary hover:shadow-md transition-all text-center">
                                <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-neutral-dark">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Target Audience Redesigned */}
                <div className="bg-secondary-light border border-secondary rounded-3xl p-8 lg:p-16 overflow-hidden relative">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center relative z-10">

                        {/* Left Column: Content & Mascot */}
                        <div className="lg:col-span-2 flex flex-col items-start text-left">
                            <div className="w-full h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg mb-8 relative bg-white">
                                <img
                                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
                                    alt="Consulente Biofinance"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                                Target
                            </span>

                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 leading-tight">
                                Soluzioni dedicate a te
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Siamo specializzati nel supportare categorie specifiche con prodotti finanziari su misura, semplici e trasparenti.
                            </p>

                            <a href="#contatti" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-black hover:scale-105 group">
                                Verifica requisiti
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>

                        {/* Right Column: Interactive List */}
                        <div className="lg:col-span-3 space-y-4">
                            {/* Card 1: Dipendenti Pubblici */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-teal-100 flex items-center justify-between hover:shadow-lg transition-all group cursor-pointer">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0">
                                        <Building2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-neutral-dark group-hover:text-primary transition-colors">Dipendenti Pubblici e Statali</h3>
                                        <p className="text-sm text-gray-500 mt-1">Tassi agevolati e condizioni esclusive per PA.</p>
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Card 2: Dipendenti Privati */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-teal-100 flex items-center justify-between hover:shadow-lg transition-all group cursor-pointer">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-full bg-teal-50 text-secondary flex items-center justify-center shrink-0">
                                        <Briefcase className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-neutral-dark group-hover:text-primary transition-colors">Dipendenti Privati</h3>
                                        <p className="text-sm text-gray-500 mt-1">Liquidità semplice per dipendenti di aziende (SRL, SPA).</p>
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors shrink-0">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Card 3: Pensionati */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-teal-100 flex items-center justify-between hover:shadow-lg transition-all group cursor-pointer">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-full bg-teal-50 text-accent flex items-center justify-center shrink-0">
                                        <User className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-neutral-dark group-hover:text-primary transition-colors">Pensionati</h3>
                                        <p className="text-sm text-gray-500 mt-1">Convenzioni fino a 90 anni con trattenuta diretta.</p>
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
                </div>

            </div>
        </section>
    );
};

export default Features;
