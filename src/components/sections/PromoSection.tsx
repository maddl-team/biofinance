import React from 'react';
import { ArrowRight } from 'lucide-react';

const PromoSection: React.FC = () => {
    const polygon = 'polygon(0% 100%, 100% 100%, 100% 6.371%, 100% 4.064%, 100% 4.064%, 99.991% 4.048%, 99.963% 3.998%, 99.913% 3.913%, 99.835% 3.794%, 99.727% 3.639%, 99.586% 3.448%, 99.407% 3.219%, 99.187% 2.954%, 98.923% 2.65%, 98.611% 2.307%, 98.239% 1.952%, 97.797% 1.614%, 97.289% 1.297%, 96.718% 1.005%, 96.085% 0.742%, 95.394% 0.512%, 94.647% 0.319%, 93.847% 0.167%, 92.996% 0.059%, 92.097% 0.001%, 88.771% 0.331%, 81.338% 1.283%, 70.847% 2.704%, 58.35% 4.438%, 44.895% 6.33%, 31.532% 8.225%, 19.312% 9.968%, 9.283% 11.405%, 2.496% 12.381%, 0% 12.741%, 0% 100%)';

    return (
        <section
            className="relative pt-40 pb-32 lg:pt-56 lg:pb-48 overflow-hidden bg-primary"
            style={{ clipPath: polygon }}
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=2000"
                    alt="Successo finanziario"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-2xl text-white">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                        Realizza i tuoi progetti <br />
                        <span className="text-secondary">oggi stesso</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                        Non rimandare i tuoi sogni. Che si tratti di una ristrutturazione, un'auto nuova o liquidità per le tue passioni, abbiamo la soluzione su misura per te.
                    </p>
                    <a
                        href="#contatti"
                        className="inline-flex items-center px-8 py-4 bg-secondary hover:bg-teal-600 text-white text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-900/20 group"
                    >
                        Richiedi una consulenza gratuita
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PromoSection;
