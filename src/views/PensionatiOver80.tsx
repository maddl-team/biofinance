import React from 'react';
import {
    Clock,
    Stethoscope,
    FileText,
    ArrowRight,
    Calendar,
    AlertCircle,
    HandHeart
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PensionatiOver80: React.FC = () => {
    const sections = [
        {
            icon: <Clock className="w-8 h-8 text-secondary" />,
            title: "Come funziona il limite d'età?",
            content: "La regola è \"a scadenza piano\". Significa che l'ultima rata deve essere pagata entro il compimento degli 85 o 88 anni (a seconda dell'ente pensionistico e della compagnia assicurativa)."
        },
        {
            icon: <HandHeart className="w-8 h-8 text-secondary" />,
            title: "Assicurazione Vita: La tua tranquillità",
            content: <>Il timore più grande è lasciare un debito ai propri cari. Con la Cessione del Quinto questo rischio è azzerato. La polizza <span className="font-bold">Rischio Vita è obbligatoria e inclusa nel TAEG</span>. In caso di premorienza, il debito residuo viene estinto dalla compagnia assicurativa. Né il coniuge, né i figli dovranno versare un euro. È una garanzia di serenità totale.</>
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 bg-neutral-bg overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Cessione del Quinto Senior: L'Età è solo un numero.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Molti istituti chiudono le porte dopo i 75 anni. <span className="font-bold">Biofinance</span> le apre. Crediamo che i progetti non abbiano scadenza. Grazie a convenzioni assicurative speciali, finanziamo pensionati che desiderano liquidità per aiutare figli, nipoti o semplicemente per godersi la vita, estendendo il piano di ammortamento fino al compimento del <span className="font-bold">88esimo anno di età</span>. Approfondisci la <Link href="/cessione-del-quinto" className="underline">Cessione del Quinto</Link> e la pagina hub <Link href="/prestiti-pensionati" className="underline">Prestiti Pensionati</Link>.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]">
                                <Image
                                    src="/img/prestiti-pensionati-over-80.jpg"
                                    alt="Pensionati Senior Biofinance"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* In-depth Sections */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {sections.map((section, idx) => (
                            <div key={idx} className="bg-neutral-bg p-10 lg:p-14 rounded-[3.5rem] border border-gray-100 flex flex-col group hover:bg-white hover:shadow-xl transition-all">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {section.icon}
                                </div>
                                <h2 className="text-3xl font-bold text-primary mb-6">{section.title}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">{section.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Serve la visita medica? */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[4rem] shadow-xl p-10 lg:p-20 border border-gray-50 overflow-hidden relative isolate">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mt-20 -mr-20 blur-3xl"></div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Stethoscope className="w-8 h-8 text-secondary" />
                                    <span className="text-secondary font-black tracking-widest uppercase text-sm">Pratica Semplificata</span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 leading-tight">Serve la visita medica?</h2>
                                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                    Per importi standard (fino a certe soglie di capitale, solitamente 50.000€), <span className="font-bold">non è richiesta alcuna visita medica</span>, ma basta una semplice autocertificazione di buona salute (Rapporto di Visita Semplificato). VIENE RICHIESTO PER I PENSIONATI INVALIDI.
                                </p>
                                <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                    <AlertCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <p className="text-gray-700 italic">
                                        Per importi più elevati, potrebbe essere richiesto un report del medico di base. Biofinance ti guida nella compilazione per evitare errori burocratici.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-secondary/10 p-10 rounded-[2.5rem] border border-secondary/20 flex flex-col items-center text-center">
                                <FileText className="w-16 h-16 text-secondary mb-6" />
                                <h4 className="text-2xl font-bold text-primary mb-4">Rapporto di Visita Semplificato</h4>
                                <p className="text-gray-600">Gestione veloce e senza stress per la tua serenità.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <div className="bg-primary rounded-[4rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <Calendar className="w-16 h-16 text-secondary mb-8 mx-auto" />
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 italic text-white">"L'Età è solo un numero."</h2>
                            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                                Realizza i tuoi sogni o aiuta chi ami. Verifichiamo insieme la fattibilità in tempo reale.
                            </p>
                            <Link
                                href="/calcolo-cessione-del-quinto"
                                className="bg-secondary hover:bg-teal-600 text-white font-black py-6 px-12 rounded-2xl transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest text-sm inline-flex items-center group/btn"
                            >
                                VERIFICA FATTIBILITÀ OVER 80
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PensionatiOver80;
