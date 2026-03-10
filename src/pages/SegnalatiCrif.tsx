import React from 'react';
import {
    ArrowRight,
    ShieldCheck,
    Scale,
    Activity,
    ClipboardCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SegnalatiCrif: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 bg-secondary-light overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6">
                                <ShieldCheck className="w-4 h-4" />
                                DIRITTO AL CREDITO
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Segnalato in CRIF? Per noi non sei un "Cattivo Pagatore".
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Nella vita può capitare di saltare una rata o avere un disguido finanziario. Per le banche tradizionali diventi "invisibile" o "non bancabile". Per <span className="font-bold">Biofinance</span>, sei un lavoratore o un pensionato con dei diritti. La Cessione del Quinto è <span className="font-bold">l'unica forma di prestito garantita per legge</span> accessibile anche a chi ha segnalazioni negative in banche dati (CRIF, CTC, Experian) o protesti.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/img/prestiti-segnalati-crif.jpg"
                                    alt="Segnalati CRIF Biofinance"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perché possiamo finanziarti? */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 leading-tight">Perché possiamo finanziarti?</h2>
                        <div className="p-10 bg-neutral-bg rounded-[3rem] border border-gray-100 relative">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg">
                                <ClipboardCheck className="w-6 h-6" />
                            </div>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Il motivo è tecnico: la garanzia del prestito non è la tua affidabilità passata, ma la tua <span className="font-bold">busta paga presente</span>. L'assicurazione copre il rischio di perdita del lavoro o premorienza, non il rischio che tu non paghi le rate (perché le paga il tuo datore di lavoro!). Quindi, anche se hai avuto problemi con un mutuo o un prestito precedente, la tua richiesta viene valutata positivamente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gestione Pignoramenti */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Gestione Pignoramenti</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Hai già un pignoramento sullo stipendio? Non è un problema bloccante. Possiamo intervenire in due modi:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Coesistenza */}
                        <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-50 group hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-colors">
                                <Activity className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-6"><span className="font-bold">Coesistenza:</span></h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Se il pignoramento è piccolo, la Cessione del Quinto può affiancarsi (rispettando il limite del 50% dello stipendio impegnato).
                            </p>
                        </div>

                        {/* Estinzione */}
                        <div className="bg-primary p-12 rounded-[3.5rem] shadow-xl text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full -mt-10 -mr-10 blur-2xl"></div>
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-secondary mb-8 border border-white/20 group-hover:bg-white group-hover:text-primary transition-colors">
                                <Scale className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-white"><span className="font-bold">Estinzione (Saldo e Stralcio):</span></h3>
                            <p className="text-lg text-white/80 leading-relaxed">
                                Usiamo la Cessione del Quinto per saldare il debito che ha causato il pignoramento, cancellando la trattenuta giudiziaria e sostituendola con la rata volontaria (spesso più bassa).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-secondary p-12 lg:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10 text-white">
                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/30">
                                <Activity className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">RIPARTI CON BIOFINANCE</h2>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                                Richiedi un preventivo anonimo e discreto oggi stesso. Valutiamo ogni situazione con cura e competenza.
                            </p>
                            <Link
                                to="/contatti"
                                className="bg-primary hover:bg-primary-light text-white font-black py-6 px-12 rounded-2xl transition-all shadow-xl shadow-primary/20 uppercase tracking-widest text-sm inline-flex items-center group/btn border-2 border-primary-light"
                            >
                                PREVENTIVO ANONIMO
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SegnalatiCrif;
