import React from 'react';
import {
    Activity,
    Users,
    HeartPulse,
    UserCheck,
    Stethoscope,
    Zap,
    ArrowRight,
    Smartphone,
    MessageCircle,
    PiggyBank,
    FileText
} from 'lucide-react';
import FAQ from '../components/sections/FAQ';
import { Link } from 'react-router-dom';

const Sanita: React.FC = () => {
    const categories = [
        {
            icon: <Activity className="w-8 h-8" />,
            title: <span className="font-bold">Infermieri</span>,
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: <span className="font-bold">OSS</span>,
            desc: "Operatori Socio Sanitari e Operatori Socio Assistenziali."
        },
        {
            icon: <Stethoscope className="w-8 h-8" />,
            title: <span className="font-bold">Medici</span>,
        },
        {
            icon: <UserCheck className="w-8 h-8" />,
            title: "Personale Tecnico e Amministrativo ASL"
        }
    ];

    const benefits = [
        {
            icon: <MessageCircle className="w-8 h-8" />,
            title: <span className="font-bold">Tutto via WhatsApp/Mail:</span>,
            desc: "Sappiamo che hai poco tempo libero. Gestiamo tutto digitalmente, non devi recarti in filiale."
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: <span className="font-bold">Firma Digitale:</span>,
            desc: "Firmi il contratto comodamente dal tuo smartphone durante una pausa o da casa."
        },
        {
            icon: <PiggyBank className="w-8 h-8" />,
            title: <span className="font-bold">Acconto Immediato:</span>,
            desc: "Disponibile su richiesta per urgenze, per garantirti liquidità nel minor tempo possibile."
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
                                Prestiti Personale Sanitario: Diamo Credito al tuo Impegno.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Sappiamo che il lavoro in ospedale o in ASL non conosce orari. Turni di notte, reperibilità, festivi: la tua busta paga è complessa e ricca di voci variabili. Mentre molte banche guardano solo lo stipendio base, <span className="font-bold">Biofinance</span> analizza la tua retribuzione globale. Il nostro obiettivo? Massimizzare la tua "<span className="font-bold">Quota Cedibile</span>" includendo tutte le indennità fisse previste dal CCNL Sanità.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1200"
                                    alt="Sanità Biofinance"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                                <div className="absolute bottom-10 left-10 right-10 text-white text-right">
                                    <h3 className="text-2xl font-bold mb-2">Dedicato agli Eroi della Sanità</h3>
                                    <p className="text-lg italic text-white/90">Valutiamo la tua professionalità, non solo il base.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* A chi ci rivolgiamo? */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Questa soluzione è ottimizzata per:</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="bg-neutral-bg p-8 rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {cat.icon}
                                </div>
                                <h3 className="text-lg font-bold text-primary leading-tight mb-2">{cat.title}</h3>
                                {cat.desc && <p className="text-sm text-gray-500 leading-tight">{cat.desc}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Come calcoliamo il tuo Quinto? */}
            <section className="section-padding bg-neutral-bg overflow-hidden isolate relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[4rem] shadow-xl p-10 lg:p-20 flex flex-col lg:flex-row items-center gap-16 border border-gray-50">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 leading-tight">Come calcoliamo il tuo Quinto?</h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                La particolarità del comparto Sanità è la presenza di <span className="font-bold">Indennità Specifiche</span> (rischio radiologico, terapia intensiva, ecc.). Biofinance lavora per includere nel calcolo della rata sostenibile tutte le voci che hanno carattere di fissità e continuità, permettendoti di ottenere un importo più alto rispetto a un calcolo standard.
                            </p>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-secondary/10 p-8 rounded-3xl border border-secondary/20 flex flex-col items-center text-center">
                                <Zap className="w-10 h-10 text-secondary mb-4" />
                                <h4 className="font-bold text-primary">Analisi Globale</h4>
                                <p className="text-sm text-gray-600 mt-2">Includiamo indennità di turno e rischio.</p>
                            </div>
                            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 flex flex-col items-center text-center">
                                <FileText className="w-10 h-10 text-primary mb-4" />
                                <h4 className="font-bold text-primary">Massimo Importo</h4>
                                <p className="text-sm text-gray-600 mt-2">Puntiamo alla quota cedibile più alta.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Velocità e Zero Pensieri */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Velocità e Zero Pensieri</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-neutral-bg rounded-[2rem] flex items-center justify-center text-secondary mb-8 shadow-inner ring-1 ring-gray-100">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{benefit.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <div className="bg-primary rounded-[4rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <HeartPulse className="w-16 h-16 text-secondary mb-8 mx-auto" />
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Il tuo lavoro è proteggere la vita.</h2>
                            <p className="text-xl text-white/80 mb-10">
                                Noi proteggiamo i tuoi progetti con le migliori soluzioni di credito.
                            </p>
                            <Link
                                to="/contatti"
                                className="bg-secondary hover:bg-teal-600 text-white font-black py-6 px-12 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm inline-flex items-center group/btn"
                            >
                                PREVENTIVO DEDICATO SANITÀ
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQ
                title="Domande Frequenti per Professionisti Sanitari"
                items={[
                    {
                        question: <><span className="font-bold">Domanda 1:</span> Sono un Carabiniere, se vado in pensione la cessione continua?</>,
                        answer: "Sì, la Cessione del Quinto è un prestito che \"trasla\". Se vai in pensione durante il piano di ammortamento, la rata viene trattenuta automaticamente dall'INPS sulla tua pensione, senza costi aggiuntivi o necessità di estinguere il debito anticipatamente."
                    },
                    {
                        question: <><span className="font-bold">Domanda 2:</span> Le indennità di turno notturno rientrano nel calcolo?</>,
                        answer: <>Dipende dalla loro continuità. Se sono occasionali no, ma se sono strutturali e previste dal contratto come voce fissa ricorrente, Biofinance farà il possibile per farle rientrare nel montante stipendiale utile, aumentando così la liquidità che puoi ottenere. Le <span className="font-bold">indennità di turno notturno</span> possono fare la differenza.</>
                    },
                    {
                        question: <><span className="font-bold">Domanda 3:</span> Ho un contratto a tempo determinato in ASL (Emergenza), posso chiedere il prestito?</>,
                        answer: <>Per la Cessione del Quinto serve solitamente il tempo indeterminato. Tuttavia, se il tuo contratto ha una durata residua certa (es. 36 mesi), possiamo valutare un finanziamento che si estingua entro la scadenza del <span className="font-bold">contratto a tempo determinato</span> lavorativo.</>
                    }
                ]}
            />
        </div>
    );
};

export default Sanita;
