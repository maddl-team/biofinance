import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const LoanCalculator: React.FC = () => {
    const [amount, setAmount] = useState(15000);
    const [installments, setInstallments] = useState(48);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    const TAN = 9.50;
    const TAEG = 9.92;

    useEffect(() => {
        // Simple calculation for demonstration (this should ideally match a specific formula)
        // PMT = (P * r) / (1 - (1 + r)^-n)
        const monthlyRate = TAN / 100 / 12;
        const pmt = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -installments));
        setMonthlyPayment(pmt);
    }, [amount, installments]);

    return (
        <div className="w-full max-w-xl mx-auto rounded-3xl bg-white p-8 lg:p-10 shadow-2xl relative z-10">
            <div className="space-y-10">
                {/* Amount Slider */}
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
                        min="500"
                        max="30000"
                        step="500"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-secondary"
                        style={{
                            background: `linear-gradient(to right, #008080 0%, #008080 ${(amount - 500) / (30000 - 500) * 100}%, #f3f4f6 ${(amount - 500) / (30000 - 500) * 100}%, #f3f4f6 100%)`
                        }}
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-3 font-medium">
                        <span>500 €</span>
                        <span>30.000 €</span>
                    </div>
                </div>

                {/* Installments Slider */}
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
                        min="6"
                        max="84"
                        step="6"
                        value={installments}
                        onChange={(e) => setInstallments(Number(e.target.value))}
                        className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-secondary"
                        style={{
                            background: `linear-gradient(to right, #008080 0%, #008080 ${(installments - 6) / (84 - 6) * 100}%, #f3f4f6 ${(installments - 6) / (84 - 6) * 100}%, #f3f4f6 100%)`
                        }}
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-3 font-medium">
                        <span>6 rate</span>
                        <span>84 rate</span>
                    </div>
                </div>

                {/* Rates Display */}
                <div className="pt-6 border-t border-gray-100">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                            <div className="text-sm">
                                <span className="text-gray-500 mr-2">A partire da</span>
                                <span className="text-gray-500 font-medium">TAN</span>
                                <span className="ml-2 font-bold text-lg text-neutral-dark">9,50%</span>
                            </div>
                            <div className="text-sm">
                                <span className="text-gray-500 font-medium">TAEC</span>
                                <span className="ml-2 font-bold text-lg text-neutral-dark">{TAEG.toFixed(2).replace('.', ',')}%</span>
                            </div>
                        </div>
                        <div className="pl-6 border-l border-gray-300">
                            <span className="text-gray-500 text-sm block">Rata</span>
                            <span className="text-2xl font-black text-neutral-dark">{monthlyPayment.toFixed(2).replace('.', ',')}€</span>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <button
                    className="w-full bg-neutral-dark hover:bg-black text-white text-lg font-bold py-5 rounded-2xl transition-all flex items-center justify-center group"
                >
                    CONTINUA
                    <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
                </button>
            </div>

            {/* Disclaimer moved to Hero component to match screenshot layout better if needed, 
                but keeping it here as per screenshot structure */}
            <p className="mt-8 text-[10px] text-gray-400 leading-relaxed text-justify">
                Le condizioni economiche dell'esempio, in particolare in termini di tassi applicati (TAN e TAEG) e importo delle rate mensili, potranno subire variazioni in funzione della valutazione del suo profilo finanziario effettuata da Agos in fase di istruttoria. Conseguentemente il TAEG potrebbe subire un'oscillazione massima di 1,0 punti percentuali e, comunque, nel rispetto dei tassi soglia determinati ex art. 2 L. 108/96 e successive modifiche. Ulteriori variazioni rispetto alle condizioni di partenza potrebbero essere determinate dalla richiesta di un prodotto/importo/durata diverso o di adesione ad un prodotto assicurativo facoltativo. I costi per l'attività istruttoria, se previsti, pari a 1,5% dell'importo erogato per un massimo di € 300 concorrono alla determinazione dell'importo finanziato e sono soggetti all'applicazione di interessi calcolati al TAN contrattuale.
            </p>
        </div>
    );
};

export default LoanCalculator;
