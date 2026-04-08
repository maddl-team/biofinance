"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { sendToWebhook } from '../../lib/webhook';

const LoanCalculator: React.FC = () => {
    const [step, setStep] = useState(1);
    const [amount, setAmount] = useState(15000);
    const [installments, setInstallments] = useState(48);

    // Form data for Step 2
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthDate: '',
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

    const nextStep = () => setStep(2);
    const prevStep = () => setStep(1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    formType: 'Calcolatore Rata Semplice',
                    formData: {
                        ...formData,
                        importoRichiesto: `${amount} €`,
                        numeroRate: installments
                    },
                    website: formData.website,
                    sourceUrl: window.location.href
                }),
            });

            const result = await response.json();
            if (result.ok) {
                // Parallel non-blocking webhook submission only on success
                sendToWebhook('Calcolatore Rata Semplice', {
                    ...formData,
                    importoRichiesto: `${amount} €`,
                    numeroRate: installments
                });
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

    const minAmount = 2000;
    const maxAmount = 75000;
    const amountStep = 500;

    const minInstallments = 24;
    const maxInstallments = 120;
    const installmentsStep = 6;

    return (
        <div className="w-full max-w-xl mx-auto rounded-3xl bg-white p-8 lg:p-10 shadow-2xl relative z-10 border border-gray-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-dark text-center mb-6">
                Calcola la tua rata
            </h2>
            {/* Progress indicator */}
            <div className="flex items-center justify-center mb-8 gap-2">
                <div className={`h-2 w-12 rounded-full transition-colors ${step === 1 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                <div className={`h-2 w-12 rounded-full transition-colors ${step === 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
            </div>

            {step === 1 ? (
                <div className="space-y-10">
                    {/* Step 1: Sliders */}
                    <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
                            <label htmlFor="amount-slider" className="text-xl text-neutral-dark">
                                Di quale <span className="font-bold">importo</span> hai bisogno?
                            </label>
                            <span className="text-3xl font-bold text-primary" aria-live="polite">
                                {amount.toLocaleString('it-IT')} €
                            </span>
                        </div>
                        <input
                            id="amount-slider"
                            type="range"
                            min={minAmount}
                            max={maxAmount}
                            step={amountStep}
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-secondary"
                            aria-valuetext={`${amount.toLocaleString('it-IT')} Euro`}
                            style={{
                                background: `linear-gradient(to right, #10B981 0%, #10B981 ${(amount - minAmount) / (maxAmount - minAmount) * 100}%, #f3f4f6 ${(amount - minAmount) / (maxAmount - minAmount) * 100}%, #f3f4f6 100%)`
                            }}
                        />
                        <div className="flex justify-between text-sm text-gray-400 mt-3 font-medium">
                            <span>{minAmount.toLocaleString('it-IT')} €</span>
                            <span>{maxAmount.toLocaleString('it-IT')} €</span>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
                            <label htmlFor="installments-slider" className="text-xl text-neutral-dark">
                                In quante <span className="font-bold">rate</span> vuoi pagare?
                            </label>
                            <span className="text-3xl font-bold text-primary" aria-live="polite">
                                {installments} rate
                            </span>
                        </div>
                        <input
                            id="installments-slider"
                            type="range"
                            min={minInstallments}
                            max={maxInstallments}
                            step={installmentsStep}
                            value={installments}
                            onChange={(e) => setInstallments(Number(e.target.value))}
                            className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-secondary"
                            aria-valuetext={`${installments} rate mensili`}
                            style={{
                                background: `linear-gradient(to right, #10B981 0%, #10B981 ${(installments - minInstallments) / (maxInstallments - minInstallments) * 100}%, #f3f4f6 ${(installments - minInstallments) / (maxInstallments - minInstallments) * 100}%, #f3f4f6 100%)`
                            }}
                        />
                        <div className="flex justify-between text-sm text-gray-400 mt-3 font-medium">
                            <span>{minInstallments} rate</span>
                            <span>{maxInstallments} rate</span>
                        </div>
                    </div>

                    <button
                        onClick={nextStep}
                        className="w-full bg-neutral-dark hover:bg-black text-white text-lg font-bold py-5 rounded-2xl transition-all flex items-center justify-center group"
                    >
                        CONTINUA
                        <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            ) : !isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 2: Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Nome</label>
                            <input
                                type="text"
                                name="firstName"
                                required
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="Tuo nome"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Cognome</label>
                            <input
                                type="text"
                                name="lastName"
                                required
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="Tuo cognome"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            placeholder="esempio@mail.com"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Telefono</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="333 1234567"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Data di nascita</label>
                            <input
                                type="date"
                                name="birthDate"
                                required
                                value={formData.birthDate}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            name="privacy"
                            id="privacy"
                            required
                            checked={formData.privacy}
                            onChange={handleInputChange}
                            className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                        />
                        <label htmlFor="privacy" className="text-xs text-gray-500 leading-snug cursor-pointer">
                            Ho letto l'informativa sulla <a href="https://www.iubenda.com/privacy-policy/77015066/full-legal" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">Privacy Policy</a> e acconsento al trattamento dei miei dati personali.
                        </label>
                    </div>

                    {error && (
                        <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 italic">
                            {error}
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                            type="button"
                            onClick={prevStep}
                            disabled={isSubmitting}
                            className="flex-1 px-8 py-5 border-2 border-gray-200 text-gray-600 font-bold rounded-2xl hover:bg-gray-50 transition-all text-sm uppercase tracking-wider disabled:opacity-50"
                        >
                            Indietro
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-[2] bg-secondary hover:bg-emerald-600 text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-secondary/20 uppercase tracking-widest text-sm disabled:opacity-70 flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    INVIO IN CORSO...
                                </>
                            ) : 'Invia Richiesta'}
                        </button>
                    </div>

                    {/* Honeypot hidden field */}
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
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">Richiesta Inviata!</h3>
                        <p className="text-gray-600 italic">Grazie per averci scelto. Un nostro consulente ti contatterà al più presto.</p>
                    </div>
                    <button
                        onClick={() => {
                            setStep(1);
                            setIsSuccess(false);
                            setFormData(prev => ({ ...prev, firstName: '', lastName: '', email: '', phone: '', birthDate: '', privacy: false }));
                        }}
                        className="text-secondary font-bold hover:underline uppercase tracking-widest text-xs"
                    >
                        Nuovo Calcolo
                    </button>
                </div>
            )}
        </div >
    );
};

export default LoanCalculator;
