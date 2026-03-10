import React from 'react';
import {
    Heart,
    ShieldCheck,
    Zap,
    ArrowRight,
    Calculator,
    TrendingDown,
    Calendar,
    CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Pensionati: React.FC = () => {
    const convenzioneFeatures = [
        {
            icon: <TrendingDown className="w-8 h-8" />,
            title: <span className="font-bold">Tassi Bassi:</span>,
            desc: "L'INPS impone dei tetti massimi ai tassi di interesse (TAEG) che gli istituti finanziari possono applicare. Con Biofinance, sei sempre al di sotto di queste soglie."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: <span className="font-bold">Quota Cedibile Telematica:</span>,
            desc: "Non devi andare allo sportello INPS a fare la fila. Scarichiamo noi la tua \"Quota Cedibile\" in tempo reale per dirti subito quanto puoi ottenere."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 bg-secondary-light overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Cessione del Quinto Pensionati: Goditi la Pensione con Liquidità Extra.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                La pensione è un traguardo, ma spesso è anche il momento per realizzare progetti rimandati o aiutare figli e nipoti. <span className="font-bold">Biofinance</span> è un istituto accreditato per operare in <span className="font-bold">Convenzione INPS</span>. Cosa significa? Tassi calmierati, procedure telematiche dirette con l'ente e tutela totale del pensionato.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/img/prestiti-pensionati.jpg"
                                    alt="Pensionati Biofinance"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* La Convenzione INPS */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">La Convenzione INPS: La tua Tutela</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Grazie alla convenzione ufficiale tra Biofinance e l'istituto di previdenza:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {convenzioneFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-neutral-bg p-10 lg:p-14 rounded-[3.5rem] border border-gray-100 flex items-start gap-8 shadow-sm group hover:shadow-md transition-all">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shrink-0 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sicurezza per te e per i tuoi eredi */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[4rem] shadow-xl p-10 lg:p-20 flex flex-col lg:flex-row items-center gap-16 border border-gray-50">
                        <div className="lg:w-1/2">
                            <ShieldCheck className="w-16 h-16 text-secondary mb-8" />
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 leading-tight">Sicurezza per te e per i tuoi eredi</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Molti pensionati temono di lasciare debiti. Con la Cessione del Quinto Biofinance questo è impossibile. Ogni prestito include obbligatoriamente una <span className="font-bold">Polizza Rischio Vita</span>.
                            </p>
                            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 flex items-start gap-4">
                                <Heart className="w-8 h-8 text-secondary shrink-0" />
                                <p className="text-gray-700 italic">"In caso di premorienza, il debito residuo viene saldato dall'assicurazione. Nessun onere ricadrà sui tuoi eredi."</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1491433594433-8598aaec52a2?auto=format&fit=crop&q=80&w=1200"
                                alt="Sicurezza per la famiglia"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fino a che età posso richiedere il prestito? */}
            <section className="section-padding bg-white isolate relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-[3.5rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-10 rounded-full -mt-24 -mr-24 blur-3xl"></div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Calendar className="w-8 h-8 text-secondary" />
                                    <span className="text-secondary font-black tracking-widest uppercase text-sm">Limiti di Età</span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">Fino a che età posso richiedere il prestito?</h2>
                                <p className="text-xl text-white/80 leading-relaxed">
                                    Finanziamo piani che terminano entro il compimento degli <span className="font-bold">85 anni di età</span> (e in alcuni casi valutiamo fino ai 90 anni).
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
                                <div className="flex items-center gap-4 mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-secondary" />
                                    <h4 className="text-2xl font-bold text-white">Esempio Pratico</h4>
                                </div>
                                <p className="text-lg text-white/90 italic">
                                    "Se hai 75 anni, puoi richiedere un prestito decennale (scadenza a 85 anni)."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white p-12 lg:p-20 rounded-[4rem] shadow-xl border border-gray-50 flex flex-col items-center">
                        <Calculator className="w-16 h-16 text-secondary mb-8" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">Calcola la tua Quota Cedibile</h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl">
                            Scopri subito l'importo massimo che puoi ottenere grazie alla nostra convenzione INPS telematica.
                        </p>
                        <Link
                            to="/contatti"
                            className="bg-secondary hover:bg-teal-600 text-white font-black py-6 px-12 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm inline-flex items-center group"
                        >
                            VERIFICA LA TUA QUOTA CEDIBILE INPS
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pensionati;
