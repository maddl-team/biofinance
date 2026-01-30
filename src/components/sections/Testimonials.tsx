import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
    const reviews = [
        {
            name: "Maria Rossi",
            role: "Pensionata INPS",
            text: "Cercavo un prestito per aiutare mio figlio e in Biofinance ho trovato persone squisite. Mi hanno guidata passo passo e la rata è davvero leggera sulla mia pensione.",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
        },
        {
            name: "Giovanni Bianchi",
            role: "Dipendente Statale",
            text: "Ho richiesto una cessione del quinto per ristrutturare casa. Pratica gestita interamente a distanza con una velocità incredibile. Consigliatissimi per la professionalità.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
        },
        {
            name: "Luigi Verdi",
            role: "Dipendente Privato",
            text: "Avevo bisogno di liquidità ma temevo la burocrazia. Con il loro consulente dedicato è stato tutto semplice e chiaro fin da subito. Soldi sul conto in pochi giorni.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
        }
    ];

    return (
        <section className="section-padding bg-neutral-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
                        Dicono di noi
                    </h2>
                    <p className="text-lg text-gray-600">
                        La soddisfazione dei nostri clienti è il nostro miglior biglietto da visita.
                        Ecco alcune esperienze reali.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary relative">
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-8 text-gray-100">
                                <Quote size={48} fill="currentColor" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6 text-accent">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-gray-600 mb-8 leading-relaxed relative z-10">
                                "{review.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                                />
                                <div>
                                    <h4 className="font-bold text-neutral-dark text-sm">{review.name}</h4>
                                    <span className="text-xs text-secondary font-medium uppercase tracking-wide">{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
