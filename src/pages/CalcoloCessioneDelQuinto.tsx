import React from 'react';
import {
    Calculator,
    ShieldCheck,
    Layers,
    TrendingDown,
    Brain
} from 'lucide-react';
import AdvancedLoanCalculator from '../components/ui/AdvancedLoanCalculator';
import FAQ from '../components/sections/FAQ';

const CalcoloCessioneDelQuinto: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 bg-secondary-light overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Calcolo Cessione del Quinto: Scopri la tua Rata in Tempo Reale.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Benvenuto nel simulatore ufficiale Biofinance. Hai un progetto da realizzare? Inserisci pochi dati essenziali per visualizzare subito un preventivo di massima.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Il nostro algoritmo incrocia i tassi delle migliori convenzioni (INPS, NoiPA, Grandi Aziende) per mostrarti la soluzione più conveniente.
                            </p>
                        </div>
                        <div className="relative">
                            <AdvancedLoanCalculator />
                            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary opacity-5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
            </section>

            {/* La Matematica Semplice */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Come si calcola la Cessione del Quinto? (La Matematica Semplice)</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-6">
                            <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-secondary/20">
                                <Calculator className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary">La Regola del 20%</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Prendi il tuo stipendio netto (o pensione) e dividilo per 5. Quella è la tua Rata Massima Sostenibile.
                            </p>
                            <div className="bg-neutral-bg p-4 rounded-xl border-l-4 border-secondary">
                                <p className="text-sm font-bold text-primary">Esempio: Stipendio 1.500€ {"->"} Rata max 300€.</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-secondary/20">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary">Coefficiente Assicurativo</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Più sei giovane, meno incide il costo dell'assicurazione rischio vita (obbligatoria). Questo parametro influenza il netto ricavo finale.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-secondary/20">
                                <Layers className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary">L'Azienda (TFR)</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Se sei un dipendente privato, il TFR accantonato funge da garanzia, permettendoci di offrirti tassi più aggressivi rispetto alla media.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simulazione vs Preventivo Reale */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1200"
                                    alt="Fiducia e Familiarità Biofinance"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <p className="text-lg font-medium italic">"Con Biofinance abbiamo finalmente realizzato il nostro progetto con la massima serenità."</p>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-2xl -z-10"></div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Simulazione vs Preventivo Reale: Qual è la differenza?</h2>
                            <p className="text-lg text-gray-600 mb-8">Spesso i software online danno risultati diversi dalla realtà. Ecco perché:</p>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <TrendingDown className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-lg">Convenzioni "Nascoste"</h4>
                                        <p className="text-gray-600">Alcuni accordi specifici per Ministeri o aziende partner possono abbattere ulteriormente il TAEG rispetto al calcolatore online.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <Brain className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-lg">Valutazione Anzianità</h4>
                                        <p className="text-gray-600">Un'elevata anzianità di servizio permette spesso di ottenere liquidità extra che i software standard non calcolano.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <Layers className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-lg">Gestione Pignoramenti</h4>
                                        <p className="text-gray-600">Un consulente può valutare rinegoziazioni o coesistenze di trattenute anche in presenza di pignoramenti.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Doppia Cessione */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-[3rem] p-10 lg:p-16 text-white overflow-hidden relative">
                        <div className="max-w-3xl relative z-10">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Vuoi più liquidità? Scopri la "Doppia Cessione"</h2>
                            <p className="text-lg opacity-80 mb-10 leading-relaxed">
                                Se il calcolo della Cessione del Quinto non soddisfa la cifra di cui hai bisogno, ricorda che i Dipendenti possono accedere alla Delegazione di Pagamento. Questo ti permette di impegnare un secondo 20% dello stipendio, portando la trattenuta massima al 40% (2/5) e raddoppiando la liquidità.
                            </p>
                            <button className="bg-secondary hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-2xl transition-all transform hover:scale-105 shadow-xl shadow-secondary/20">
                                RICHIEDI ANALISI FATTIBILITÀ DELEGA
                            </button>
                        </div>
                        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-secondary/10 to-transparent pointer-events-none"></div>
                        <Layers className="absolute -right-10 -bottom-10 w-64 h-64 text-secondary opacity-5 pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* Blocca il Tasso CTA */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Blocca il Tasso Oggi</h2>
                    <p className="text-xl text-gray-600 mb-10">
                        I tassi finanziari fluttuano. Richiedendo un contatto oggi, "congeli" le condizioni attuali per la tua istruttoria gratuita.
                    </p>
                    <button className="bg-accent hover:bg-teal-700 text-white text-xl font-bold px-12 py-6 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1">
                        INVIA LA RICHIESTA SENZA IMPEGNO
                    </button>
                    <p className="mt-6 text-sm text-gray-500 font-medium">Consulenza 100% Gratuita e Non Vincolante</p>
                </div>
            </section>

            {/* FAQ */}
            <FAQ
                title="Dubbi sul Calcolo?"
                items={[
                    {
                        question: "Il calcolo online della Cessione del Quinto è vincolante?",
                        answer: "No, la simulazione online su Biofinance è puramente indicativa e non costituisce un vincolo contrattuale. Serve per darti un'idea chiara della rata sostenibile. Il preventivo definitivo (modulo SECCI) verrà fornito gratuitamente dal consulente dopo aver verificato i documenti."
                    },
                    {
                        question: "Quanto tempo ci vuole per ricevere i soldi dopo il calcolo?",
                        answer: "Una volta accettato il preventivo, i tempi medi di erogazione variano dai 7 ai 15 giorni lavorativi, a seconda della velocità dell'amministrazione nel rilasciare il benestare. Biofinance offre possibilità di acconto immediato in casi specifici."
                    },
                    {
                        question: "Posso chiedere la Cessione del Quinto se ho un contratto a tempo determinato?",
                        answer: "Generalmente richiede un contratto a tempo indeterminato. Tuttavia, se il contratto determinato ha una durata residua sufficiente a coprire il piano di ammortamento (es. finanziamento di 2 anni su contratto che scade tra 3 anni), è possibile valutare la pratica."
                    }
                ]}
            />
        </div>
    );
};

export default CalcoloCessioneDelQuinto;
