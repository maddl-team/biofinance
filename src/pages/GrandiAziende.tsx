import React from 'react';
import {
    Building2,
    Zap,
    Users,
    ShieldCheck,
    ArrowRight,
    Search,
    Factory,
    ShoppingCart,
    Truck,
    Lightbulb
} from 'lucide-react';
import FAQ from '../components/sections/FAQ';

const GrandiAziende: React.FC = () => {
    const brandCategories = [
        {
            icon: <ShoppingCart className="w-6 h-6" />,
            title: "Settore Alimentare",
            brands: "Ferrero, Barilla, Lavazza, Parmalat."
        },
        {
            icon: <Factory className="w-6 h-6" />,
            title: "Industria e Manifattura",
            brands: "Luxottica, Leonardo, Pirelli, Brembo."
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Energia e Servizi",
            brands: "Enel, Eni, A2A, Hera, Acea."
        },
        {
            icon: <Truck className="w-6 h-6" />,
            title: "Trasporti e Logistica",
            brands: "Trenitalia, Italo, Poste Italiane, MSC."
        },
        {
            icon: <Building2 className="w-6 h-6" />,
            title: "GDO e Retail",
            brands: "Esselunga, Coop, Conad, Carrefour, Ikea."
        }
    ];

    const reasons = [
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Solidità del TFR",
            desc: "Le grandi aziende accantonano il TFR regolarmente o lo versano in fondi sicuri. Questo è una garanzia d'oro per le assicurazioni."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Basso Turnover",
            desc: "La stabilità lavorativa in queste aziende riduce il \"Rischio Impiego\"."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Procedure Digitalizzate",
            desc: "Le amministrazioni HR di grandi gruppi gestiscono le notifiche di Cessione via PEC in tempi record. Meno burocrazia = Meno costi per noi = Tasso più basso per te."
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
                                Convenzioni Grandi Aziende: Il Welfare che si trasforma in Credito.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Lavorare in una grande realtà italiana non significa solo prestigio, ma anche vantaggi finanziari esclusivi. In Biofinance, classifichiamo le aziende in base a un rating di affidabilità (Coefficiente Assicurativo). Se sei dipendente di una "Top Company", il rischio per noi è bassissimo. Questo si traduce per te in Tassi TAN e TAEG ai minimi storici, spesso inferiori di 1 o 2 punti percentuali rispetto alla media di mercato.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                                    alt="Grandi Aziende"
                                    className="w-full h-[450px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                                <div className="absolute bottom-10 left-10 right-10 text-white">
                                    <p className="text-2xl font-bold italic">Condizioni Prime per Top Companies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brands Section */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Sei dipendente di uno di questi Brand?</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Abbiamo gestito con successo pratiche per dipendenti di realtà come:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {brandCategories.map((cat, idx) => (
                            <div key={idx} className="bg-neutral-bg p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {cat.icon}
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-2">{cat.title}</h4>
                                <p className="text-gray-600 leading-relaxed font-medium">{cat.brands}</p>
                            </div>
                        ))}
                        <div className="bg-primary p-8 rounded-3xl text-white flex flex-col justify-center">
                            <Search className="w-10 h-10 text-secondary mb-6" />
                            <h4 className="text-xl font-bold mb-4 text-white">Il tuo brand non è in lista?</h4>
                            <p className="text-white/80 leading-relaxed font-medium">
                                Se la tua azienda ha più di 50 dipendenti e un capitale sociale solido, rientri comunque nella fascia "Prime".
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perché il Tasso è più basso? */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Perché il Tasso è più basso?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">La logica è tecnica ma semplice:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {reasons.map((reason, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-secondary mx-auto mb-8 shadow-xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                    {reason.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{reason.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">{reason.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Richiedi la Quotazione Prime */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto bg-primary rounded-[3.5rem] p-12 lg:p-20 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-10 rounded-full -mr-32 -mt-32"></div>
                        <div className="relative z-10">
                            <Building2 className="w-16 h-16 text-secondary mx-auto mb-8" />
                            <h2 className="text-3xl lg:text-[2.75rem] font-bold mb-6 text-white leading-tight">Richiedi la Quotazione "Prime"</h2>
                            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                                Sei un dipendente di una grande azienda? Non accontentarti di un preventivo standard. Specifica il nome della tua azienda nel modulo per sbloccare le condizioni riservate.
                            </p>
                            <button className="bg-secondary hover:bg-teal-600 text-white font-black py-6 px-10 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm inline-flex items-center group">
                                CALCOLA PREVENTIVO GRANDI AZIENDE
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQ
                title="FAQ per Dipendenti Grandi Aziende"
                items={[
                    {
                        question: "La mia azienda (SRL) ha solo 8 dipendenti, posso chiedere la Cessione?",
                        answer: "NON SI PUO' FARE Sì, ma la valutazione è più rigorosa. Per aziende sotto i 16 dipendenti, le compagnie assicurative richiedono bilanci in positivo e un TFR accantonato sufficiente. Biofinance lavora con partner specializzati anche per le piccole realtà (SAS/SRL minori), a patto che l'azienda sia sana."
                    },
                    {
                        question: "L'azienda deve dare il consenso al prestito?",
                        answer: "Il datore di lavoro non può rifiutare la Cessione del Quinto per legge (è un diritto del dipendente), ma deve firmare l'Atto di Benestare e impegnarsi a trattenere la rata. Nelle Grandi Aziende questa è una procedura standard gestita automaticamente dall'ufficio HR."
                    },
                    {
                        question: "Se ho un pignoramento in corso, posso fare la Cessione se lavoro nel privato?",
                        answer: "Assolutamente sì. La Cessione del Quinto può coesistere con un pignoramento purché la somma delle trattenute non superi il 50% dello stipendio netto. È una soluzione spesso usata proprio per ottenere liquidità e chiudere posizioni debitorie pregresse."
                    }
                ]}
            />
        </div>
    );
};

export default GrandiAziende;
