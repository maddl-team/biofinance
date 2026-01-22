import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
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
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        className="w-full rounded-lg border-gray-300 border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        placeholder="Il tuo nome"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cognome" className="block text-sm font-medium text-gray-700 mb-1">Cognome</label>
                                    <input
                                        type="text"
                                        id="cognome"
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
                                    className="w-full rounded-lg border-gray-300 border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    placeholder="esempio@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">Telefono</label>
                                <input
                                    type="tel"
                                    id="telefono"
                                    className="w-full rounded-lg border-gray-300 border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    placeholder="+39 333 1234567"
                                />
                            </div>

                            <div>
                                <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-1">Messaggio (Opzionale)</label>
                                <textarea
                                    id="messaggio"
                                    rows={3}
                                    className="w-full rounded-lg border-gray-300 border p-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    placeholder="Come possiamo aiutarti?"
                                ></textarea>
                            </div>

                            <div className="flex items-start">
                                <input type="checkbox" id="privacy" className="mt-1 h-4 w-4 rounded border-gray-300 text-secondary focus:ring-secondary" />
                                <label htmlFor="privacy" className="ml-2 text-sm text-gray-500">
                                    Ho letto e accetto la <a href="#" className="text-secondary hover:underline">Privacy Policy</a> e acconsento al trattamento dei dati.
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex justify-center items-center rounded-lg bg-accent px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-amber-600 hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Invia Richiesta
                                <Send className="ml-2 h-5 w-5" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
