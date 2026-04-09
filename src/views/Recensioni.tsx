"use client";

import React from 'react';
import {
    Star,
    MessageSquare,
    Quote,
    ShieldCheck,
    CheckCircle2,
    Building2,
    Heart,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import TrustindexWidget from '../components/widgets/TrustindexWidget';

const Recensioni: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-12 pb-14 lg:pt-32 lg:pb-20 bg-neutral-bg overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6">
                                <Star className="w-4 h-4 fill-secondary" />
                                FIDUCIA CERTIFICATA 4.9/5
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                La parola ai nostri Clienti.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Possiamo dirti che siamo bravi, ma preferiamo che siano i nostri clienti a confermarlo. La trasparenza è totale: raccogliamo feedback certificati tramite piattaforme indipendenti come <span className="font-bold">Trustindex</span> e <span className="font-bold">Google Reviews</span>.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mt-16 -mr-16 blur-2xl"></div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                                <Image
                                                    src={`/img/avatars/avatar-${i}.png`}
                                                    alt={`avatar ${i}`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="48px"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1 text-secondary mb-1">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star key={s} className="w-4 h-4 fill-secondary" />
                                            ))}
                                        </div>
                                        <p className="text-sm font-bold text-primary">Oltre 500 Recensioni</p>
                                    </div>
                                </div>
                                <Quote className="w-10 h-10 text-secondary/20 mb-6" />
                                <p className="text-lg text-gray-700 italic leading-relaxed mb-8">
                                    "Professionalità e trasparenza ai massimi livelli. Mi hanno seguito passo dopo passo spiegando ogni dettaglio tecnico."
                                </p>
                                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                    <span className="font-bold text-primary italic">Federico M.</span>
                                    <div className="flex items-center gap-2 text-primary/40">
                                        <ShieldCheck className="w-4 h-4" />
                                        <span className="text-xs uppercase font-bold tracking-widest">Verificata</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Storie di Successo (Casi Studio) */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Storie di Successo (Casi Studio)</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Caso Luigi */}
                        <div className="bg-neutral-bg p-10 rounded-[3rem] border border-gray-100 relative group hover:shadow-xl transition-all h-full flex flex-col">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-secondary/20">
                                    <ShieldCheck className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary"><span className="font-bold">Il caso di Luigi (Carabiniere):</span></h3>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed italic mb-8 flex-grow">
                                "Avevo bisogno di ristrutturare casa ma la banca mi faceva problemi per un vecchio ritardo. Biofinance ha gestito tutto con NoiPA in 10 giorni. Rata perfetta."
                            </p>
                            <div className="flex items-center gap-2 text-primary/30 mt-auto">
                                <CheckCircle2 className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-tighter">Settore Forze dell'Ordine</span>
                            </div>
                        </div>

                        {/* Caso Maria */}
                        <div className="bg-primary p-10 rounded-[3rem] shadow-xl relative group hover:shadow-2xl transition-all h-full flex flex-col overflow-hidden isolate">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mt-16 -mr-16 blur-2xl"></div>
                            <div className="flex items-center gap-4 mb-8 relative z-10">
                                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white border border-white/20">
                                    <Heart className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white"><span className="font-bold">Il caso di Maria (Pensionata INPS):</span></h3>
                                </div>
                            </div>
                            <p className="text-white/80 leading-relaxed italic mb-8 flex-grow relative z-10">
                                "Ho 81 anni e pensavo di non poter più chiedere prestiti. Marco mi ha aiutato a ottenere la cessione per aiutare mia nipote a studiare. Grazie di cuore."
                            </p>
                            <div className="flex items-center gap-2 text-white/20 mt-auto relative z-10">
                                <CheckCircle2 className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-tighter">Over 80</span>
                            </div>
                        </div>

                        {/* Caso Sergio */}
                        <div className="bg-neutral-bg p-10 rounded-[3rem] border border-gray-100 relative group hover:shadow-xl transition-all h-full flex flex-col">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-secondary/20">
                                    <Building2 className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary"><span className="font-bold">Il caso di Sergio (Dipendente Luxottica):</span></h3>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed italic mb-8 flex-grow">
                                "Tasso incredibile grazie alla convenzione grandi aziende. Meglio della mia banca."
                            </p>
                            <div className="flex items-center gap-2 text-primary/30 mt-auto">
                                <CheckCircle2 className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-tighter">Grandi Aziende</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Widget Section */}
            <section className="section-padding bg-neutral-bg border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white py-12 lg:py-20 rounded-[4rem] shadow-xl border border-gray-100 relative overflow-hidden isolate">
                        <div className="max-w-[1400px] mx-auto px-4">
                            <TrustindexWidget
                                scriptSrc="https://cdn.trustindex.io/loader.js?9a6430065e07017f01064e81b32"
                                containerId="trustindex-widget"
                                className="min-h-[150px] trustindex-widget-container"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Inviaci la tua opinione */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-primary p-12 lg:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden group isolate">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-10 rounded-full -mt-48 -mr-48 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-5 rounded-full -mb-32 -ml-32 blur-2xl"></div>

                        <div className="relative z-10 text-white">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/20">
                                <MessageSquare className="w-10 h-10 text-secondary" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Lascia una recensione</h2>
                            <p className="text-xl text-white/80 mb-10">
                                La tua esperienza può aiutare altre persone a scegliere con maggiore serenità. Raccontaci la tua storia.
                            </p>
                            <Link
                                href="https://g.page/r/CV27PBo81TiVEBM/review"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-secondary hover:bg-teal-600 text-white font-black py-6 px-12 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm inline-flex items-center group"
                            >
                                SCRIVI SU GOOGLE
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Recensioni;
