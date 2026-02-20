import React from 'react';
import {
    Users,
    PlusCircle,
    ShieldCheck,
    ArrowRight,
    UserCheck,
    GraduationCap,
    BookOpen,
    PiggyBank
} from 'lucide-react';
import FAQ from '../components/sections/FAQ';

const ScuolaMiur: React.FC = () => {
    const targetCategories = [
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "Docenti di Ruolo",
            desc: "Scuole dell'infanzia, primarie, secondarie e Università."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Personale ATA",
            desc: "Assistenti amministrativi e collaboratori scolastici."
        },
        {
            icon: <UserCheck className="w-8 h-8" />,
            title: "DSGA e Dirigenti",
            desc: "Dirigenti Scolastici e Direttori dei Servizi Generali e Amministrativi."
        }
    ];

    const advantages = [
        {
            icon: <PlusCircle className="w-8 h-8" />,
            title: "Compatibilità con \"Piccoli Prestiti\"",
            desc: "Se hai già un \"Piccolo Prestito NoiPA\" in corso, puoi spesso affiancare una Cessione del Quinto Biofinance per ottenere liquidità maggiore (consolidamento debiti)."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Valutazione anche per Neo-Immessi",
            desc: "Hai appena superato l'anno di prova? Sei immediatamente finanziabile."
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
                                Prestiti Mondo Scuola: Soluzioni per Docenti e Personale ATA.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                La scuola è il motore del futuro. Che tu sia un Insegnante di ruolo o un collaboratore scolastico (ATA), Biofinance conosce le specificità del tuo contratto. Sappiamo che la tua busta paga può variare, che esiste la "Ricostruzione di Carriera" e che le esigenze di liquidità non seguono il calendario scolastico.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200"
                                    alt="Scuola e MIUR Biofinance"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                                <div className="absolute bottom-10 left-10 right-10 text-white">
                                    <h3 className="text-2xl font-bold mb-2 text-white">Dedicato al Personale MIUR</h3>
                                    <p className="text-lg italic">Soluzioni su misura per chi costruisce il futuro.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categorie Personale MIUR */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Dedicato al Personale MIUR</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Questa soluzione è pensata specificamente per:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {targetCategories.map((cat, idx) => (
                            <div key={idx} className="bg-neutral-bg p-10 lg:p-12 rounded-[3rem] border border-gray-100 text-center group hover:shadow-xl transition-all">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mb-8 mx-auto shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {cat.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{cat.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vantaggi Esclusivi */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Vantaggi Esclusivi per la Scuola</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {advantages.map((adv, idx) => (
                            <div key={idx} className="bg-white p-10 lg:p-14 rounded-[3.5rem] border border-gray-50 flex items-start gap-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shrink-0">
                                    {adv.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-primary mb-4">{adv.title}</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">{adv.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* E se sono un Supplente? */}
            <section className="section-padding bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-[3.5rem] p-10 lg:p-16 text-white relative shadow-2xl">
                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary opacity-10 rounded-full -mb-32 -mr-32"></div>
                        <div className="relative z-10 max-w-3xl">
                            <div className="flex items-center gap-3 mb-6">
                                <BookOpen className="w-8 h-8 text-secondary" />
                                <span className="text-secondary font-black tracking-widest uppercase text-sm">Informazione Importante</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">E se sono un Supplente?</h2>
                            <p className="text-xl text-white/80 leading-relaxed">
                                Per i supplenti annuali (contratto al 30 giugno o 31 agosto), la Cessione del Quinto classica a 10 anni non è praticabile. Tuttavia, è possibile valutare prestiti di durata pari alla durata residua del contratto, oppure preparare la pratica affinché, al momento del passaggio di ruolo, tu sia il primo a ricevere la liquidità.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calcola la tua Rata Section */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white p-12 lg:p-20 rounded-[4rem] shadow-xl border border-gray-50 flex flex-col items-center">
                        <PiggyBank className="w-16 h-16 text-secondary mb-8" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Calcola la tua Rata "Scuola"</h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl">
                            Inserisci l'importo netto del tuo cedolino NoiPA (escluse voci variabili come FIS o attività aggiuntive).
                        </p>
                        <button className="bg-secondary hover:bg-teal-600 text-white font-black py-6 px-12 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm inline-flex items-center group">
                            PREVENTIVO RAPIDO DOCENTI & ATA
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQ
                title="FAQ per Personale Scuola"
                items={[
                    {
                        question: "La Cessione del Quinto blocca la Carta del Docente?",
                        answer: "Assolutamente no. La Carta del Docente è un bonus per la formazione e non ha alcun legame con la tua busta paga o con i prestiti personali. Sono due canali completamente separati."
                    },
                    {
                        question: "Cosa succede durante i mesi estivi se sono ATA?",
                        answer: "Se sei di ruolo, lo stipendio (e la trattenuta della rata) continua regolarmente anche in estate. Se hai un contratto che sospende lo stipendio, la Cessione del Quinto non può essere attivata per durate superiori al contratto stesso."
                    },
                    {
                        question: "Ho fatto la \"Ricostruzione di Carriera\", influisce sul prestito?",
                        answer: "Sì, positivamente! La ricostruzione di carriera spesso aumenta lo stipendio base e gli scatti di anzianità. Un importo netto più alto significa una quota cedibile più alta, permettendoti di ottenere più liquidità o di abbassare l'incidenza della rata."
                    }
                ]}
            />
        </div>
    );
};

export default ScuolaMiur;
