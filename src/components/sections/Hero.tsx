import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import LoanCalculator from '../ui/LoanCalculator';

const Hero: React.FC = () => {
    return (
        <section className="relative pt-16 pb-32 lg:pt-24 lg:pb-64 overflow-hidden isolate">
            {/* Very Gentle SVG Background Path */}
            <div className="absolute inset-0 -z-10 bg-white">
                <svg
                    viewBox="0 0 1440 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 w-full h-[105%] object-fill"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 0 H1440 V550 C1000 580 500 680 250 680 C100 680 0 630 0 500 V0Z"
                        fill="var(--color-secondary-light)"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">

                    {/* Left Column: Content */}
                    <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl mb-6">
                            Finanziamenti su misura <br />
                            semplici e <span className="text-[#ce0000] border-b-4 border-[#ce0000]">sicuri</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                            Calcola in pochi istanti la soluzione ideale per i tuoi progetti e richiedi una consulenza gratuita senza impegno.
                        </p>

                        {/* Trustpilot-style Rating */}
                        <div className="flex flex-col items-center lg:items-start mb-12">
                            <span className="text-xl font-bold text-primary mb-3 uppercase tracking-tight">Eccellente</span>
                            <div className="flex gap-1 mb-2">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <div key={s} className="w-8 h-8 bg-[#00B67A] flex items-center justify-center rounded-sm">
                                        <Star fill="white" className="w-5 h-5 text-white" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                                Sulla base di <span className="font-bold underline">80.250 recensioni</span>
                            </div>
                            <div className="mt-2 flex items-center">
                                <Star fill="#00B67A" className="w-4 h-4 text-[#00B67A] mr-1" />
                                <span className="font-bold text-gray-700">Trustpilot</span>
                            </div>
                        </div>

                        <a
                            href="#recensioni"
                            className="inline-flex items-center text-primary font-black tracking-widest text-sm uppercase group"
                        >
                            LEGGI LE RECENSIONI
                            <div className="ml-3 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </a>
                    </div>

                    {/* Right Column: Calculator */}
                    <div className="relative">
                        <LoanCalculator />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

