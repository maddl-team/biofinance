"use client";

import React, { useState } from 'react';
import {
    ArrowRightLeft,
    ArrowRight,
    Calculator,
    Briefcase,
    Milestone,
    Landmark,
    Users2,
    CopyPlus,
    CheckCircle2,
    Loader2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { sendToWebhook } from '../lib/webhook';

const DelegazionePagamento: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        telefono: '',
        dataNascita: '',
        email: '',
        azienda: '',
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
                    formType: 'Delegazione di Pagamento',
                    formData: formData,
                    website: formData.website,
                    sourceUrl: window.location.href
                }),
            });

            const result = await response.json();

            if (result.ok) {
                // Parallel non-blocking webhook submission only on success
                sendToWebhook('Delegazione di Pagamento', formData);
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
            <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 bg-neutral-bg overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6">
                                <CopyPlus className="w-4 h-4" />
                                DOPPIO QUINTO
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Delegazione di Pagamento: Quando il Quinto non basta.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Hai già una Cessione del Quinto in corso ma ti serve nuova liquidità? Non devi per forza rinnovare quella esistente (magari non puoi ancora farlo per i termini di legge). La soluzione è la <span className="font-bold">Delegazione di Pagamento</span>, conosciuta come "Doppio Quinto". È un secondo prestito che si affianca al primo, portando la trattenuta totale massima al <span className="font-bold">40% del tuo stipendio netto</span>. Scopri tutte le <Link href="/soluzioni-liquidita" className="underline">soluzioni di liquidità</Link> disponibili.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]">
                                <Image
                                    src="/img/delegazione-di-pagamento.jpg"
                                    alt="Delegazione di Pagamento Biofinance"
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

            {/* Differenze Chiave con la Cessione */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 uppercase tracking-wider">Differenze Chiave con la Cessione</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Mentre la Cessione è un diritto, la Delega richiede l'accettazione da parte del Datore di Lavoro (che deve gestire due trattenute invece di una).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Statali e Pubblici */}
                        <div className="bg-neutral-bg p-10 rounded-[3rem] border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary mb-8 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                <Landmark className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Statali e Pubblici</h3>
                            <p className="text-gray-600 leading-relaxed">
                                È quasi sempre accettata per convenzione (es. Ministeri, Scuole).
                            </p>
                        </div>

                        {/* Privati */}
                        <div className="bg-neutral-bg p-10 rounded-[3rem] border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary mb-8 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                <Briefcase className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Privati</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Dipende dall'azienda. Biofinance supporta l'amministrazione HR della tua azienda per facilitare l'accettazione, fornendo tutta la modulistica precompilata.
                            </p>
                        </div>

                        {/* Esclusiva Dipendenti */}
                        <div className="bg-primary p-10 rounded-[3rem] text-white group hover:shadow-2xl transition-all relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full -mt-10 -mr-10 blur-2xl"></div>
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-secondary mb-8 border border-white/20">
                                <Users2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Esclusiva Dipendenti</h3>
                            <p className="text-white/80 leading-relaxed italic">
                                Purtroppo, i pensionati non possono accedere alla Delega (per legge INPS accetta solo una trattenuta).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perché richiederla? */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[4rem] shadow-xl p-10 lg:p-20 border border-gray-50">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 uppercase">Perché richiederla?</h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="flex items-start gap-6 p-10 bg-secondary/5 rounded-[2.5rem] border border-secondary/10 group hover:bg-white hover:shadow-lg transition-all">
                                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-secondary shrink-0 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                    <Calculator className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-primary mb-4">Liquidità Importante</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Sommando Cessione + Delega puoi ottenere importi molto elevati (es. 40.000€ + 40.000€).
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 p-10 bg-primary/5 rounded-[2.5rem] border border-primary/10 group hover:bg-white hover:shadow-lg transition-all">
                                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-secondary shrink-0 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                    <Milestone className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-primary mb-4">Bypassare i Limiti di Rinnovo</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Se hai fatto la Cessione da poco (es. 1 anno), non puoi rinnovarla. La Delega è l'unico modo per avere subito altri soldi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-primary p-12 lg:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full -mt-48 -ml-48 blur-3xl group-hover:bg-secondary/20 transition-colors"></div>
                        <div className="relative z-10">
                            <ArrowRightLeft className="w-16 h-16 text-secondary mx-auto mb-8" />
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">Ottieni un Secondo Quinto</h2>
                            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                                Verifichiamo subito se la tua azienda o ente accetta la delegazione di pagamento.
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
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Nome Azienda</label>
                                                <input
                                                    name="azienda"
                                                    required
                                                    value={formData.azienda}
                                                    onChange={handleInputChange}
                                                    type="text"
                                                    placeholder="Nome Azienda"
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
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <input
                                                name="privacy"
                                                type="checkbox"
                                                id="privacy-delega"
                                                required
                                                checked={formData.privacy}
                                                onChange={handleInputChange}
                                                className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                                            />
                                            <label htmlFor="privacy-delega" className="text-xs text-gray-500 leading-snug cursor-pointer">
                                                Ho letto l'informativa sulla <Link href="/privacy" className="text-primary font-bold hover:underline">Privacy Policy</Link> e acconsento al trattamento dei miei dati personali.
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
                                                    VERIFICA IN CORSO...
                                                </>
                                            ) : 'VERIFICA FATTIBILITÀ DELEGA'}
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
                                            <p className="text-gray-600 italic px-4">Un nostro esperto verificherà la fattibilità della delega e ti ricontatterà.</p>
                                        </div>
                                        <button
                                            onClick={() => setIsSuccess(false)}
                                            className="text-secondary font-bold hover:underline uppercase tracking-widest text-xs"
                                        >
                                            Invia un'altra richiesta
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

export default DelegazionePagamento;
