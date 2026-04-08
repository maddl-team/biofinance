"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import {
    ArrowRight,
    ShieldCheck,
    Scale,
    Activity,
    ClipboardCheck,
    CheckCircle2,
    Loader2
} from 'lucide-react';
import Link from 'next/link';
import { sendToWebhook } from '../lib/webhook';

const SegnalatiCrif: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        telefono: '',
        dataNascita: '',
        email: '',
        tipoSoggettivita: '',
        privacy: false,
        website: '' // Honeypot
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target as any;
        const checked = (e.target as HTMLInputElement).checked;
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
                    formType: 'Segnalati CRIF',
                    formData: formData,
                    website: formData.website,
                    sourceUrl: window.location.href
                }),
            });

            const result = await response.json();

            if (result.ok) {
                // Parallel non-blocking webhook submission only on success
                sendToWebhook('Segnalati CRIF', formData);
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
                                <ShieldCheck className="w-4 h-4" />
                                DIRITTO AL CREDITO
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Segnalato in CRIF? Per noi non sei un "Cattivo Pagatore".
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Nella vita può capitare di saltare una rata o avere un disguido finanziario. Per le banche tradizionali diventi "invisibile" o "non bancabile". Per <span className="font-bold">Biofinance</span>, sei un lavoratore o un pensionato con dei diritti. La <Link href="/cessione-del-quinto" className="underline">Cessione del Quinto</Link> è <span className="font-bold">l'unica forma di prestito garantita per legge</span> accessibile anche a chi ha segnalazioni negative in banche dati (CRIF, CTC, Experian) o protesti. Scopri tutte le <Link href="/soluzioni-liquidita" className="underline">soluzioni di liquidità</Link> disponibili.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="/img/prestiti-segnalati-crif.jpg"
                                    width={1352}
                                    height={1000}
                                    alt="Segnalati CRIF Biofinance"
                                    priority
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perché possiamo finanziarti? */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 leading-tight">Perché possiamo finanziarti?</h2>
                        <div className="p-10 bg-neutral-bg rounded-[3rem] border border-gray-100 relative">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg">
                                <ClipboardCheck className="w-6 h-6" />
                            </div>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Il motivo è tecnico: la garanzia del prestito non è la tua affidabilità passata, ma la tua <span className="font-bold">busta paga presente</span>. L'assicurazione copre il rischio di perdita del lavoro o premorienza, non il rischio che tu non paghi le rate (perché le paga il tuo datore di lavoro!). Quindi, anche se hai avuto problemi con un mutuo o un prestito precedente, la tua richiesta viene valutata positivamente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gestione Pignoramenti */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Gestione Pignoramenti</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Hai già un pignoramento sullo stipendio? Non è un problema bloccante. Possiamo intervenire in due modi:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Coesistenza */}
                        <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-50 group hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-colors">
                                <Activity className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-6"><span className="font-bold">Coesistenza:</span></h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Se il pignoramento è piccolo, la Cessione del Quinto può affiancarsi (rispettando il limite del 50% dello stipendio impegnato).
                            </p>
                        </div>

                        {/* Estinzione */}
                        <div className="bg-primary p-12 rounded-[3.5rem] shadow-xl text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full -mt-10 -mr-10 blur-2xl"></div>
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-secondary mb-8 border border-white/20 group-hover:bg-white group-hover:text-primary transition-colors">
                                <Scale className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-white"><span className="font-bold">Estinzione (Saldo e Stralcio):</span></h3>
                            <p className="text-lg text-white/80 leading-relaxed">
                                Usiamo la Cessione del Quinto per saldare il debito che ha causato il pignoramento, cancellando la trattenuta giudiziaria e sostituendola con la rata volontaria (spesso più bassa).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-secondary p-12 lg:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10 text-white">
                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/30">
                                <Activity className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">RIPARTI CON BIOFINANCE</h2>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                                Richiedi un preventivo anonimo e discreto oggi stesso. Valutiamo ogni situazione con cura e competenza.
                            </p>
                            <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-2xl border border-gray-100 text-left max-w-2xl mx-auto text-gray-900">
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
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Di quante rate sei in ritardo?</label>
                                            <textarea
                                                name="tipoSoggettivita" // Reusing this field for the info
                                                rows={3}
                                                value={formData.tipoSoggettivita}
                                                onChange={handleInputChange}
                                                placeholder="Usa questo campo per descrivere la tua situazione. Più informazioni ci darai e più saremo in grado di aiutarti"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <input
                                                name="privacy"
                                                type="checkbox"
                                                id="privacy-crif"
                                                required
                                                checked={formData.privacy}
                                                onChange={handleInputChange}
                                                className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                                            />
                                            <label htmlFor="privacy-crif" className="text-xs text-gray-500 leading-snug cursor-pointer">
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
                                                    RICHIESTA IN CORSO...
                                                </>
                                            ) : 'PREVENTIVO ANONIMO'}
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
                                            <p className="text-gray-600 italic px-4">Ti ricontatteremo a breve per un preventivo discreto.</p>
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

export default SegnalatiCrif;
