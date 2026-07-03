import React from 'react';
import { ExternalLink, Scale, FileText, MessageCircleWarning } from 'lucide-react';

const TransparencyLinks: React.FC = () => {
    const links = [
        {
            title: "Tabella Tassi Usura",
            subtitle: "Trimestre di riferimento",
            url: "https://www.fidesspa.com/it/content/usura",
            icon: Scale,
        },
        {
            title: "Guida ABF & Credito",
            subtitle: "Il credito ai consumatori semplificato",
            url: "https://www.fidesspa.com/it/trasparenza",
            icon: FileText,
        },
        {
            title: "Report Reclami",
            subtitle: "Modalità di inoltro a Fides Spa",
            url: "https://www.fidesspa.com/it/reclami",
            icon: MessageCircleWarning,
        }
    ];

    return (
        <section className="bg-neutral-bg pb-20 pt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-primary/40 mb-3">Trasparenza</h2>
                    <p className="text-sm text-gray-500 font-medium italic">Clicca sul link per avere tutte le informazioni di cui hai bisogno</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white p-8 rounded-[2rem] border border-gray-200/60 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden isolate"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -mt-12 -mr-12 blur-2xl group-hover:bg-secondary/10 transition-colors"></div>

                            <div className="w-16 h-16 bg-neutral-bg rounded-2xl flex items-center justify-center text-primary/60 mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-500 transform group-hover:scale-110 shadow-inner">
                                <link.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-base font-bold text-primary mb-2 group-hover:text-secondary transition-colors uppercase tracking-tight">
                                {link.title}
                            </h3>
                            <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6 px-4">
                                {link.subtitle}
                            </p>

                            <div className="mt-auto inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary/30 group-hover:text-secondary transition-colors">
                                SCOPRI DI PIÙ
                                <ExternalLink className="w-3 h-3 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TransparencyLinks;
