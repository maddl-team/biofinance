import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand & Info */}
                    <div>
                        <div className="text-2xl font-bold mb-6 tracking-tight">Biofinance</div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Agenzia in Attività Finanziaria specializzata nel credito al consumo.
                            Soluzioni trasparenti e su misura per dipendenti e pensionati.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social placeholders could go here */}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-accent">Navigazione</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li><a href="#servizi" className="hover:text-white transition-colors">Cessione del Quinto</a></li>
                            <li><a href="#servizi" className="hover:text-white transition-colors">Prestiti Personali</a></li>
                            <li><a href="#chi-siamo" className="hover:text-white transition-colors">Chi Siamo</a></li>
                            <li><a href="#contatti" className="hover:text-white transition-colors">Contattaci</a></li>
                        </ul>
                    </div>

                    {/* Contatti */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-accent">Contatti</h3>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 text-accent shrink-0" />
                                <span>Via Roma 123, Milano (MI)</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-accent shrink-0" />
                                <span>+39 02 1234 5678</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-accent shrink-0" />
                                <a href="mailto:info@biofinance.it" className="hover:text-white">info@biofinance.it</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal / Trust */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-accent">Certificazioni</h3>
                        <div className="space-y-4 text-gray-300 text-xs">
                            <div className="p-4 border border-gray-700 rounded-lg bg-opacity-20 bg-black">
                                <div className="flex items-center mb-2">
                                    <ShieldCheck className="w-5 h-5 text-green-400 mr-2" />
                                    <span className="font-bold text-white">Iscrizione OAM</span>
                                </div>
                                <p>Agente in attività finanziaria regolarmente iscritto all’OAM.</p>
                            </div>

                            <div className="p-4 border border-gray-700 rounded-lg bg-opacity-20 bg-black">
                                <div className="flex items-center mb-2">
                                    <ShieldCheck className="w-5 h-5 text-green-400 mr-2" />
                                    <span className="font-bold text-white">Iscrizione IVASS</span>
                                </div>
                                <p>Intermediario assicurativo RUI IVASS.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 text-center text-xs text-gray-500">
                    <p className="mb-2">&copy; {new Date().getFullYear()} Biofinance S.r.l. - P.IVA 12345678901</p>
                    <p>Messaggio pubblicitario con finalità promozionale. Per le condizioni contrattuali si rimanda ai fogli informativi disponibili in sede.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
