import React from 'react';
import { Search, UserCheck, History, Sliders, Briefcase, User } from 'lucide-react';

const Features: React.FC = () => {
    const reasons = [
        { icon: Search, title: "Trasparenza", desc: "Condizioni chiare fin dall'inizio." },
        { icon: UserCheck, title: "Consulente dedicato", desc: "Un esperto al tuo fianco." },
        { icon: History, title: "Esperienza nel credito", desc: "Specializzati nel settore." },
        { icon: Sliders, title: "Approccio su misura", desc: "Soluzioni personalizzate." },
    ];

    const targets = [
        { icon: Briefcase, title: "Dipendenti pubblici e privati" },
        { icon: User, title: "Pensionati" },
        { icon: UserCheck, title: "Lavoratori che cercano affidabilità" },
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
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all text-center">
                                <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-neutral-dark">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Target Audience */}
                <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">A chi ci rivolgiamo</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {targets.map((item, index) => (
                                <div key={index} className="flex flex-col items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                                    <div className="w-10 h-10 mb-3 text-secondary">
                                        <item.icon className="w-full h-full" />
                                    </div>
                                    <span className="font-semibold text-lg">{item.title}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10">
                            <a href="#contatti" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                                Verifica se puoi accedere
                            </a>
                        </div>
                    </div>

                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                </div>

            </div>
        </section>
    );
};

export default Features;
