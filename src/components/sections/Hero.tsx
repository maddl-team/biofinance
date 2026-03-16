"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import LoanCalculator from '../ui/LoanCalculator';
import TrustindexWidget from '../widgets/TrustindexWidget';

const Hero: React.FC = () => {
    return (
        <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 overflow-hidden isolate">
            {/* ... SVG content ... */}
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
                        fill="var(--color-neutral-bg)"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
                    <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                        <h1 className="text-[3.25rem] font-extrabold tracking-tight text-primary sm:text-5xl md:text-[3.25rem] mb-8 leading-tight">
                            Il Tuo Prestito su Misura: <br />
                            <span className="text-[#10B981]">Cessione del Quinto</span> Semplice, Trasparente, Garantita.
                        </h1>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-left mb-10">
                            <p>
                                In <span className="font-bold text-primary">Biofinance</span> crediamo che accedere al credito sia un diritto, non un percorso a ostacoli. Siamo un'agenzia finanziaria regolarmente iscritta all'<span className="font-bold text-primary">OAM</span> specializzata in <span className="font-bold text-primary">Cessione del Quinto dello stipendio e della pensione</span>.
                            </p>
                            <p>
                                Offriamo soluzioni di liquidità sostenibili, pensate per adattarsi al tuo status lavorativo e non il contrario. Che tu sia un dipendente pubblico, statale, privato o un pensionato, in Biofinance trovi un consulente dedicato pronto a guidarti verso la rata più leggera per te.
                            </p>
                        </div>

                        {/* Dynamic Trustindex Widget for Hero */}
                        <TrustindexWidget
                            scriptSrc="https://cdn.trustindex.io/loader.js?2ec9b5b65d870171b31667f710e"
                            containerId="hero-trustindex-widget"
                            className="min-h-[80px] w-full max-w-sm mb-6"
                        />

                        <Link
                            href="/recensioni"
                            className="inline-flex items-center text-primary font-black tracking-widest text-sm uppercase group"
                        >
                            LEGGI LE RECENSIONI
                            <div className="ml-3 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    </div>

                    <div className="relative">
                        <LoanCalculator />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Hero;
