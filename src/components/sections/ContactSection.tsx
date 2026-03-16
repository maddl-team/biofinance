import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        messaggio: '',
        privacy: false,
        website: '' // Honeypot
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value, type } = e.target as any;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value
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
                    formType: 'Sezione Contatti Home',
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
                    email: '',
                    telefono: '',
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

    return (
        <section id="contatti" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">

                    {/* Contact Info */}
                    <div className="mb-12 lg:mb-0">
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
                            Richiedi ora la tua consulenza gratuita
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Compila il modulo per essere ricontattato da un nostro consulente dedicato.
                            La consulenza è gratuita e senza impegno.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-blue-50 p-3 rounded-lg text-primary mr-4">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-dark">Telefono</h4>
                                    <p className="text-gray-600">+39 02 1234 5678</p>
                                    <p className="text-sm text-gray-500">Lun-Ven: 9:00 - 18:00</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-50 p-3 rounded-lg text-primary mr-4">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-dark">Email</h4>
                                    <a href="mailto:info@biofinance.it" className="text-gray-600 hover:text-primary transition-colors">
                                        info@biofinance.it
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-50 p-3 rounded-lg text-primary mr-4">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-dark">Sede</h4>
                                    <p className="text-gray-600">Via Roma 123, Milano (MI)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-2xl shadow-xl border border-secondary p-8 sm:p-10">
                        {!isSuccess ? (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                                        <input
                                            type="text"
                                            id="nome"
                                            required
                                            value={formData.nome}
                                            onChange={handleInputChange}
                                            className="w-full rounded-lg border-gray-300 border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                            placeholder="Il tuo nome"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="cognome" className="block text-sm font-medium text-gray-700 mb-1">Cognome</label>
                                        <input
                                            type="text"
                                            id="cognome"
                                            required
                                            value={formData.cognome}
                                            onChange={handleInputChange}
                                            className="w-full rounded-lg border-gray-300 border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                            placeholder="Il tuo cognome"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg border-gray-300 border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        placeholder="esempio@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">Telefono</label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        required
                                        value={formData.telefono}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg border-gray-300 border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        placeholder="+39 333 1234567"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-1">Messaggio (Opzionale)</label>
                                    <textarea
                                        id="messaggio"
                                        rows={3}
                                        value={formData.messaggio}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg border-gray-300 border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        placeholder="Come possiamo aiutarti?"
                                    ></textarea>
                                </div>

                                <div className="flex items-start">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        required
                                        checked={formData.privacy}
                                        onChange={handleInputChange}
                                        className="mt-1 h-4 w-4 rounded border-gray-300 text-secondary focus:ring-secondary cursor-pointer"
                                    />
                                    <label htmlFor="privacy" className="ml-2 text-sm text-gray-500 cursor-pointer">
                                        Ho letto e accetto la <a href="#" className="text-secondary hover:underline">Privacy Policy</a> e acconsento al trattamento dei dati.
                                    </label>
                                </div>

                                {error && (
                                    <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm italic">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex justify-center items-center rounded-lg bg-accent px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-teal-700 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Invio in corso...
                                        </>
                                    ) : (
                                        <>
                                            Invia Richiesta
                                            <Send className="ml-2 h-5 w-5" />
                                        </>
                                    )}
                                </button>

                                {/* Honeypot */}
                                <input
                                    type="text"
                                    name="website"
                                    id="website"
                                    value={formData.website}
                                    onChange={handleInputChange}
                                    className="hidden"
                                    aria-hidden="true"
                                />
                            </form>
                        ) : (
                            <div className="text-center py-10 space-y-6 font-primary">
                                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary">Grazie!</h3>
                                <p className="text-gray-600">La tua richiesta è stata inviata. Ti ricontatteremo a breve.</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="text-secondary font-bold hover:underline"
                                >
                                    Invia un'altra richiesta
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
