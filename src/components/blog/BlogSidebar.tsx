import React from 'react';

export const BlogSidebarCTA: React.FC = () => {
    return (
        <div className="bg-primary rounded-xl p-8 text-white relative overflow-hidden group">
            {/* Background Accent Decor */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all duration-500"></div>

            <div className="relative z-10">
                <div className="w-12 h-1 text-secondary mb-6 bg-secondary"></div>
                <h3 className="text-2xl font-bold mb-4 leading-tight text-white">
                    Hai ancora dei dubbi?
                </h3>
                <p className="text-white/80 mb-8 leading-relaxed">
                    Fai una simulazione gratuita o chiedi consiglio ai nostri esperti.
                </p>
                <a
                    href="/calcolo-cessione-del-quinto"
                    className="block w-full py-4 px-6 bg-white text-primary text-center font-bold uppercase tracking-widest text-xs hover:bg-secondary hover:text-white transition-all rounded-sm shadow-xl"
                >
                    Calcola la tua rata senza impegno
                </a>
                <p className="mt-6 text-xs text-white/40 text-center font-medium italic">
                    Servizio gratuito e non vincolante
                </p>
            </div>
        </div>
    );
};

export const PopularGuides: React.FC = () => {
    const guides = [
        { name: "Cos'è la Cessione del Quinto", href: "/cessione-del-quinto" },
        { name: "Consolidamento Debiti", href: "/consolidamento-debiti" },
        { name: "Prestiti per Pensionati", href: "/prestiti-pensionati" },
        { name: "Rinnovo Cessione del Quinto", href: "/rinnovo-cessione-del-quinto" },
        { name: "Prestiti per Segnalati CRIF", href: "/prestiti-segnalati-crif" },
    ];

    return (
        <div className="p-6 bg-neutral-bg border border-gray-100 rounded-xl">
            <h4 className="text-primary font-bold mb-3 text-sm">Guide popolari</h4>
            <ul className="space-y-3 text-sm">
                {guides.map((guide, index) => (
                    <li key={index}>
                        <a href={guide.href} className="text-secondary hover:text-primary transition-colors flex items-center">
                            <span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>
                            {guide.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
