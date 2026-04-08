import React from 'react';
import Image from 'next/image';
import {
    Calculator,
    ShieldCheck,
    Layers,
    TrendingDown,
    Brain,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import AdvancedLoanCalculator from '../components/ui/AdvancedLoanCalculator';
import FAQ from '../components/sections/FAQ';

const CalcoloCessioneDelQuinto: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-12 pb-14 lg:pt-32 lg:pb-20 bg-neutral-bg overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                <span className="font-bold">Calcolo Cessione del Quinto: Scopri la tua Rata e il Netto Erogato in Tempo Reale.</span>
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Benvenuto nel simulatore ufficiale <span className="font-bold">Biofinance</span>. Hai un progetto da realizzare? Inserisci pochi dati essenziali per visualizzare subito un preventivo di massima.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Il nostro algoritmo incrocia i tassi delle migliori convenzioni (INPS, NoiPA, Grandi Aziende) per mostrarti la soluzione più conveniente.
                            </p>
                        </div>
                        <div className="relative" id="calcolo-form">
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4"><span className="font-bold">Come si calcola la Cessione del Quinto?</span></h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Molti siti ti danno un numero e basta. Noi vogliamo che tu capisca <span className="font-bold">perché</span> ottieni quel risultato. Il calcolo si basa su 3 fattori chiave che determinano il tuo "Montante" (totale da rimborsare) e il "Netto Ricavo" (soldi in tasca):
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-6">
                            <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-secondary/20">
                                <Calculator className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary"><span className="font-bold">La Regola del 20%</span></h3>
                            <p className="text-gray-600 leading-relaxed">
                                Prendi il tuo stipendio netto (o pensione) e dividilo per 5. Quella è la tua <span className="font-bold">Rata Massima Sostenibile.</span>
                            </p>
                            <div className="bg-neutral-bg p-4 rounded-xl border-l-4 border-secondary">
                                <p className="text-sm font-bold text-primary"><span className="font-bold">Esempio: Stipendio € 1.500 {'->'} Rata max € 300.</span></p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-secondary/20">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary"><span className="font-bold">Il Coefficiente Assicurativo (Età)</span></h3>
                            <p className="text-gray-600 leading-relaxed">
                                Più sei giovane, meno incide il costo dell'assicurazione rischio vita (obbligatoria).
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-secondary/20">
                                <Layers className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary"><span className="font-bold">L'Azienda (TFR)</span></h3>
                            <p className="text-gray-600 leading-relaxed">
                                Se sei un dipendente privato, il TFR accantonato in azienda funge da garanzia, permettendoci di offrirti tassi più aggressivi rispetto alla media di mercato.
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
                                <Image
                                    src="/img/calcolo-cessione-del-quinto.jpg"
                                    width={1352}
                                    height={1000}
                                    alt="Fiducia e Familiarità Biofinance"
                                    priority
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
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6"><span className="font-bold">Simulazione vs Preventivo Reale: Qual è la differenza?</span></h2>
                            <p className="text-lg text-gray-600 mb-8">Il calcolatore online ti offre una stima molto precisa, ma il <span className="font-bold">tocco umano di un consulente Biofinance</span> può fare la differenza tra un "buon prestito" e il "miglior prestito". Ecco perché:</p>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <TrendingDown className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-lg"><span className="font-bold">Convenzioni "Nascoste":</span></h4>
                                        <p className="text-gray-600">Alcuni accordi (es. per Ministeri specifici o aziende partner come Ferrovie o Poste) non sono pubblici nel calcolatore generico ma possono abbattere ulteriormente il TAEG.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <Brain className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-lg"><span className="font-bold">Valutazione Anzianità:</span></h4>
                                        <p className="text-gray-600">Se hai molta anzianità di servizio, possiamo spingere per ottenere liquidità extra che il software standard potrebbe non calcolare.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <Layers className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-lg"><span className="font-bold">Gestione Pignoramenti:</span></h4>
                                        <p className="text-gray-600">Se hai già un pignoramento in busta paga, il calcolatore potrebbe bloccarti. Un nostro consulente, invece, può valutare la rinegoziazione o la coesistenza delle trattenute.</p>
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
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white"><span className="font-bold">Vuoi più liquidità? Scopri la "Doppia Cessione"</span></h2>
                            <p className="text-lg opacity-80 mb-10 leading-relaxed">
                                Se il calcolo della Cessione del Quinto non soddisfa la cifra di cui hai bisogno, ricorda che i Dipendenti (non i pensionati) possono accedere alla <span className="font-bold">Delegazione di Pagamento.</span> Questo ti permette di impegnare un <span className="font-bold">secondo 20%</span> dello stipendio, portando la trattenuta massima al <span className="font-bold">40% (2/5)</span> e raddoppiando la liquidità ottenibile.
                            </p>
                            <Link href="/delegazione-di-pagamento" className="bg-secondary hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-2xl transition-all transform hover:scale-105 shadow-xl shadow-secondary/20 inline-flex items-center">
                                RICHIEDI ANALISI FATTIBILITÀ DELEGA <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-secondary/10 to-transparent pointer-events-none"></div>
                        <Layers className="absolute -right-10 -bottom-10 w-64 h-64 text-secondary opacity-5 pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* Blocca il Tasso CTA */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6"><span className="font-bold">Blocca il Tasso Oggi</span></h2>
                    <p className="text-xl text-gray-600 mb-10">
                        I tassi finanziari fluttuano. Richiedendo un contatto oggi, "congeli" le condizioni attuali per la tua istruttoria gratuita.
                    </p>
                    <Link
                        href="#calcolo-form"
                        className="bg-accent hover:bg-teal-700 text-white text-xl font-bold px-12 py-6 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1 inline-block"
                    >
                        INVIA LA RICHIESTA SENZA IMPEGNO
                    </Link>
                    <p className="mt-6 text-sm text-gray-500 font-medium">Consulenza 100% Gratuita e Non Vincolante</p>
                </div>
            </section>

            {/* FAQ */}
            <FAQ
                title={<span className="font-bold">Dubbi sul Calcolo?</span>}
                items={[
                    {
                        question: <span className="font-bold">Il calcolo online della Cessione del Quinto è vincolante?</span>,
                        answer: <><span className="font-bold"></span> No, la simulazione online su Biofinance è puramente indicativa e non costituisce un vincolo contrattuale. Serve per darti un'idea chiara della rata sostenibile. Il preventivo definitivo (modulo SECCI) verrà fornito gratuitamente dal consulente dopo aver verificato i documenti.</>
                    },
                    {
                        question: <span className="font-bold">Quanto tempo ci vuole per ricevere i soldi dopo il calcolo?</span>,
                        answer: <><span className="font-bold"></span> Una volta accettato il preventivo, i tempi medi di erogazione variano dai 7 ai 15 giorni lavorativi, a seconda della velocità dell'amministrazione (azienda o ente pensionistico) nel rilasciare il benestare. Biofinance offre possibilità di acconto immediato in casi specifici.</>
                    },
                    {
                        question: <span className="font-bold">Posso chiedere la Cessione del Quinto se ho un contratto a tempo determinato?</span>,
                        answer: <><span className="font-bold"></span> Generalmente la Cessione del Quinto richiede un contratto a tempo indeterminato. Tuttavia, se il contratto determinato ha una durata residua sufficiente a coprire il piano di ammortamento (es. finanziamento di 2 anni su contratto che scade tra 3 anni), è possibile valutare la pratica.</>
                    }
                ]}
            />
        </div>
    );
};

export default CalcoloCessioneDelQuinto;
