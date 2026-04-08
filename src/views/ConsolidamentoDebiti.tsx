"use client";

import React, { useState } from 'react';
import {
    ArrowRight,
    TrendingDown,
    Sparkles,
    Coins,
    LayoutList,
    BrainCircuit,
    HeartPulse,
    CheckCircle2,
    Loader2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { sendToWebhook } from '../lib/webhook';

const ConsolidamentoDebiti: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        quantitaPrestiti: '',
        dataNascita: '',
        privacy: false,
        website: '' // Honeypot
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    formType: 'Consolidamento Debiti',
                    formData: formData,
                    website: formData.website,
                    sourceUrl: window.location.href
                }),
            });

            const result = await response.json();

            if (result.ok) {
                // Parallel non-blocking webhook submission only on success
                sendToWebhook('Consolidamento Debiti', formData);
                setIsSuccess(true);
            } else {
                setError(result.error || 'Errore durante l\'invio');
            }
        } catch (err) {
            setError('Errore di connessione');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-12 pb-14 lg:pt-32 lg:pb-20 bg-neutral-bg overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6">
                                <Sparkles className="w-4 h-4" />
                                RISTRUTTURAZIONE DEBITO
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Consolidamento Debiti: Riprendi il controllo del tuo stipendio.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Mutuo auto, carta di credito, prestito per i mobili, piccolo prestito personale... A fine mese, la somma delle rate soffoca il tuo stipendio. Il <span className="font-bold">Consolidamento Debiti tramite Cessione del Quinto</span> è la strategia per uscire da questa spirale. L'obiettivo non è fare "nuovi debiti", ma ristrutturare quelli esistenti. Scopri tutte le <Link href="/soluzioni-liquidita" className="underline">soluzioni di liquidità</Link> disponibili.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]">
                                <Image
                                    src="/img/consolidamento-debiti.jpg"
                                    alt="Consolidamento Debiti Biofinance"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Come funziona l'operazione? */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-neutral-bg rounded-[4rem] p-10 lg:p-20 border border-gray-100 relative overflow-hidden isolate">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -mt-48 -mr-48 blur-3xl"></div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 leading-tight">Come funziona l'operazione?</h2>
                                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                                    Biofinance eroga una Cessione del Quinto (o una Delega) sufficiente a:
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                        </div>
                                        <p className="text-lg text-gray-700">
                                            <span className="font-bold">Estinguere</span> tutti i piccoli finanziamenti in corso (facciamo noi i bonifici alle altre finanziarie).
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                        </div>
                                        <p className="text-lg text-gray-700">
                                            <span className="font-bold">Erogare liquidità extra</span> a te (la differenza).
                                        </p>
                                    </li>
                                </ul>

                                <div className="mt-12 p-8 bg-white rounded-3xl border border-secondary/20 shadow-sm inline-block">
                                    <div className="flex items-center gap-4 text-primary font-bold text-xl">
                                        <Coins className="w-8 h-8 text-secondary" />
                                        <span>Invece di 4 rate da 100€ (Totale 400€) avrai <span className="text-secondary font-black">1 sola rata</span> da 250€.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-50 flex flex-col items-center text-center">
                                <LayoutList className="w-16 h-16 text-secondary mb-8" />
                                <h4 className="text-2xl font-bold text-primary mb-4">Gestione Semplificata</h4>
                                <p className="text-gray-600 text-lg">Un solo impegno mensile, nessuna scadenza da rincorrere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* I vantaggi psicologici ed economici */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">I vantaggi psicologici ed economici</h2>
                        <p className="text-xl text-gray-600">Perché consolidare è una scelta intelligente.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Stop ai ritardi */}
                        <div className="flex gap-8 group">
                            <div className="w-16 h-16 bg-neutral-bg rounded-2xl flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                                <BrainCircuit className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-4"><span className="font-bold">Stop ai ritardi:</span></h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Essendo trattenuta alla fonte, non rischierai mai più di dimenticare un bollettino e finire segnalato in CRIF.
                                </p>
                            </div>
                        </div>

                        {/* Tasso più basso */}
                        <div className="flex gap-8 group">
                            <div className="w-16 h-16 bg-neutral-bg rounded-2xl flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                                <TrendingDown className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-4"><span className="font-bold">Tasso più basso:</span></h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Spesso i "piccoli prestiti" hanno tassi (TAEG) altissimi (oltre il 12-14%). La Cessione del Quinto ha tassi mediamente molto più bassi. Consolidando, risparmi sugli interessi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-primary p-12 lg:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10">
                            <HeartPulse className="w-16 h-16 text-secondary mx-auto mb-8" />
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">Libera il tuo stipendio oggi stesso.</h2>
                            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                                Analizziamo gratuitamente la tua situazione debitoria e troviamo la soluzione di consolidamento più vantaggiosa.
                            </p>
                            <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-2xl border border-gray-100 text-left max-w-2xl mx-auto">
                                {!isSuccess ? (
                                    <form className="space-y-4" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Nome</label>
                                                <input
                                                    name="nome"
                                                    required
                                                    value={formData.nome}
                                                    onChange={handleInputChange}
                                                    type="text"
                                                    placeholder="Nome"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Cognome</label>
                                                <input
                                                    name="cognome"
                                                    required
                                                    value={formData.cognome}
                                                    onChange={handleInputChange}
                                                    type="text"
                                                    placeholder="Cognome"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                                <input
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    type="email"
                                                    placeholder="Email"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Telefono</label>
                                                <input
                                                    name="telefono"
                                                    required
                                                    value={formData.telefono}
                                                    onChange={handleInputChange}
                                                    type="tel"
                                                    placeholder="Telefono"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Quanti prestiti vuoi unire?</label>
                                                <input
                                                    name="quantitaPrestiti"
                                                    required
                                                    value={formData.quantitaPrestiti}
                                                    onChange={handleInputChange}
                                                    type="text"
                                                    placeholder="Quanti prestiti vuoi unire?"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Data di nascita</label>
                                                <input
                                                    name="dataNascita"
                                                    required
                                                    value={formData.dataNascita}
                                                    onChange={handleInputChange}
                                                    type="date"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white appearance-none"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <input
                                                name="privacy"
                                                type="checkbox"
                                                id="privacy-consolidamento"
                                                required
                                                checked={formData.privacy}
                                                onChange={handleInputChange}
                                                className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                                            />
                                            <label htmlFor="privacy-consolidamento" className="text-xs text-gray-500 leading-snug cursor-pointer">
                                                Ho letto l'informativa sulla <a href="https://www.iubenda.com/privacy-policy/77015066/full-legal" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">Privacy Policy</a> e acconsento al trattamento dei miei dati personali.
                                            </label>
                                        </div>

                                        {error && (
                                            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 italic">
                                                {error}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-secondary hover:bg-emerald-600 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-secondary/20 uppercase tracking-widest text-xs flex items-center justify-center gap-2 disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    ANALISI IN CORSO...
                                                </>
                                            ) : 'RICHIEDI ANALISI CONSOLIDAMENTO'}
                                        </button>

                                        {/* Honeypot */}
                                        <input
                                            type="text"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleInputChange}
                                            className="hidden"
                                            aria-hidden="true"
                                        />
                                    </form>
                                ) : (
                                    <div className="text-center py-10 space-y-6">
                                        <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-primary mb-2">Richiesta Ricevuta!</h3>
                                            <p className="text-gray-600 italic px-4">Analizzeremo la tua situazione e ti contatteremo a breve.</p>
                                        </div>
                                        <button
                                            onClick={() => setIsSuccess(false)}
                                            className="text-secondary font-bold hover:underline uppercase tracking-widest text-xs"
                                        >
                                            Invia un'altra analisi
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConsolidamentoDebiti;
