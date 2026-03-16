import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
    const polygon = 'polygon(100% 100%, 0% 100%, 0% 6.371%, 0% 4.064%, 0% 4.064%, 0.009% 4.048%, 0.037% 3.998%, 0.087% 3.913%, 0.165% 3.794%, 0.273% 3.639%, 0.414% 3.448%, 0.593% 3.219%, 0.813% 2.954%, 1.077% 2.65%, 1.389% 2.307%, 1.761% 1.952%, 2.203% 1.614%, 2.711% 1.297%, 3.282% 1.005%, 3.915% 0.742%, 4.606% 0.512%, 5.353% 0.319%, 6.153% 0.167%, 7.004% 0.059%, 7.903% 0.001%, 11.229% 0.331%, 18.662% 1.283%, 29.153% 2.704%, 41.65% 4.438%, 55.105% 6.33%, 68.468% 8.225%, 80.688% 9.968%, 90.717% 11.405%, 97.504% 12.381%, 100% 12.741%, 100% 100%)';

    return (
        <footer
            className="relative bg-primary text-white pt-32 pb-8 overflow-hidden"
            style={{ clipPath: polygon }}
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0" style={{ opacity: 0.03 }}>
                <Image
                    src="/img/bg-footer.jpg"
                    alt="Biofinance Background"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-primary/40"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Colonna 1 — Brand */}
                    <div>
                        <div className="mb-6 text-white">
                            <Image
                                src="/img/logo_biofinance_header.png"
                                alt="Biofinance Logo"
                                width={180}
                                height={64}
                                className="h-10 w-auto brightness-0 invert"
                            />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Agenzia in Attività Finanziaria specializzata nel credito al consumo.
                            Soluzioni trasparenti e su misura per dipendenti e pensionati.
                        </p>

                        {/* OAM Section inside Column 1 */}
                        <div className="flex flex-col items-start pt-4 border-t border-gray-800">
                            <a
                                href="https://www.organismo-am.it/b/0/02048040477/7ec73192-b16c-426e-aa46-c2a8dee475d8/g.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block hover:opacity-80 transition-opacity"
                            >
                                <Image
                                    src="/img/logo-OAM.png"
                                    alt="Logo OAM"
                                    width={200}
                                    height={80}
                                    className="h-20 w-auto mb-2"
                                />
                            </a>
                            <p className="text-gray-400 text-xs text-left">
                                Agente in attività finanziaria iscritto all’OAM.
                            </p>
                        </div>
                    </div>

                    {/* Colonna 2 — Cessione del Quinto */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Cessione del Quinto</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li><Link href="/cessione-del-quinto" className="hover:text-white transition-colors">Cessione del Quinto</Link></li>
                            <li><Link href="/calcolo-cessione-del-quinto" className="hover:text-white transition-colors">Calcolo Cessione</Link></li>
                            <li><Link href="/rinnovo-cessione-del-quinto" className="hover:text-white transition-colors">Rinnovo Cessione</Link></li>
                            <li><Link href="/delegazione-di-pagamento" className="hover:text-white transition-colors">Delegazione di Pagamento</Link></li>
                        </ul>
                    </div>

                    {/* Colonna 3 — Prestiti */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Prestiti</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li><Link href="/dipendenti-privati" className="hover:text-white transition-colors">Dipendenti Privati</Link></li>
                            <li><Link href="/dipendenti-statali" className="hover:text-white transition-colors">Dipendenti Statali</Link></li>
                            <li><Link href="/prestiti-pensionati" className="hover:text-white transition-colors">Prestiti Pensionati</Link></li>
                            <li><Link href="/anticipo-tfs" className="hover:text-white transition-colors">Anticipo TFS</Link></li>
                        </ul>
                    </div>

                    {/* Colonna 4 — Azienda */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Azienda</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li><Link href="/chi-siamo" className="hover:text-white transition-colors">Chi Siamo</Link></li>
                            <li><Link href="/recensioni" className="hover:text-white transition-colors">Recensioni</Link></li>
                            <li><Link href="/contatti" className="hover:text-white transition-colors">Contattaci</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Biofinance S.r.l. - P.IVA 12345678901</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
