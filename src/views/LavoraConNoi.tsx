"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import {
    Target,
    Star,
    Zap,
    Users,
    ChevronRight,
    Upload,
    Linkedin,
    Phone,
    Mail,
    User,
    Shield,
    FileText,
    MessageSquare,
    CheckCircle2,
    Loader2
} from 'lucide-react';
import { sendToWebhook } from '../lib/webhook';

const LavoraConNoi: React.FC = () => {
    const formRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        nomeCognome: '',
        email: '',
        telefono: '',
        areaInteresse: '',
        linkedin: '',
        motivazione: '',
        privacy: false,
        website: '' // Honeypot
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [cvFilename, setCvFilename] = useState<string | null>(null);
    const [cvBase64, setCvBase64] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as any;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // 5MB limit
            if (file.size > 5 * 1024 * 1024) {
                setError('Il file è troppo grande. Il limite massimo è 5MB.');
                setCvFilename(null);
                setCvBase64(null);
                if (fileInputRef.current) fileInputRef.current.value = '';
                return;
            }

            setCvFilename(file.name);
            const reader = new FileReader();
            reader.onload = () => {
                const base64String = (reader.result as string).split(',')[1];
                setCvBase64(base64String);
            };
            reader.onerror = () => {
                setError('Errore durante la lettura del file. Riprova.');
                setCvFilename(null);
                setCvBase64(null);
            };
            reader.readAsDataURL(file);
        } else {
            setCvFilename(null);
            setCvBase64(null);
        }
    };

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
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
                    formType: 'Candidatura Lavora Con Noi',
                    formData: {
                        ...formData,
                        cv_filename: cvFilename || 'Nessun file',
                        cv_base64: cvBase64 // Sent only to API for attachment
                    },
                    website: formData.website,
                    sourceUrl: window.location.href
                }),
            });

            const result = await response.json();

            if (result.ok) {
                // Parallel non-blocking webhook submission only on success
                sendToWebhook('Candidatura Lavora Con Noi', {
                    ...formData,
                    cv_filename: cvFilename || 'Nessun file'
                });
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

    const vantagePoints = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Altissima Specializzazione",
            desc: "Lavorerai su un unico prodotto d'eccellenza (Cessione del Quinto), diventando un vero consulente esperto e non un generalista."
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Trust e Reputazione d'Eccellenza",
            desc: "Proporrai i servizi di un'agenzia con oltre 400 recensioni positive a 5 stelle. I clienti si fidano di noi, e il tuo lavoro di consulenza sarà supportato da una reputazione di ferro."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Tecnologia e Velocità",
            desc: "Lavoriamo con un approccio digitale stile \"Amazon\". Strumenti intuitivi, processi snelli e zero carta inutile. Il nostro obiettivo è erogare in 48 ore."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Ambiente Inclusivo e Meritorcratico",
            desc: "Crediamo nell'onestà, nella trasparenza e nel premiare chi porta valore, in un clima di squadra positivo e stimolante."
        }
    ];

    const positions = [
        {
            id: 1,
            title: "1. Consulente del Credito (Specialista Cessione del Quinto)",
            desc: "Cerchiamo agenti e consulenti commerciali empatici, orientati all'obiettivo e capaci di ascoltare i bisogni del cliente.",
            tasks: "Gestirai i lead generati dalle nostre campagne (nessun \"porta a porta\"), analizzerai le pratiche dei dipendenti privati, pubblici e pensionati, e li guiderai fino all'erogazione del finanziamento."
        },
        {
            id: 2,
            title: "2. Back-Office Finanziario e Istruttoria Pratiche",
            desc: "Cerchiamo figure precise e organizzate per il cuore operativo di Biofinance.",
            tasks: "Gestirai l'istruttoria delle pratiche di Cessione del Quinto, interfacciandoti con le amministrazioni (aziende private, INPS, NoiPA) per garantire tempi di delibera record."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-neutral-bg overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6 font-bold text-sm">
                                <Users className="w-4 h-4" />
                                Carriere in Biofinance
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight tracking-tight">
                                Entra nel Team Biofinance: Dai una svolta alla tua carriera finanziaria
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                In Biofinance non facciamo "un po' di tutto". Siamo l'agenzia finanziaria italiana altamente specializzata ed esclusivamente dedicata alla Cessione del Quinto.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Questo approccio verticale ci permette di essere i più veloci, i più precisi e i più affidabili sul mercato. Se sei un professionista del credito o un talento ambizioso che cerca un ambiente dinamico, inclusivo e orientato all'innovazione digitale (dimentica la vecchia burocrazia bancaria!), sei nel posto giusto.
                            </p>
                            <button
                                onClick={scrollToForm}
                                className="bg-secondary hover:bg-emerald-600 text-white font-black py-5 px-10 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm inline-flex items-center group"
                            >
                                Candidati Ora
                                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white h-[500px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                                    alt="Team Biofinance"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                            </div>
                            {/* Stats overlay */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl border border-gray-50 max-w-[200px]">
                                <div className="flex items-center gap-1 text-secondary mb-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-secondary" />)}
                                </div>
                                <p className="font-bold text-primary text-sm">4.9/5 su Trustpilot</p>
                                <p className="text-gray-500 text-xs">Basato su oltre 400 recensioni</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perché lavorare in Biofinance? */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl lg:text-5xl font-extrabold text-primary mb-6 tracking-tight">Perché lavorare in Biofinance?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
                            I nostri vantaggi per la tua crescita professionale
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {vantagePoints.map((point, idx) => (
                            <div key={idx} className="bg-neutral-bg p-8 lg:p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all group hover:-translate-y-2 duration-300">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mb-8 shadow-sm group-hover:bg-secondary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                                    {point.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4 leading-tight">{point.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* I Profili che cerchiamo */}
            <section className="py-20 lg:py-32 bg-neutral-bg relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h2 className="text-3xl lg:text-5xl font-extrabold text-primary mb-10 tracking-tight">I Profili che cerchiamo</h2>
                            <p className="text-lg text-gray-700 mb-12">
                                Siamo sempre alla ricerca di talenti per espandere il nostro organico. Attualmente valutiamo inserimenti per le seguenti aree:
                            </p>

                            <div className="space-y-8">
                                {positions.map((pos) => (
                                    <div key={pos.id} className="bg-white p-8 lg:p-10 rounded-[3rem] shadow-lg border border-gray-50 hover:shadow-2xl transition-all group">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary font-black group-hover:bg-secondary group-hover:text-white transition-colors">
                                                {pos.id}
                                            </div>
                                            <h3 className="text-xl lg:text-2xl font-black text-primary group-hover:text-secondary transition-colors">{pos.title}</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-gray-700 font-semibold">{pos.desc}</p>
                                            <div className="flex gap-3">
                                                <div className="shrink-0 mt-1">
                                                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                                                </div>
                                                <p className="text-gray-600 leading-relaxed italic text-sm">
                                                    <span className="font-bold text-primary not-italic block mb-1">Cosa farai:</span>
                                                    {pos.tasks}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 bg-white/50 backdrop-blur-sm p-10 rounded-[3rem] border border-white">
                                <h4 className="text-2xl font-bold text-primary mb-4">Non trovi la posizione adatta a te?</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Invia la tua candidatura spontanea. Le persone brillanti, curiose e con una forte attitudine al problem solving trovano sempre spazio nella nostra agenzia.
                                </p>
                            </div>
                        </div>

                        {/* Candidacy Form */}
                        <div className="sticky top-32" ref={formRef}>
                            <div className="bg-white rounded-[3.5rem] p-8 lg:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-gray-50">
                                <div className="text-center mb-10">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-3xl text-secondary mb-6">
                                        <FileText className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-black text-primary mb-3">Modulo di Candidatura</h3>
                                    <p className="text-gray-500 font-medium italic">Invia il tuo Curriculum Vitae</p>
                                </div>

                                {!isSuccess ? (
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-primary uppercase tracking-widest ml-1">Nome e Cognome</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="nomeCognome"
                                                    required
                                                    value={formData.nomeCognome}
                                                    onChange={handleInputChange}
                                                    placeholder="Mario Rossi"
                                                    className="w-full bg-neutral-bg border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-secondary/50 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-primary uppercase tracking-widest ml-1">Email</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        placeholder="mario@esempio.it"
                                                        className="w-full bg-neutral-bg border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-secondary/50 outline-none transition-all"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-primary uppercase tracking-widest ml-1">Telefono</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                    <input
                                                        type="tel"
                                                        name="telefono"
                                                        required
                                                        value={formData.telefono}
                                                        onChange={handleInputChange}
                                                        placeholder="+39 333 ..."
                                                        className="w-full bg-neutral-bg border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-secondary/50 outline-none transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-primary uppercase tracking-widest ml-1">Area di interesse</label>
                                            <select
                                                name="areaInteresse"
                                                required
                                                value={formData.areaInteresse}
                                                onChange={handleInputChange}
                                                className="w-full bg-neutral-bg border-none rounded-2xl py-4 px-4 text-sm focus:ring-2 focus:ring-secondary/50 outline-none transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="">Seleziona area...</option>
                                                <option value="commerciale">Consulenza Commerciale</option>
                                                <option value="backoffice">Back-Office</option>
                                                <option value="altro">Altro</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-primary uppercase tracking-widest ml-1">LinkedIn (Opzionale)</label>
                                            <div className="relative">
                                                <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="linkedin"
                                                    value={formData.linkedin}
                                                    onChange={handleInputChange}
                                                    placeholder="https://linkedin.com/in/tuoprofilo"
                                                    className="w-full bg-neutral-bg border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-secondary/50 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-primary uppercase tracking-widest ml-1">Carica il tuo CV (PDF)</label>
                                            <div className="relative group">
                                                <input
                                                    type="file"
                                                    accept=".pdf"
                                                    ref={fileInputRef}
                                                    onChange={handleFileChange}
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                />
                                                <div className={`w-full bg-neutral-bg border-2 border-dashed ${cvFilename ? 'border-secondary' : 'border-gray-200'} rounded-2xl py-4 px-4 text-sm text-gray-500 flex items-center justify-center gap-3 group-hover:border-secondary transition-all`}>
                                                    <Upload className={`w-5 h-5 ${cvFilename ? 'text-secondary' : 'text-gray-400'}`} />
                                                    <span>{cvFilename || 'Clicca per selezionare il file'}</span>
                                                </div>
                                            </div>
                                            <p className="text-[9px] text-gray-400 italic mt-1">* Nota: L'invio dei file fisici sarà attivo dopo la verifica del dominio. Attualmente catturiamo solo il nome del file.</p>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-primary uppercase tracking-widest ml-1">Raccontaci brevemente perché vorresti unirti a Biofinance</label>
                                            <div className="relative">
                                                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                                <textarea
                                                    name="motivazione"
                                                    value={formData.motivazione}
                                                    onChange={handleInputChange}
                                                    placeholder="La tua motivazione..."
                                                    rows={4}
                                                    className="w-full bg-neutral-bg border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-secondary/50 outline-none transition-all resize-none"
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 py-2 px-1">
                                            <div className="relative flex items-center h-5">
                                                <input
                                                    id="privacy"
                                                    name="privacy"
                                                    type="checkbox"
                                                    required
                                                    checked={formData.privacy}
                                                    onChange={handleInputChange}
                                                    className="w-5 h-5 rounded border-gray-300 text-secondary focus:ring-secondary cursor-pointer"
                                                />
                                            </div>
                                            <label htmlFor="privacy" className="text-[10px] lg:text-xs text-gray-500 leading-tight cursor-pointer">
                                                Ho letto e accetto l'informativa sulla <a href="https://www.iubenda.com/privacy-policy/77015066/full-legal" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">privacy</a> per il trattamento dei dati personali dei candidati (Privacy Policy HR).
                                            </label>
                                        </div>

                                        {error && (
                                            <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm italic">
                                                {error}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-primary hover:bg-neutral-dark text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-primary/20 uppercase tracking-widest text-sm flex items-center justify-center gap-3 group disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Invio in corso...
                                                </>
                                            ) : (
                                                <>
                                                    Invia la tua Candidatura
                                                    <Zap className="w-5 h-5 text-secondary fill-secondary group-hover:scale-125 transition-transform" />
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

                                        <div className="mt-6 flex items-center justify-center gap-1.5 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                                            <Shield className="w-3 h-3" />
                                            Protocollo di sicurezza OAM attivo
                                        </div>
                                    </form>
                                ) : (
                                    <div className="text-center py-20 space-y-8 animate-in fade-in zoom-in duration-500">
                                        <div className="w-24 h-24 bg-secondary/10 text-secondary rounded-[2rem] flex items-center justify-center mx-auto transform rotate-12">
                                            <CheckCircle2 className="w-12 h-12" />
                                        </div>
                                        <div>
                                            <h3 className="text-4xl font-black text-primary mb-4 italic">Candidatura Ricevuta!</h3>
                                            <p className="text-gray-600 leading-relaxed italic">
                                                Grazie per il tuo interesse. Il nostro dipartimento HR valuterà il tuo profilo e ti contatterà se in linea con le nostre ricerche.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setIsSuccess(false)}
                                            className="text-secondary font-black hover:underline uppercase tracking-widest text-xs"
                                        >
                                            Invia un'altra candidatura
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LavoraConNoi;
