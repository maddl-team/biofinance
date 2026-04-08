"use client";

import React, { useRef, useState } from 'react';
import {
    ShieldCheck,
    Clock,
    ArrowRight,
    Bus,
    Trash2,
    Droplets,
    Mail,
    FileText,
    Zap,
    HelpCircle,
    Star,
    Shield,
    Calculator,
    CheckCircle2,
    Loader2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FAQ from '../components/sections/FAQ';
import { sendToWebhook } from '../lib/webhook';

const Municipalizzate: React.FC = () => {
    const formRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        telefono: '',
        dataNascita: '',
        email: '',
        nomeAzienda: '',
        privacy: false,
        website: '' // Honeypot
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
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
                    formType: 'Municipalizzate',
                    formData: formData,
                    website: formData.website,
                    sourceUrl: window.location.href
                }),
            });

            const result = await response.json();

            if (result.ok) {
                // Parallel non-blocking webhook submission only on success
                sendToWebhook('Municipalizzate', formData);
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

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const benefits = [
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: <span className="font-bold">Firma Singola:</span>,
            desc: "La tua busta paga e il tuo TFR sono l'unica garanzia. Non servono garanti."
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: <span className="font-bold">Trattenuta Comoda:</span>,
            desc: "La rata (massimo il 20% del tuo netto) viene trattenuta direttamente dalla tua azienda. Nessun bollettino da ricordare."
        },
        {
            icon: <Calculator className="w-8 h-8" />,
            title: <span className="font-bold">Valutazione delle Indennità:</span>,
            desc: "Consideriamo le indennità legate ai tuoi turni per calcolare un importo erogabile più elevato."
        }
    ];

    const faqs = [
        {
            q: "Lavoro per una municipalizzata locale che ha cambiato ragione sociale di recente (es. fusione). È un problema?",
            a: "Non è un problema. Nel settore dei servizi pubblici le fusioni sono frequenti. Ai fini della Cessione del Quinto, teniamo conto dell'anzianità di servizio pregressa e della continuità del tuo TFR trasferito."
        },
        {
            q: "La mia azienda municipalizzata deve \"approvare\" il mio prestito? Può rifiutarsi?",
            a: "La Cessione del Quinto è un diritto del lavoratore (D.P.R. 180/1950). L'azienda è obbligata ad accettare la notifica del contratto e ad avviare la trattenuta in busta paga."
        },
        {
            q: "Ho dei pignoramenti in busta paga, posso comunque richiedere un finanziamento?",
            a: "Sì. La Cessione del Quinto può coesistere con un pignoramento, purché la somma totale delle trattenute non superi il 40/50% del tuo stipendio netto."
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
                                Cessione del Quinto per Dipendenti di Aziende Municipalizzate.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Le aziende municipalizzate rappresentano la spina dorsale dei servizi pubblici locali. Se sei un dipendente di realtà come Autolinee Toscane, Alia, o altre aziende di servizi (trasporti, rifiuti, idrico), la tua stabilità lavorativa è una garanzia preziosa. In Biofinance trasformiamo questa stabilità in liquidità immediata attraverso la <Link href="/cessione-del-quinto" className="underline">Cessione del Quinto</Link>, con condizioni paragonabili a quelle dei dipendenti pubblici. Scopri anche la pagina hub <Link href="/enti-locali-sanita" className="underline">Enti Locali e Sanità</Link>.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                                    <Bus className="w-5 h-5 text-secondary" />
                                    <span className="text-sm font-bold text-primary">Trasporti</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                                    <Trash2 className="w-5 h-5 text-secondary" />
                                    <span className="text-sm font-bold text-primary">Rifiuti</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                                    <Droplets className="w-5 h-5 text-secondary" />
                                    <span className="text-sm font-bold text-primary">Idrico</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                                    <Mail className="w-5 h-5 text-secondary" />
                                    <span className="text-sm font-bold text-primary">Postale</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative" ref={formRef} id="form-preventivo">
                            <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-2xl border border-gray-100">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-primary mb-2">Lavori in una Municipalizzata? Ottieni il tuo preventivo</h3>
                                    <p className="text-gray-500 text-sm">Richiesta gratuita e veloce</p>
                                </div>
                                {!isSuccess ? (
                                    <form className="space-y-4" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Nome</label>
                                                <input
                                                    name="nome"
                                                    required
                                                    value={formData.nome}
                                                    onChange={handleInputChange}
                                                    type="text"
                                                    placeholder="Nome"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Cognome</label>
                                                <input
                                                    name="cognome"
                                                    required
                                                    value={formData.cognome}
                                                    onChange={handleInputChange}
                                                    type="text"
                                                    placeholder="Cognome"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Telefono</label>
                                                <input
                                                    name="telefono"
                                                    required
                                                    value={formData.telefono}
                                                    onChange={handleInputChange}
                                                    type="tel"
                                                    placeholder="Telefono"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Data di nascita</label>
                                                <input
                                                    name="dataNascita"
                                                    required
                                                    value={formData.dataNascita}
                                                    onChange={handleInputChange}
                                                    type="date"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white appearance-none min-h-[50px]"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                            <input
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                type="email"
                                                placeholder="Email"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Nome Azienda</label>
                                            <input
                                                name="nomeAzienda"
                                                required
                                                value={formData.nomeAzienda}
                                                onChange={handleInputChange}
                                                type="text"
                                                placeholder="Nome Azienda (es. Alia, Autolinee Toscane)"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <input
                                                name="privacy"
                                                type="checkbox"
                                                id="privacy-municipalizzate"
                                                required
                                                checked={formData.privacy}
                                                onChange={handleInputChange}
                                                className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                                            />
                                            <label htmlFor="privacy-municipalizzate" className="text-xs text-gray-500 leading-snug cursor-pointer">
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
                                                    RICHIESTA IN CORSO...
                                                </>
                                            ) : 'RICHIEDI PREVENTIVO ORA'}
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
                                            <p className="text-gray-600 italic px-4">Riceverai il tuo preventivo gratuito a breve sulla tua email.</p>
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

            {/* Vantaggi */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">I Vantaggi per i Lavoratori dei Servizi Pubblici Locali</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
                            Lavorare nel trasporto pubblico locale, nella gestione dei rifiuti o nei servizi idrici ti qualifica per un profilo di rischio eccellente. Con Biofinance ottieni:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-neutral-bg p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all text-center group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {benefit.icon}
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-3">{benefit.title}</h4>
                                <p className="text-gray-600 leading-relaxed text-center">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nuovi Assunti */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[4rem] p-10 lg:p-20 shadow-xl border border-gray-50 flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 tracking-tight">Anche per Nuovi Assunti</h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Se sei stato assunto da poco nella tua azienda, ma hai un contratto a tempo indeterminato e hai superato il periodo di prova, possiamo valutare la tua pratica incrociando i dati del tuo TFR accantonato o trasferito da fondi precedenti.
                            </p>
                            <div className="mt-10">
                                <button
                                    onClick={scrollToForm}
                                    className="bg-primary hover:bg-primary/90 text-white font-bold py-5 px-10 rounded-2xl transition-all shadow-lg shadow-primary/20 uppercase tracking-widest text-xs inline-flex items-center group"
                                >
                                    Verifica la tua anzianità
                                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[400px]">
                                <Image
                                    src="/img/municipalizzate.jpg"
                                    alt="Lavoratori Municipalizzate Biofinance"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-8 rounded-3xl shadow-xl hidden sm:block">
                                <Zap className="w-10 h-10 mb-2" />
                                <div className="text-2xl font-black">Zero</div>
                                <div className="text-sm font-bold uppercase tracking-widest">Burocrazia</div>
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
                            "Trattenuta comodissima e tanta serietà."
                        </p>
                        <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-4xl mx-auto text-center px-4">
                            "Faccio l'autista per il trasporto pubblico locale. Avevo bisogno di liquidità veloce ma in banca le procedure erano infinite. Con Biofinance è bastato mostrare le ultime buste paga. Non devo ricordarmi di pagare i bollettini perché la rata viene scalata in automatico."
                        </p>
                        <div className="mt-8">
                            <p className="text-secondary font-black tracking-widest uppercase text-sm">Marco S.</p>
                            <p className="text-gray-400 text-xs mt-1 italic">Autista TPL (Municipalizzate)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-neutral-bg p-12 lg:p-16 rounded-[3rem] border border-gray-100 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
                        <Calculator className="w-16 h-16 text-secondary mx-auto mb-6" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 tracking-tight">Vuoi una consulenza personalizzata?</h2>
                        <a
                            href="#form-preventivo"
                            className="bg-secondary hover:bg-emerald-600 text-white font-black py-6 px-12 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm inline-flex items-center group/btn"
                        >
                            CALCOLA LA TUA RATA
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:-translate-y-1" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Municipalizzate;
