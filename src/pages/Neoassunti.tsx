import React from 'react';
import {
    Clock,
    CalendarCheck,
    Zap,
    TrendingUp,
    ShieldCheck,
    ArrowRight,
    UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQ from '../components/sections/FAQ';

const Neoassunti: React.FC = () => {
    const rules = [
        {
            icon: <CalendarCheck className="w-8 h-8" />,
            title: <span className="font-bold">Superamento del Periodo di Prova:</span>,
            desc: "È fondamentale. Finché sei in prova, il contratto non è considerato definitivo."
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: <span className="font-bold">Anzianità Minima:</span>,
            desc: <>Generalmente, le compagnie assicurative richiedono dai <span className="font-bold">3 ai 6 mesi</span> di anzianità lavorativa presso l'attuale azienda per poter istruire la pratica.</>
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 bg-neutral-bg overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Cessione del Quinto Neoassunti: Quando è possibile richiederla?
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                L'entusiasmo per un nuovo lavoro spesso si accompagna a nuovi progetti di vita. Ma puoi ottenere credito se sei stato assunto da poco? In <span className="font-bold">Biofinance</span>, vogliamo essere trasparenti: la Cessione del Quinto si basa sulla garanzia del TFR (Trattamento di Fine Rapporto). Se sei un neoassunto, la tua "cassaforte" (il TFR) è ancora vuota o quasi. Tuttavia, esistono <span className="font-bold">finestre di opportunità</span> che valutiamo caso per caso.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/img/prestiti-neoassunti.jpg"
                                    alt="Neoassunti Biofinance"
                                    className="w-full h-[450px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* La regola dei 3 mesi */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">La regola dei "3 Mesi" e il Periodo di Prova</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Per accedere a qualsiasi forma di Cessione del Quinto nel settore privato, ci sono due ostacoli invalicabili che devi aver superato:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {rules.map((rule, idx) => (
                            <div key={idx} className="bg-neutral-bg p-10 lg:p-14 rounded-[3rem] border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mb-8 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {rule.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{rule.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{rule.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Il Jolly del TFR Pregresso */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-[3.5rem] p-10 lg:p-16 text-white overflow-hidden relative shadow-2xl">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-10 rounded-full -mr-48 -mt-48"></div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Zap className="w-8 h-8 text-secondary" />
                                    <span className="text-secondary font-black tracking-widest uppercase text-sm">Il Jolly del TFR Pregresso</span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white leading-tight">Hai cambiato lavoro?</h2>
                                <p className="text-xl text-white/80 leading-relaxed mb-8">
                                    C'è un'eccezione importante. Se sei "neoassunto" presso l'azienda attuale, ma provieni da un altro impiego e hai scelto di <span className="font-bold">trasferire il vecchio TFR</span> nella nuova azienda (senza liquidarlo), quel tesoretto vale come garanzia! In questo caso, i tempi di attesa si accorciano drasticamente e potresti accedere al credito molto prima. Vale anche se hai il TFR in un fondo pensione.
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/20">
                                <h4 className="text-xl font-bold mb-4 text-white">Vantaggio Immediato</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-6 h-6 text-secondary shrink-0 pt-0.5" />
                                        <span className="text-white">Il TFR precedente vale come garanzia immediata</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ShieldCheck className="w-6 h-6 text-secondary shrink-0 pt-0.5" />
                                        <span className="text-white">Accesso al credito senza attendere anni</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quanto posso ottenere? */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/img/calcolo-tfr.jpg"
                                alt="Calcolo TFR"
                                className="rounded-[3rem] shadow-2xl h-[400px] w-full object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">Quanto posso ottenere?</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Per i neoassunti, l'importo erogabile è strettamente collegato al TFR accantonato.
                            </p>
                            <div className="bg-neutral-bg p-8 rounded-3xl border border-gray-100 mb-8">
                                <p className="text-primary font-bold mb-2">Esempio:</p>
                                <p className="text-gray-600">Se hai accantonato solo 500€ di TFR, sarà difficile ottenere 20.000€.</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-2">La Soluzione Biofinance</h4>
                                    <p className="text-gray-600">
                                        Valutiamo proiezioni di TFR futuro se l'azienda è una SPA di alto rating (Large Corporate), permettendoti di ottenere liquidità superiore rispetto al solo accantonato.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white p-12 lg:p-20 rounded-[4rem] shadow-xl border border-gray-50 flex flex-col items-center">
                        <UserCheck className="w-16 h-16 text-secondary mb-8" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Non hai ancora i requisiti?</h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl">
                            Non aspettare l'ultimo minuto. Inserisci i tuoi dati oggi: i nostri consulenti calcoleranno esattamente <span className="font-bold">la data precisa</span> in cui diventerai finanziabile. Ti ricontatteremo noi quel giorno con il preventivo pronto.
                        </p>
                        <Link
                            to="/contatti"
                            className="bg-secondary hover:bg-teal-600 text-white font-black py-6 px-12 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm inline-flex items-center group"
                        >
                            VERIFICA LA TUA DATA DI ACCESSO
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQ
                title={<span className="font-bold">FAQ per Neoassunti</span>}
                items={[
                    {
                        question: <span className="font-bold">Domanda 1: Posso fare la Cessione del Quinto con un contratto di apprendistato?</span>,
                        answer: <><span className="font-bold">Risposta:</span> <span className="font-bold">NON E’ FATTIBILE</span>.</>
                    },
                    {
                        question: <span className="font-bold">Domanda 2: Ho un garante, serve a qualcosa?</span>,
                        answer: <><span className="font-bold">Risposta:</span> Nella Cessione del Quinto il garante (inteso come persona fisica) non serve e non viene richiesto. La garanzia è solo il TFR e la busta paga. Se non hai anzianità sufficiente, il garante non può sbloccare la pratica di Cessione, ma potrebbe servire per un Prestito Personale classico.</>
                    },
                    {
                        question: <span className="font-bold">Domanda 3: Se lavoro in un'agenzia interinale posso chiedere il prestito?</span>,
                        answer: <><span className="font-bold">Risposta:</span> I contratti tramite agenzia interinale sono spesso a tempo determinato. Per la Cessione del Quinto serve un contratto a tempo indeterminato diretto con l'azienda.</>
                    }
                ]}
            />
        </div>
    );
};

export default Neoassunti;
