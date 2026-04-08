"use client";

import React, { useState } from 'react';
import {
    ShieldCheck,
    Clock,
    ArrowRight,
    Building2,
    Stethoscope,
    FileText,
    Zap,
    HelpCircle,
    Star,
    MessageCircle,
    Building,
    Activity,
    CheckCircle2,
    Loader2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FAQ from '../components/sections/FAQ';
import { sendToWebhook } from '../lib/webhook';

const EntiLocaliSanitaHub: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        telefono: '',
        email: '',
        dataNascita: '',
        comparto: '',
        privacy: false,
        website: '' // Honeypot
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as any;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    formType: 'Enti Locali e Sanità Hub',
                    formData: formData,
                    website: formData.website,
                    sourceUrl: window.location.href
                }),
            });

            const result = await response.json();

            if (result.ok) {
                // Parallel non-blocking webhook submission only on success
                sendToWebhook('Enti Locali e Sanità Hub', formData);
                setIsSuccess(true);
            } else {
                setError(result.error || 'Errore durante l\'invio');
            }
        } catch (err) {
            setError('Errore di connessione');
        } finally {
            setIsSubmitting(false);
        }
    };

    const targetCategories = [
        {
            icon: <Building className="w-10 h-10" />,
            title: <span className="font-bold">Amministrazioni Locali</span>,
            desc: "Dipendenti di Comuni, Province e Regioni."
        },
        {
            icon: <Activity className="w-10 h-10" />,
            title: <span className="font-bold">Sanità Territoriale</span>,
            desc: "Infermieri, medici, OSS e personale amministrativo di ASL e Aziende Ospedaliere."
        }
    ];

    const benefits = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: <span className="font-bold">Accelerare il rilascio:</span>,
            desc: "Ottimizziamo i tempi per l'ottenimento del Certificato di Stipendio direttamente dal tuo Ente."
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: <span className="font-bold">Benestare in tempi record:</span>,
            desc: "Grazie ai canali diretti, la notifica e l'accettazione del contratto avvengono senza ritardi."
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: <span className="font-bold">Liquidità più veloce:</span>,
            desc: "Processi snelliti significano soldi sul tuo conto in tempi più brevi rispetto agli standard."
        }
    ];

    const faqs = [
        {
            q: "Sono un infermiere ASL, la mia busta paga ha molte voci variabili (turni, notturni). Vengono calcolate per il prestito?",
            a: "Sì. A differenza di molti istituti tradizionali, i nostri periti valutano attentamente la struttura della busta paga sanitaria, includendo le indennità fisse e continuative per garantirti l'importo massimo erogabile nel rispetto del quinto cedibile."
        },
        {
            q: "Come gestite i contatti con la ragioneria del mio Comune? Devo fare io da intermediario?",
            a: "No, il nostro punto di forza è proprio la gestione diretta. Dialoghiamo noi con l'Ufficio Personale del tuo Comune o della tua Provincia, sollevandoti da ogni stress burocratico."
        },
        {
            q: "Il mio contratto con l'ente locale è a tempo determinato, posso accedere alla Cessione del Quinto?",
            a: "Generalmente la Cessione richiede il tempo indeterminato. Tuttavia, se il tuo contratto a termine ha una durata sufficientemente lunga (es. oltre i 36 mesi), possiamo valutare l'operazione strutturando il piano di rientro entro la scadenza del contratto."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-12 pb-14 lg:pt-32 lg:pb-20 bg-neutral-bg overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Prestiti per Enti Locali e Sanità: Credito Su Misura per il Territorio.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Lavorare per un'amministrazione locale o nel comparto sanitario territoriale significa essere il motore della propria comunità (incluse le <Link href="/prestiti-municipalizzate" className="underline">aziende municipalizzate</Link>). In Biofinance, abbiamo creato una divisione dedicata esclusivamente ai dipendenti di Enti Locali e Sanità. Sappiamo come dialogare con i vostri enti per garantirvi un accesso al credito fluido, veloce e senza intoppi burocratici.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-2xl border border-gray-100">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-primary mb-2">Richiedi un preventivo per il tuo Ente</h3>
                                    <p className="text-gray-500 text-sm italic">Preventivo rapido e gratuito</p>
                                </div>
                                {!isSuccess ? (
                                    <form className="space-y-4" onSubmit={handleSubmit}>
                                        <input
                                            name="nome"
                                            required
                                            value={formData.nome}
                                            onChange={handleInputChange}
                                            type="text"
                                            placeholder="Nome"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                        <input
                                            name="telefono"
                                            required
                                            value={formData.telefono}
                                            onChange={handleInputChange}
                                            type="tel"
                                            placeholder="Telefono"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                        <input
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            type="email"
                                            placeholder="Email"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                        <input
                                            name="dataNascita"
                                            required
                                            value={formData.dataNascita}
                                            onChange={handleInputChange}
                                            type="date"
                                            placeholder="Data di nascita"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                        <select
                                            name="comparto"
                                            required
                                            value={formData.comparto}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white text-gray-700"
                                        >
                                            <option value="" disabled>Seleziona il tuo comparto</option>
                                            <option value="sanita">Sanità/Ospedali</option>
                                            <option value="comune">Comune/Provincia</option>
                                            <option value="regione">Regione</option>
                                        </select>
                                        <div className="flex items-start gap-3">
                                            <input
                                                name="privacy"
                                                type="checkbox"
                                                id="privacy-enti-locali"
                                                required
                                                checked={formData.privacy}
                                                onChange={handleInputChange}
                                                className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                                            />
                                            <label htmlFor="privacy-enti-locali" className="text-xs text-gray-500 leading-snug cursor-pointer">
                                                Ho letto l'informativa sulla <a href="https://www.iubenda.com/privacy-policy/77015066/full-legal" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">Privacy Policy</a> e acconsento al trattamento dei miei dati personali.
                                            </label>
                                        </div>

                                        {error && (
                                            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 italic">
                                                {error}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-secondary hover:bg-emerald-600 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-secondary/20 uppercase tracking-widest text-xs flex items-center justify-center gap-2 disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    PREVENTIVO IN CORSO...
                                                </>
                                            ) : 'SCOPRI LA RATA PER IL TUO ENTE'}
                                        </button>

                                        {/* Honeypot */}
                                        <input
                                            type="text"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleInputChange}
                                            className="hidden"
                                            aria-hidden="true"
                                        />
                                    </form>
                                ) : (
                                    <div className="text-center py-10 space-y-6">
                                        <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-primary mb-2">Richiesta Ricevuta!</h3>
                                            <p className="text-gray-600 italic px-4">Riceverai il tuo preventivo personalizzato a breve sulla tua email.</p>
                                        </div>
                                        <button
                                            onClick={() => setIsSuccess(false)}
                                            className="text-secondary font-bold hover:underline uppercase tracking-widest text-xs"
                                        >
                                            Invia un'altra richiesta
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* A chi ci rivolgiamo? */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">A chi ci rivolgiamo?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Questa sezione è dedicata a chi opera sul territorio, con un focus specifico su:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {targetCategories.map((cat, idx) => (
                            <div key={idx} className="bg-neutral-bg p-10 rounded-[3rem] border border-gray-100 text-center hover:shadow-xl transition-all group">
                                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-secondary mb-8 mx-auto shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {cat.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{cat.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gestione Diretta */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl h-[500px]">
                                <Image
                                    src="/img/prestiti-enti-locali.jpg"
                                    alt="Gestione Diretta Biofinance"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">Gestione Diretta per Tempi Più Rapidi</h2>
                            <p className="text-lg text-gray-600 mb-8 italic">
                                Il nostro vantaggio competitivo risiede nella gestione diretta con le ragionerie locali. Comunichiamo noi in prima persona con l'ufficio del personale del tuo Ente o della tua ASL. Questo ci permette di:
                            </p>
                            <div className="space-y-6">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-6 bg-white p-6 rounded-2xl border border-gray-50 shadow-sm">
                                        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                                            {benefit.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary">{benefit.title}</h4>
                                            <p className="text-gray-500 text-sm">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQ
                title="FAQ"
                subtitle={null}
                items={faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
            />

            {/* Testimonial */}
            <section className="section-padding bg-primary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-white/10 backdrop-blur-md p-10 lg:p-16 rounded-[4rem] border border-white/10 text-center">
                        <div className="flex justify-center mb-8">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 text-secondary fill-secondary mx-0.5" />)}
                        </div>
                        <p className="text-2xl lg:text-3xl text-white font-medium italic mb-10 leading-relaxed px-4 text-center">
                            "Hanno parlato loro con la mia ASL, zero stress."
                        </p>
                        <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-4xl mx-auto text-center px-4">
                            "Lavorando in pronto soccorso non ho letteralmente il tempo di fare file in amministrazione. Il consulente di Biofinance ha richiesto direttamente alla mia ragioneria ASL il certificato di stipendio. In due settimane avevo la liquidità. Discreti, veloci e professionali."
                        </p>
                        <div className="mt-8">
                            <p className="text-secondary font-black tracking-widest uppercase text-sm">Elena R.</p>
                            <p className="text-gray-400 text-xs mt-1 italic">Infermiera ASL</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Nav Buttons */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Link
                            href="/prestiti-enti-locali"
                            className="bg-neutral-bg hover:bg-white border border-gray-100 hover:border-secondary p-8 rounded-[2.5rem] flex flex-col items-center text-center transition-all group hover:shadow-xl"
                        >
                            <Building2 className="w-12 h-12 text-gray-400 group-hover:text-secondary mb-6 transition-colors" />
                            <span className="text-primary font-black tracking-widest uppercase text-xs">VAI A PRESTITI COMUNALI E REGIONALI</span>
                            <ArrowRight className="w-5 h-5 text-secondary mt-4 transition-transform group-hover:translate-x-2" />
                        </Link>
                        <Link
                            href="/prestiti-sanita"
                            className="bg-neutral-bg hover:bg-white border border-gray-100 hover:border-secondary p-8 rounded-[2.5rem] flex flex-col items-center text-center transition-all group hover:shadow-xl"
                        >
                            <Stethoscope className="w-12 h-12 text-gray-400 group-hover:text-secondary mb-6 transition-colors" />
                            <span className="text-primary font-black tracking-widest uppercase text-xs">VAI A PRESTITI INFERMIERI E SANITÀ</span>
                            <ArrowRight className="w-5 h-5 text-secondary mt-4 transition-transform group-hover:translate-x-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EntiLocaliSanitaHub;
