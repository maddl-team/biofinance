"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Calculator } from 'lucide-react';
import Link from 'next/link';

const AdvancedLoanCalculator: React.FC = () => {
    const [step, setStep] = useState(1);
    const [salary, setSalary] = useState(1500);
    const [age, setAge] = useState(45);
    const [employmentType, setEmploymentType] = useState('statale');
    const [desiredAmount, setDesiredAmount] = useState(15000);
    const [installments, setInstallments] = useState(120);
    const [maxPayment, setMaxPayment] = useState(0);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
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
        console.log('Form submitted:', { salary, age, employmentType, desiredAmount, installments, ...formData });
        alert('Grazie! La tua richiesta è stata inviata.');
    };

    useEffect(() => {
        const max = salary / 5;
        setMaxPayment(max);
    }, [salary]);

    return (
        <div className="w-full max-w-2xl mx-auto rounded-3xl bg-white p-8 lg:p-10 shadow-2xl border border-secondary/20 relative z-10">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
                    <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Simulatore Biofinance</h3>
            </div>

            <div className="flex items-center justify-center mb-8 gap-2">
                <div className={`h-2 w-12 rounded-full transition-colors ${step === 1 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                <div className={`h-2 w-12 rounded-full transition-colors ${step === 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
            </div>

            {step === 1 ? (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Stipendio Netto */}
                        <div className="space-y-4">
                            <label className="block text-sm font-semibold text-gray-700">Stipendio Netto / Pensione Mensile (€)</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={salary}
                                    onChange={(e) => setSalary(Number(e.target.value))}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                                    placeholder="es. 1500"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">€</div>
                            </div>
                            <p className="text-[10px] text-gray-500 italic">Rata massima sostenibile (1/5): <span className="text-secondary font-bold">{maxPayment.toFixed(2)}€</span></p>
                        </div>

                        {/* Anni di Età */}
                        <div className="space-y-4">
                            <label className="block text-sm font-semibold text-gray-700">Anni di Età</label>
                            <input
                                type="number"
                                value={age}
                                onChange={(e) => setAge(Number(e.target.value))}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                                placeholder="es. 45"
                                min="18"
                                max="85"
                            />
                        </div>

                        {/* Tipo Impiego */}
                        <div className="space-y-4">
                            <label className="block text-sm font-semibold text-gray-700">Tipo Impiego</label>
                            <select
                                value={employmentType}
                                onChange={(e) => setEmploymentType(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all appearance-none bg-white"
                            >
                                <option value="statale">Statale / Pubblico (NoiPA)</option>
                                <option value="privato">Dipendente Azienda Privata</option>
                                <option value="pensionato">Pensionato (INPS/EX-INPDAP)</option>
                            </select>
                        </div>

                        {/* Importo Desiderato */}
                        <div className="space-y-4">
                            <label className="block text-sm font-semibold text-gray-700">Importo Desiderato (€)</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={desiredAmount}
                                    onChange={(e) => setDesiredAmount(Number(e.target.value))}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                                    placeholder="es. 15000"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">€</div>
                            </div>
                        </div>
                    </div>

                    {/* Duration */}
                    <div className="mt-10 pt-10 border-t border-gray-100">
                        <div className="w-full space-y-4">
                            <label className="block text-sm font-semibold text-gray-700 text-center md:text-left">Durata del prestito: <span className="text-secondary font-bold">{installments} mesi</span></label>
                            <input
                                type="range"
                                min="24"
                                max="120"
                                step="12"
                                value={installments}
                                onChange={(e) => setInstallments(Number(e.target.value))}
                                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-secondary"
                            />
                            <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                                <span>24 mesi</span>
                                <span>120 mesi</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <button
                        onClick={nextStep}
                        className="w-full mt-10 bg-primary hover:bg-black text-white text-lg font-bold py-5 rounded-2xl transition-all flex items-center justify-center group shadow-xl shadow-primary/10"
                    >
                        CONTINUA
                        <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
                    </button>

                    <div className="mt-6 flex items-center justify-center gap-4 text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                        <span className="flex items-center gap-1">< Calculator className="w-3 h-3" /> Zero Spese Istruttoria</span>
                    </div>
                </>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            name="privacy"
                            id="privacy-advanced"
                            required
                            checked={formData.privacy}
                            onChange={handleInputChange}
                            className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                        />
                        <label htmlFor="privacy-advanced" className="text-xs text-gray-500 leading-snug cursor-pointer">
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

export default AdvancedLoanCalculator;
