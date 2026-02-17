import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="flex items-center">
                            <img
                                src="/img/logo_biofinance_header.png"
                                alt="Biofinance Logo"
                                className="h-12 w-auto object-contain"
                            />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#servizi" className="text-neutral-dark hover:text-primary font-medium transition-colors">
                            Servizi
                        </a>
                        <a href="#perche-biofinance" className="text-neutral-dark hover:text-primary font-medium transition-colors">
                            Vantaggi
                        </a>
                        <a href="#calcolatore" className="text-neutral-dark hover:text-primary font-medium transition-colors">
                            Calcolatore
                        </a>
                        <a href="#recensioni" className="text-neutral-dark hover:text-primary font-medium transition-colors">
                            Recensioni
                        </a>
                        <a href="#faq" className="text-neutral-dark hover:text-primary font-medium transition-colors">
                            FAQ
                        </a>
                        <a href="#news" className="text-neutral-dark hover:text-primary font-medium transition-colors">
                            News
                        </a>
                        <a
                            href="#calcolatore"
                            className="bg-accent hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Calcola Rata
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-neutral-dark hover:text-primary p-2 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-secondary pb-4 shadow-xl absolute w-full left-0 top-20">
                    <div className="px-4 pt-2 pb-3 space-y-2">
                        <a
                            href="#servizi"
                            className="block px-3 py-3 rounded-md text-base font-medium text-neutral-dark hover:bg-gray-50 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Servizi
                        </a>
                        <a
                            href="#perche-biofinance"
                            className="block px-3 py-3 rounded-md text-base font-medium text-neutral-dark hover:bg-gray-50 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Vantaggi
                        </a>
                        <a
                            href="#calcolatore"
                            className="block px-3 py-3 rounded-md text-base font-medium text-neutral-dark hover:bg-gray-50 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Calcolatore
                        </a>
                        <a
                            href="#recensioni"
                            className="block px-3 py-3 rounded-md text-base font-medium text-neutral-dark hover:bg-gray-50 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Recensioni
                        </a>
                        <a
                            href="#faq"
                            className="block px-3 py-3 rounded-md text-base font-medium text-neutral-dark hover:bg-gray-50 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            FAQ
                        </a>
                        <div className="pt-4">
                            <a
                                href="#calcolatore"
                                className="block w-full text-center bg-accent text-white px-4 py-3 rounded-lg font-bold text-lg shadow-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Calcola Rata
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
