import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const polygon = 'polygon(100% 100%, 0% 100%, 0% 6.371%, 0% 4.064%, 0% 4.064%, 0.009% 4.048%, 0.037% 3.998%, 0.087% 3.913%, 0.165% 3.794%, 0.273% 3.639%, 0.414% 3.448%, 0.593% 3.219%, 0.813% 2.954%, 1.077% 2.65%, 1.389% 2.307%, 1.761% 1.952%, 2.203% 1.614%, 2.711% 1.297%, 3.282% 1.005%, 3.915% 0.742%, 4.606% 0.512%, 5.353% 0.319%, 6.153% 0.167%, 7.004% 0.059%, 7.903% 0.001%, 11.229% 0.331%, 18.662% 1.283%, 29.153% 2.704%, 41.65% 4.438%, 55.105% 6.33%, 68.468% 8.225%, 80.688% 9.968%, 90.717% 11.405%, 97.504% 12.381%, 100% 12.741%, 100% 100%)';

    return (
        <footer
            className="relative bg-primary text-white pt-32 pb-8 overflow-hidden"
            style={{ clipPath: polygon }}
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0" style={{ opacity: 0.03 }}>
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                    alt="Biofinance Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/40"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        <h3 className="text-lg font-semibold mb-6 text-white">Navigazione</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li><Link to="/cessione-del-quinto" className="hover:text-white transition-colors">Cessione del Quinto</Link></li>
                            <li><Link to="/calcolo-cessione-del-quinto" className="hover:text-white transition-colors">Prestiti Personali</Link></li>
                            <li><Link to="/chi-siamo" className="hover:text-white transition-colors">Chi Siamo</Link></li>
                            <li><a href="#contatti" className="hover:text-white transition-colors">Contattaci</a></li>
                        </ul>
                    </div>

                    {/* Contatti */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Contatti</h3>
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
                        <h3 className="text-lg font-semibold mb-6 text-white">Certificazioni</h3>
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
                    <p className="mb-4">Agenzia in attività finanziaria regolarmente iscritta all’<span className="font-bold">OAM</span> e intermediario assicurativo RUI <span className="font-bold">IVASS</span>.</p>
                    <p>Messaggio pubblicitario con finalità promozionale. Per le condizioni contrattuali si rimanda ai fogli informativi disponibili in sede.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
