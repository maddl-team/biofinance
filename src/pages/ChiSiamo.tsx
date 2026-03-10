import React from 'react';
import {
    HeartHandshake,
    Phone,
    MessageCircle,
    UserCheck,
    Star,
    Award,
    BadgeCheck,
    Users2,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ChiSiamo: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 bg-neutral-bg overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6">
                                <BadgeCheck className="w-4 h-4" />
                                AGENZIA OAM ISCRITTA
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Biofinance: Persone, prima che Numeri.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                In un mondo di algoritmi e call center anonimi, Biofinance ci mette la faccia. Siamo un'Agenzia in Attività Finanziaria regolarmente iscritta all'<span className="font-bold">OAM (Organismo Agenti e Mediatori) al n. XXXXX</span>. Operiamo nel rispetto rigoroso delle normative Banca d'Italia e IVASS, con un approccio etico al credito.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/img/chi-siamo.jpg"
                                    alt="Il Team Biofinance"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* La Nostra Missione */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-8 bg-neutral-bg rounded-[2.5rem] border border-gray-100 shadow-sm transform hover:-translate-y-2 transition-transform">
                                    <Award className="w-10 h-10 text-secondary mb-4" />
                                    <h4 className="text-xl font-bold text-primary mb-2">20+ Anni</h4>
                                    <p className="text-gray-600">Di esperienza nel settore.</p>
                                </div>
                                <div className="p-8 bg-primary rounded-[2.5rem] text-white shadow-xl transform translate-y-8 hover:translate-y-6 transition-transform">
                                    <UserCheck className="w-10 h-10 text-secondary mb-4" />
                                    <h4 className="text-xl font-bold mb-2 text-white">Etica</h4>
                                    <p className="text-white/80">Credito responsabile.</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 lowercase first-letter:uppercase">La Nostra Missione</h2>
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Non vendiamo "prodotti", offriamo <span className="font-bold">sostenibilità</span>. Un prestito è utile solo se migliora la vita di chi lo richiede, non se la complica.
                            </p>
                            <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-secondary pl-6">
                                Per questo, i nostri consulenti sono formati per dirti anche "No" se un'operazione rischia di sovraindebitarti.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Il Team Consulenti */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Il Team Consulenti</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium italic">
                            Ogni pratica ha un <span className="font-bold">Consulente Dedicato</span> dall'inizio alla fine. Avrai il suo numero diretto e WhatsApp. Niente attese ai centralini.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Marco R. */}
                        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 group hover:shadow-xl transition-all text-center">
                            <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                                <Users2 className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-2">Marco R.</h3>
                            <p className="text-secondary font-bold mb-4 uppercase text-sm tracking-widest">Specialist Pensionati</p>
                            <p className="text-gray-600 mb-8 italic">(15 anni di esperienza)</p>
                            <div className="flex justify-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-neutral-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-neutral-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Laura B. */}
                        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 group hover:shadow-xl transition-all text-center">
                            <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                                <Users2 className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-2">Laura B.</h3>
                            <p className="text-secondary font-bold mb-4 uppercase text-sm tracking-widest">Responsabile Convenzioni Statali</p>
                            <p className="text-gray-600 mb-8 italic">Consulente Senior</p>
                            <div className="flex justify-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-neutral-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-neutral-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Giovanni L. */}
                        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 group hover:shadow-xl transition-all text-center">
                            <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                                <Users2 className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-2">Giovanni L.</h3>
                            <p className="text-secondary font-bold mb-4 uppercase text-sm tracking-widest">Esperto Contenziosi e Pignoramenti</p>
                            <p className="text-gray-600 mb-8 italic">Specialista Soluzioni Complesse</p>
                            <div className="flex justify-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-neutral-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-neutral-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* I Nostri Partner */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-[4rem] p-10 lg:p-20 text-white relative overflow-hidden isolate">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -mt-48 -mr-48 blur-3xl"></div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">I Nostri Partner</h2>
                                <p className="text-xl text-white/80 leading-relaxed mb-10">
                                    Lavoriamo con i primari istituti bancari italiani specializzati nella Cessione del Quinto. Questo ci permette di comparare diverse offerte e proporti sempre quella con il TAEG più basso per il tuo profilo specifico (Brokerage model).
                                </p>
                                <div className="grid grid-cols-2 gap-8 lg:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                    <div className="h-12 bg-white/20 rounded-xl"></div>
                                    <div className="h-12 bg-white/20 rounded-xl"></div>
                                    <div className="h-12 bg-white/20 rounded-xl"></div>
                                    <div className="h-12 bg-white/20 rounded-xl"></div>
                                </div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[3rem] border border-white/10">
                                <Star className="w-12 h-12 text-secondary mb-6" />
                                <h4 className="text-2xl font-bold mb-4 text-white">Il Miglior TAEG Garantito</h4>
                                <p className="text-white/70 text-lg leading-relaxed">
                                    Analizziamo per te il mercato per fornirti la soluzione più vantaggiosa ed economica, senza costi occulti.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding bg-white border-t border-gray-100">
                <div className="max-w-3xl mx-auto text-center px-4">
                    <HeartHandshake className="w-16 h-16 text-secondary mx-auto mb-8" />
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Mettici alla prova.</h2>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Scegli la trasparenza e l'etica di una consulenza reale. Nessun algoritmo può sostituire il valore di una persona al tuo fianco.
                    </p>
                    <Link
                        to="/contatti"
                        className="bg-secondary hover:bg-emerald-600 text-white font-black py-6 px-12 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm inline-flex items-center group/btn"
                    >
                        PARLA CON UN CONSULENTE
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ChiSiamo;
