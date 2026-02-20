import React from 'react';
import {
    RefreshCcw,
    ArrowRight,
    Clock,
    CheckCircle2,
    HandCoins,
    ShieldCheck,
    FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQ from '../components/sections/FAQ';

const RinnovoCessione: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 bg-secondary-light overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Rinnovo Cessione del Quinto: Trasforma la Tua Vecchia Rata in Nuova Liquidità.
                            </h1>
                            <div className="space-y-6 mb-8">
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    Avere una Cessione del Quinto in corso non significa avere le mani legate. Se hai bisogno di nuova liquidità, il Rinnovo (o rinegoziazione) è lo strumento che ti permette di chiudere il vecchio finanziamento e aprirne uno nuovo, ottenendo la differenza direttamente sul tuo conto corrente.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    In Biofinance, siamo specialisti nell'analizzare i contratti in essere per capire se rinnovare conviene davvero. Spesso, i vecchi prestiti hanno tassi più alti di quelli attuali: rinnovare oggi potrebbe significare mantenere la stessa rata ma ottenere un bonifico importante.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1573163281534-dd021d7c6a1b?auto=format&fit=crop&q=80&w=1200"
                                    alt="Consulenza Biofinance Rinnovo"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                                <div className="absolute bottom-10 left-10 right-10 text-white">
                                    <h3 className="text-2xl font-bold mb-2 text-white">Liquidità immediata</h3>
                                    <p className="text-lg italic">Ottieni nuova liquidità rinegoziando il tuo prestito esistente.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Regola del 40% */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Quando si può rinnovare? La Regola del 40%</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            La legge (DPR 180/1950) impone regole precise. Non puoi rinnovare quando vuoi, ma devi aver rimborsato una quota specifica del tuo piano:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-neutral-bg p-8 lg:p-12 rounded-[2rem] border border-gray-100 flex flex-col justify-center">
                            <Clock className="w-12 h-12 text-secondary mb-6" />
                            <h3 className="text-2xl font-bold text-primary mb-4">La Regola Generale</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Devi aver pagato almeno il 40% delle rate.
                            </p>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-secondary/10">
                                <p className="text-primary font-bold mb-2">Esempio:</p>
                                <p className="text-gray-600">Su una cessione di 120 mesi (10 anni), puoi rinnovare dopo aver pagato 48 mesi (4 anni).</p>
                            </div>
                        </div>

                        <div className="bg-primary p-8 lg:p-12 rounded-[2rem] text-white flex flex-col justify-center">
                            <ShieldCheck className="w-12 h-12 text-secondary mb-6" />
                            <h3 className="text-2xl font-bold mb-4 text-white">L'Eccezione (Rinnovo ante-termine)</h3>
                            <p className="text-white text-lg leading-relaxed mb-6">
                                Se la tua cessione dura 60 mesi (5 anni) o meno, puoi rinnovarla in qualsiasi momento, a patto che il nuovo contratto sia di 120 mesi (10 anni).
                            </p>
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                                <p className="text-white">È l'unico caso in cui non devi aspettare il 40%.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perché con Biofinance */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 font-bold">
                        <h2 className="text-3xl lg:text-4xl text-primary mb-4">Perché Rinnovare con Biofinance conviene?</h2>
                        <p className="text-gray-600">Non limitarti a "rifare il prestito". Ottimizzalo. Ecco cosa facciamo per te:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FileText className="w-6 h-6" />,
                                title: "Analisi del Conteggio Estintivo",
                                desc: "Richiediamo alla banca con cui hai la cessione in corso il documento per chiudere il prestito. Verifichiamo che non ci siano penali occulte."
                            },
                            {
                                icon: <HandCoins className="w-6 h-6" />,
                                title: "Recupero Interessi non Maturati",
                                desc: "Chiudendo il prestito in anticipo, hai diritto a non pagare gli interessi futuri. Questo abbatte il debito residuo."
                            },
                            {
                                icon: <RefreshCcw className="w-6 h-6" />,
                                title: "Consolidamento Rata",
                                desc: "Se nel frattempo hai aperto altri piccoli prestiti, possiamo provare a inglobarli nel rinnovo per lasciarti con una sola rata pulita."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Esempio Pratico */}
            <section className="section-padding bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">Quanto posso ottenere dal Rinnovo?</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Immagina di avere una cessione con rata di € 300 e un debito residuo di € 15.000. Rinnovando a 120 mesi con Biofinance:
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 bg-neutral-bg p-5 rounded-2xl border border-gray-100">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">1</div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Nuovo Montante</p>
                                        <p className="text-xl font-black text-primary">€ 36.000 (Ipotesi)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-neutral-bg p-5 rounded-2xl border border-gray-100">
                                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">2</div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Estinzione Vecchio Debito</p>
                                        <p className="text-xl font-black text-red-500">- € 15.000</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-secondary/10 p-5 rounded-2xl border border-secondary/20">
                                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">3</div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-secondary uppercase tracking-wider">Liquidità Netta a te</p>
                                        <p className="text-2xl font-black text-primary">€ 21.000 (circa)*</p>
                                    </div>
                                </div>
                                <p className="text-sm font-bold text-primary italic">Il tutto mantenendo la rata invariata di € 300.</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-primary rounded-[3rem] p-10 lg:p-14 text-white text-center shadow-2xl">
                                <HandCoins className="w-16 h-16 text-secondary mx-auto mb-6" />
                                <h3 className="text-3xl font-bold mb-6 text-white">Verifica subito la tua fattibilità</h3>
                                <button className="w-full bg-secondary hover:bg-teal-600 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm">
                                    VERIFICA SE PUOI RINNOVARE ORA
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alternativa Delegazione */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-10 lg:p-16">
                                <h2 className="text-3xl font-bold text-primary mb-6">E se non sono ancora passati i 4 anni (40%)?</h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    Hai bisogno di soldi subito ma non hai ancora raggiunto i termini di legge per il rinnovo? Non preoccuparti. Per i Dipendenti (Pubblici e Privati) esiste la soluzione della Delegazione di Pagamento (o "Doppio Quinto"). Invece di chiudere la vecchia cessione, ne affianchiamo una seconda.
                                </p>
                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary" />
                                        <span className="font-bold text-primary">Trattenuta totale: 40% dello stipendio</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary" />
                                        <span className="font-bold text-primary">Liquidità immediata senza attese</span>
                                    </div>
                                </div>
                                <Link
                                    to="/cessione-del-quinto"
                                    className="inline-flex items-center text-secondary font-black tracking-widest text-sm uppercase group"
                                >
                                    Scopri la Delegazione di Pagamento
                                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                            <div className="bg-secondary/5 p-10 lg:p-16 flex flex-col justify-center border-l border-gray-100">
                                <h3 className="text-2xl font-bold text-primary mb-6">Documenti Necessari per la Valutazione Per capire se il rinnovo è fattibile, ci serve vedere la tua situazione attuale:</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Ultima busta paga o cedolino pensione",
                                        "Copia del contratto della Cessione in corso",
                                        "Documenti d'identità validi"
                                    ].map((doc, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                            <span className="text-gray-700 font-medium">{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-8 text-sm text-gray-500 italic">
                                    Al Conteggio Estintivo ufficiale ci pensiamo noi: abbiamo canali diretti con le principali finanziarie italiane per ottenerlo rapidamente.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQ
                title="FAQ sul Rinnovo Cessione"
                items={[
                    {
                        question: "Conviene sempre rinnovare la Cessione del Quinto?",
                        answer: "Non sempre. Conviene se hai bisogno di nuova liquidità o se i tassi attuali sono nettamente inferiori al vecchio contratto. Biofinance effettua una simulazione gratuita per mostrarti il TAEG a confronto."
                    },
                    {
                        question: "Devo pagare penali per estinguere il vecchio prestito?",
                        answer: "La legge prevede una penale massima dell'1% del capitale residuo, ma solo se prevista dal contratto. Tuttavia, il risparmio sugli interessi non maturati supera quasi sempre il costo della penale."
                    },
                    {
                        question: "Posso rinnovare la Cessione se sono andato in pensione nel frattempo?",
                        answer: "Sì. Se avevi una Cessione sullo stipendio e ora sei in pensione, il prestito è traslato sulla pensione. Puoi rinnovarlo rispettando i limiti di età e la quota cedibile rilasciata dall'INPS."
                    }
                ]}
            />
        </div>
    );
};

export default RinnovoCessione;
