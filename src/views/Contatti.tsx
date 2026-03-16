"use client";

import React, { useState } from 'react';
import {
    MessageCircle,
    Phone,
    Mail,
    ShieldCheck,
    MapPin,
    ArrowRight,
    Briefcase,
    HelpCircle,
    Star,
    Shield,
    CheckCircle2,
    Send,
    Loader2
} from 'lucide-react';
import FAQ from '../components/sections/FAQ';

const Contatti: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        telefono: '',
        email: '',
        messaggio: '',
        privacy: false,
        website: '' // Honeypot
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                    formType: 'Pagina Contatti',
                    formData: formData,
                    website: formData.website,
                    sourceUrl: window.location.href
                }),
            });

            const result = await response.json();

            if (result.ok) {
                setIsSuccess(true);
                setFormData({
                    nome: '',
                    cognome: '',
                    telefono: '',
                    email: '',
                    messaggio: '',
                    privacy: false,
                    website: ''
                });
            } else {
                setError(result.error || 'Errore durante l\'invio');
            }
        } catch (err) {
            setError('Errore di connessione');
        } finally {
            setIsSubmitting(false);
        }
    };
    const contactMethods = [
        {
            icon: <MessageCircle className="w-10 h-10" />,
            title: "WhatsApp",
            value: "+39 348 467 0090",
            link: "https://wa.me/393484670090",
            desc: "Risposte rapide e invio documenti facile."
        },
        {
            icon: <Phone className="w-10 h-10" />,
            title: "Numero Verde",
            value: "800161266",
            link: "tel:800161266",
            desc: "Parla con un consulente esperto (Nessun call center estero)."
        },
        {
            icon: <Mail className="w-10 h-10" />,
            title: "Email",
            value: "direzione@biofinance.it",
            link: "mailto:direzione@biofinance.it",
            desc: "Per richieste di informazioni generali."
        },
        {
            icon: <ShieldCheck className="w-10 h-10" />,
            title: "PEC",
            value: "direzione@pec.biofinance.it",
            link: "mailto:direzione@pec.biofinance.it",
            desc: "Per comunicazioni legali ufficiali."
        }
    ];

    const faqs = [
        {
            q: "Devo recarmi fisicamente in filiale per firmare il contratto?",
            a: "Non è necessario. Puoi gestire l'intera pratica, dall'invio dei documenti fino alla firma del contratto, a distanza tramite sistemi di Firma Digitale sicura (SPID o OTP), ovunque ti trovi."
        },
        {
            q: "I miei dati sensibili sono al sicuro se vi contatto su WhatsApp?",
            a: "Assolutamente sì. Utilizziamo account WhatsApp Business criptati end-to-end e trattiamo i tuoi dati nel rigoroso rispetto del GDPR sulla privacy."
        },
        {
            q: "Quanto costa la consulenza e il preventivo?",
            a: "Il preventivo e la consulenza iniziale sono 100% gratuiti e senza impegno. In ottemperanza alle normative OAM, non richiediamo MAI alcun pagamento anticipato o spesa di istruttoria preventiva."
        }
    ];

    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="pt-24 pb-14 lg:pt-32 lg:pb-20 bg-neutral-bg overflow-hidden isolate relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                            Contatti Biofinance: Siamo Qui per Ascoltarti.
                        </h1>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            In Biofinance crediamo che la trasparenza e la reperibilità siano la base della fiducia. Siamo un'agenzia finanziaria regolarmente iscritta all'OAM e mettiamo a tua disposizione molteplici canali per comunicare con noi in totale sicurezza. Vuoi un preventivo o hai un dubbio sulla tua pratica? I nostri consulenti sono pronti a risponderti.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Contact Form */}
            <section className="-mt-10 lg:-mt-16 pb-20 relative z-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-gray-100">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-primary mb-2">Scrivici. Ti risponderemo in meno di 24 ore.</h2>
                            <p className="text-gray-500 text-sm italic">Analisi gratuita e senza impegno</p>
                        </div>
                        {!isSuccess ? (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary ml-1">Nome</label>
                                        <input
                                            name="nome"
                                            required
                                            value={formData.nome}
                                            onChange={handleInputChange}
                                            type="text"
                                            placeholder="Es. Mario"
                                            className="bg-neutral-bg border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-secondary/50 outline-none w-full"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary ml-1">Cognome</label>
                                        <input
                                            name="cognome"
                                            required
                                            value={formData.cognome}
                                            onChange={handleInputChange}
                                            type="text"
                                            placeholder="Es. Rossi"
                                            className="bg-neutral-bg border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-secondary/50 outline-none w-full"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary ml-1">Telefono</label>
                                        <input
                                            name="telefono"
                                            required
                                            value={formData.telefono}
                                            onChange={handleInputChange}
                                            type="tel"
                                            placeholder="Es. 333 1234567"
                                            className="bg-neutral-bg border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-secondary/50 outline-none w-full"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary ml-1">Email</label>
                                        <input
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            type="email"
                                            placeholder="Es. mario.rossi@email.it"
                                            className="bg-neutral-bg border-none rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-secondary/50 outline-none w-full"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary ml-1">Messaggio</label>
                                    <textarea
                                        name="messaggio"
                                        value={formData.messaggio}
                                        onChange={handleInputChange}
                                        placeholder="Come possiamo aiutarti?"
                                        rows={5}
                                        className="bg-neutral-bg border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-secondary/50 outline-none w-full resize-none"
                                    ></textarea>
                                </div>
                                <div className="flex items-start gap-3 px-1">
                                    <input
                                        name="privacy"
                                        required
                                        checked={formData.privacy}
                                        onChange={handleInputChange}
                                        type="checkbox"
                                        id="privacy"
                                        className="mt-1 rounded text-secondary focus:ring-secondary cursor-pointer"
                                    />
                                    <label htmlFor="privacy" className="text-xs text-gray-500 leading-tight cursor-pointer">
                                        Consenso Privacy GDPR. Autorizzo il trattamento dei miei dati personali ai sensi dell'informativa sulla privacy.
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
                                    className="w-full bg-secondary hover:bg-emerald-600 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm inline-flex items-center justify-center gap-2 group disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            INVIO IN CORSO...
                                        </>
                                    ) : (
                                        <>
                                            INVIA RICHIESTA
                                            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </>
                                    )}
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
                                    <h3 className="text-2xl font-bold text-primary mb-2">Messaggio Inviato!</h3>
                                    <p className="text-gray-600 italic">Abbiamo ricevuto la tua richiesta. Ti risponderemo entro 24 ore lavorative.</p>
                                </div>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="text-secondary font-bold hover:underline uppercase tracking-widest text-xs"
                                >
                                    Invia un altro messaggio
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Recapiti Diretti */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 tracking-tight tracking-tight">I Nostri Recapiti Diretti</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Scegli il canale che preferisci per un contatto immediato:
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactMethods.map((method, idx) => (
                        <a
                            key={idx}
                            href={method.link}
                            className="bg-neutral-bg p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group text-center flex flex-col items-center"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                {method.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2 uppercase tracking-wide">{method.title}</h3>
                            <p className="text-secondary font-black mb-4 truncate w-full">{method.value}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">{method.desc}</p>
                        </a>
                    ))}
                </div>
            </section>

            {/* Dove Siamo & Lavora con noi */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Dove Siamo */}
                        <div className="bg-white p-10 lg:p-14 rounded-[3.5rem] shadow-lg border border-gray-50">
                            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-primary mb-6 tracking-tight">Dove Siamo</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Biofinance opera su tutto il territorio nazionale grazie a procedure completamente digitalizzate (firma con SPID o OTP). Tuttavia, se preferisci un incontro di persona, possiamo organizzare un appuntamentoi presso la nostra sede principale di Montecatini-Terme o inviare un consulente fiduciario direttamente da te.
                            </p>
                        </div>

                        {/* Lavora con Noi */}
                        <div className="bg-white p-10 lg:p-14 rounded-[3.5rem] shadow-lg border border-gray-50">
                            <div className="w-14 h-14 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary mb-8">
                                <Briefcase className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-primary mb-6 tracking-tight">Lavora con Noi</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Sei un professionista del settore finanziario? Siamo sempre alla ricerca di talenti. Contattaci per inviare la tua candidatura e unirti alla nostra rete.
                            </p>
                            <div className="flex items-center gap-3 text-primary font-bold group hover:underline cursor-pointer">
                                Candidati ora <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.142455793409!2d10.769751076368438!3d43.87359997109245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a7d77fbc94291%3A0x9538d53c1a3cbb5d!2sBIOFINANCE%20SRL!5e0!3m2!1sit!2sit!4v1773406453843!5m2!1sit!2sit"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
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
            <section className="section-padding bg-primary relative overflow-hidden isolate">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-white/10 backdrop-blur-md p-10 lg:p-16 rounded-[4rem] border border-white/10 text-center">
                        <div className="flex justify-center mb-8">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 text-secondary fill-secondary mx-0.5" />)}
                        </div>
                        <p className="text-2xl lg:text-3xl text-white font-medium italic mb-10 leading-relaxed px-4 text-center">
                            "Reperibili, umani e sempre al telefono."
                        </p>
                        <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-4xl mx-auto text-center px-4">
                            "La cosa che mi ha colpito di più è stata la comunicazione. Niente call center infiniti o voci registrate. Ho chattato su WhatsApp direttamente con il mio consulente dedicato, che mi aggiornava passo passo sull'avanzamento della pratica. Sapere che dall'altra parte c'è una persona vera fa la differenza."
                        </p>
                        <div className="mt-8">
                            <p className="text-secondary font-black tracking-widest uppercase text-sm">Silvia T.</p>
                            <p className="text-gray-400 text-xs mt-1 italic">Cliente Biofinance</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contatti;
