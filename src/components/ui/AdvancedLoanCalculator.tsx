import React, { useState, useEffect } from 'react';
import { ArrowRight, Calculator } from 'lucide-react';

const AdvancedLoanCalculator: React.FC = () => {
    const [salary, setSalary] = useState(1500);
    const [age, setAge] = useState(45);
    const [employmentType, setEmploymentType] = useState('statale');
    const [desiredAmount, setDesiredAmount] = useState(15000);
    const [installments, setInstallments] = useState(120);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [maxPayment, setMaxPayment] = useState(0);

    useEffect(() => {
        // Calculation logic for Cessione del Quinto
        // Max payment is 1/5 of net salary
        const max = salary / 5;
        setMaxPayment(max);

        // For the simulation, we use a simplified interest rate 
        // based on employment type
        let baseTAN = 8.5;
        if (employmentType === 'privato') baseTAN = 9.5;
        if (employmentType === 'pensionato') baseTAN = 9.0;

        // Age also affects the rate (insurance cost)
        const ageImpact = Math.max(0, (age - 30) * 0.05);
        const effectiveTAN = baseTAN + ageImpact;

        const monthlyRate = effectiveTAN / 100 / 12;
        const pmt = (desiredAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -installments));

        // If PMT > maxPayment, we should ideally adjust something, 
        // but for now just show the calculated payment
        setMonthlyPayment(pmt);
    }, [salary, age, employmentType, desiredAmount, installments]);

    return (
        <div className="w-full max-w-2xl mx-auto rounded-3xl bg-white p-8 lg:p-10 shadow-2xl border border-secondary/20 relative z-10">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
                    <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Simulatore Biofinance</h3>
            </div>

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

            {/* Duration and Result */}
            <div className="mt-10 pt-10 border-t border-gray-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="w-full md:w-1/2 space-y-4">
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

                    <div className="w-full md:w-auto bg-neutral-bg p-6 rounded-2xl text-center md:text-right border border-gray-100">
                        <span className="text-gray-500 text-sm block mb-1">Stima Rata Mensile</span>
                        <span className="text-4xl font-black text-primary">
                            {monthlyPayment > maxPayment ? (
                                <span className="text-red-500">Fuori Limite*</span>
                            ) : (
                                `${monthlyPayment.toFixed(2).replace('.', ',')}€`
                            )}
                        </span>
                        {monthlyPayment > maxPayment && (
                            <p className="text-[10px] text-red-400 mt-2 max-w-[200px] mx-auto md:ml-auto">*La rata calcolata supera il quinto cedibile. Riduci l'importo o aumenta la durata.</p>
                        )}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <button
                className="w-full mt-10 bg-primary hover:bg-black text-white text-lg font-bold py-5 rounded-2xl transition-all flex items-center justify-center group shadow-xl shadow-primary/10"
            >
                RICHIEDI PREVENTIVO GRATUITO
                <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="mt-6 flex items-center justify-center gap-4 text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                <span className="flex items-center gap-1">< Calculator className="w-3 h-3" /> Zero Spese Istruttoria</span>
                <span className="flex items-center gap-1">< Calculator className="w-3 h-3" /> No Segnalazioni CRIF</span>
            </div>
        </div>
    );
};

export default AdvancedLoanCalculator;
