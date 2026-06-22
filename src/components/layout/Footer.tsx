import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
    const polygon = 'polygon(100% 100%, 0% 100%, 0% 6.371%, 0% 4.064%, 0% 4.064%, 0.009% 4.048%, 0.037% 3.998%, 0.087% 3.913%, 0.165% 3.794%, 0.273% 3.639%, 0.414% 3.448%, 0.593% 3.219%, 0.813% 2.954%, 1.077% 2.65%, 1.389% 2.307%, 1.761% 1.952%, 2.203% 1.614%, 2.711% 1.297%, 3.282% 1.005%, 3.915% 0.742%, 4.606% 0.512%, 5.353% 0.319%, 6.153% 0.167%, 7.004% 0.059%, 7.903% 0.001%, 11.229% 0.331%, 18.662% 1.283%, 29.153% 2.704%, 41.65% 4.438%, 55.105% 6.33%, 68.468% 8.225%, 80.688% 9.968%, 90.717% 11.405%, 97.504% 12.381%, 100% 12.741%, 100% 100%)';

    return (
        <footer
            className="relative bg-primary text-white pt-16 pb-8 overflow-hidden [clip-path:none] md:[clip-path:polygon(100%_100%,_0%_100%,_0%_6.371%,_0%_4.064%,_0%_4.064%,_0.009%_4.048%,_0.037%_3.998%,_0.087%_3.913%,_0.165%_3.794%,_0.273%_3.639%,_0.414%_3.448%,_0.593%_3.219%,_0.813%_2.954%,_1.077%_2.65%,_1.389%_2.307%,_1.761%_1.952%,_2.203%_1.614%,_2.711%_1.297%,_3.282%_1.005%,_3.915%_0.742%,_4.606%_0.512%,_5.353%_0.319%,_6.153%_0.167%,_7.004%_0.059%,_7.903%_0.001%,_11.229%_0.331%,_18.662%_1.283%,_29.153%_2.704%,_41.65%_4.438%,_55.105%_6.33%,_68.468%_8.225%,_80.688%_9.968%,_90.717%_11.405%,_97.504%_12.381%,_100%_12.741%,_100%_100%)]"
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

                <div className="border-t border-gray-800 pt-8 space-y-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                        <p>&copy; {new Date().getFullYear()} Biofinance S.r.l. - P.IVA 02048040477</p>
                        <div className="flex gap-6">
                            <a
                                href="https://www.iubenda.com/privacy-policy/77015066/full-legal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="https://www.iubenda.com/privacy-policy/77015066/cookie-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                Cookie Policy
                            </a>
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                        Web Marketing Agency:{" "}
                        <a
                            href="https://maddl.agency/"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="inline-flex items-center gap-2 hover:text-gray-300 transition-colors"
                        >
                            MADDL Agency
                            <Image
                                src="https://maddl.agency/app/uploads/2019/10/logo-maddl-footer.png"
                                alt="Logo MADDL Agency"
                                width={80}
                                height={30}
                                className="h-[30px] w-auto"
                            />
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
