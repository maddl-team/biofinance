import React from 'react';
import {
    TrendingDown,
    ShieldCheck,
    Cpu,
    ArrowRight,
    Star,
    Calculator,
    CheckCircle2,
    Calendar
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PensionatiExInpdap: React.FC = () => {
    const differences = [
        {
            icon: <TrendingDown className="w-8 h-8 text-secondary" />,
            title: <span className="font-bold">Tassi di Interesse più bassi</span>,
            desc: "Rispetto alla media dei pensionati privati, grazie alla solidità del tuo ente previdenziale."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
            title: <span className="font-bold">Costi Assicurativi Ridotti:</span>,
            desc: "L'aspettativa di vita statistica e la stabilità del reddito permettono premi assicurativi più leggeri."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-12 pb-14 lg:pt-32 lg:pb-20 bg-neutral-bg overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6">
                                <Star className="w-4 h-4 fill-secondary" />
                                CATEGORIA PREMIUM
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Cessione del Quinto Ex-INPDAP: Il Valore del Servizio Pubblico.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Sei andato in pensione dopo una carriera nello Stato o negli Enti Locali? La tua pensione rientra nella <span className="font-bold">Gestione Pubblica (ex INPDAP)</span>, oggi accorpata all'INPS ma distinta per trattamenti e vantaggi. Biofinance applica condizioni di favore a questa categoria "Premium", riconoscendo la solidità del tuo ente previdenziale. Approfondisci la <Link href="/cessione-del-quinto" className="underline">Cessione del Quinto</Link> e la pagina hub <Link href="/prestiti-pensionati" className="underline">Prestiti Pensionati</Link>.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]">
                                <Image
                                    src="/img/prestiti-pensionati-ex-inpdap.jpg"
                                    alt="Pensionati Ex-INPDAP Biofinance"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differenza tra Pensionati INPS e Ex-INPDAP */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Differenza tra Pensionati INPS e Ex-INPDAP</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Anche se il cedolino arriva dall'INPS, il tuo status di "ex dipendente pubblico" ti garantisce accesso a prodotti finanziari con <span className="font-bold">coefficienti di rischio inferiori</span>. Questo si traduce in:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {differences.map((diff, idx) => (
                            <div key={idx} className="bg-neutral-bg p-10 lg:p-14 rounded-[3.5rem] border border-gray-100 flex items-start gap-8 group hover:bg-white hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shrink-0 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {diff.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-primary mb-4">{diff.title}</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">{diff.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Procedura Telematica "GDP" */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[4rem] shadow-xl p-10 lg:p-20 border border-gray-50 flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-3 mb-6">
                                <Cpu className="w-8 h-8 text-secondary" />
                                <span className="text-secondary font-black tracking-widest uppercase text-sm">Innovazione GDP</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 leading-tight">Procedura Telematica "GDP"</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Utilizziamo il canale telematico <span className="font-bold">INPS GDP (Gestione Dipendenti Pubblici)</span>. Non serve che tu vada a recuperare il modello OBIS M o la Quota Cedibile cartacea.
                            </p>
                            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 flex items-start gap-4 mb-8">
                                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                <p className="text-gray-700 italic">"Con la tua autorizzazione, scarichiamo i dati direttamente dai server INPS, elaboriamo il preventivo e notifichiamo il contratto digitalmente."</p>
                            </div>
                            <div className="flex items-center gap-4 text-primary font-bold">
                                <Calendar className="w-6 h-6 text-secondary" />
                                <span>Tempi medi di erogazione: 10-15 giorni.</span>
                            </div>
                        </div>
                        <div className="lg:w-1/2 rounded-[3.5rem] overflow-hidden shadow-2xl relative h-[500px]">
                            <Image
                                src="/img/procedura-telematica.jpg"
                                alt="Ufficio Digitale Biofinance"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-primary/20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-neutral-bg p-12 lg:p-20 rounded-[4rem] shadow-sm border border-gray-100 flex flex-col items-center group hover:shadow-xl transition-all duration-500">
                        <Calculator className="w-16 h-16 text-secondary mb-8" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">Ottieni le tue Condizioni Premium</h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            Sfrutta i vantaggi della Gestione Pubblica. Calcoliamo il tuo preventivo Ex-INPDAP in pochi minuti.
                        </p>
                        <Link
                            href="/calcolo-cessione-del-quinto"
                            className="bg-secondary hover:bg-teal-600 text-white font-black py-6 px-12 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm inline-flex items-center group"
                        >
                            CALCOLA PREVENTIVO EX-INPDAP
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PensionatiExInpdap;
