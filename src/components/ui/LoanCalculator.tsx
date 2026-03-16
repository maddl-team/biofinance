"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
        privacy: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const nextStep = () => setStep(2);
    const prevStep = () => setStep(1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { amount, installments, ...formData });
        alert('Grazie! La tua richiesta è stata inviata.');
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
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl text-neutral-dark">
                                Di quale <span className="font-bold">importo</span> hai bisogno?
                            </h3>
                            <span className="text-3xl font-bold text-primary">
                                {amount.toLocaleString('it-IT')} €
                            </span>
                        </div>
                        <input
                            type="range"
                            min={minAmount}
                            max={maxAmount}
                            step={amountStep}
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-secondary"
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
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl text-neutral-dark">
                                In quante <span className="font-bold">rate</span> vuoi pagare?
                            </h3>
                            <span className="text-3xl font-bold text-primary">
                                {installments} rate
                            </span>
                        </div>
                        <input
                            type="range"
                            min={minInstallments}
                            max={maxInstallments}
                            step={installmentsStep}
                            value={installments}
                            onChange={(e) => setInstallments(Number(e.target.value))}
                            className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-secondary"
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
            ) : (
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
                            Ho letto l'informativa sulla <Link href="/privacy" className="text-primary font-bold hover:underline">Privacy Policy</Link> e acconsento al trattamento dei miei dati personali.
                        </label>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                            type="button"
                            onClick={prevStep}
                            className="flex-1 px-8 py-5 border-2 border-gray-200 text-gray-600 font-bold rounded-2xl hover:bg-gray-50 transition-all text-sm uppercase tracking-wider"
                        >
                            Indietro
                        </button>
                        <button
                            type="submit"
                            className="flex-[2] bg-secondary hover:bg-emerald-600 text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-secondary/20 uppercase tracking-widest text-sm"
                        >
                            Invia Richiesta
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default LoanCalculator;
