"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [pathname]);

    const isLinkActive = (href: string, subMenu?: { href: string }[]) => {
        if (href !== '#' && pathname === href) return true;
        if (subMenu) {
            return subMenu.some(sub => sub.href !== '#' && pathname === sub.href);
        }
        return false;
    };

    const navLinks = [
        {
            name: 'Cessione del Quinto',
            href: '/cessione-del-quinto',
            subMenu: [
                { name: 'Calcolo Rata e Preventivo', href: '/calcolo-cessione-del-quinto' },
                { name: 'Rinnovo Cessione del Quinto', href: '/rinnovo-cessione-del-quinto' }
            ]
        },
        {
            name: 'Dipendenti Privati',
            href: '/dipendenti-privati',
            subMenu: [
                { name: 'Grandi Aziende (Convenzioni specifiche)', href: '/prestiti-grandi-aziende' },
                { name: 'Prestiti per Neoassunti', href: '/prestiti-neoassunti' }
            ]
        },
        {
            name: 'Dipendenti Statali (NoiPA)',
            href: '/dipendenti-statali',
            subMenu: [
                { name: 'Scuola e MIUR', href: '/prestiti-scuola-miur' },
                { name: 'Forze Armate e Carabinieri', href: '/prestiti-forze-armate' },
                { name: 'Anticipo TFS', href: '/anticipo-tfs' }
            ]
        },
        {
            name: 'Enti Locali e Sanità',
            href: '/enti-locali-sanita',
            subMenu: [
                { name: 'Dipendenti Comunali e Regionali', href: '/prestiti-enti-locali' },
                { name: 'Infermieri e Personale Sanitario', href: '/prestiti-sanita' },
                { name: 'Dipendenti Municipalizzate', href: '/prestiti-municipalizzate' }
            ]
        },
        {
            name: 'Pensionati',
            href: '/prestiti-pensionati',
            subMenu: [
                { name: 'Prestiti fino a 85/90 anni', href: '/prestiti-pensionati-over-80' },
                { name: 'Pensionati Ex-INPDAP', href: '/prestiti-pensionati-ex-inpdap' }
            ]
        },
        {
            name: 'Altre Soluzioni',
            href: '/soluzioni-liquidita',
            subMenu: [
                { name: 'Delegazione di Pagamento (Doppio Quinto)', href: '/delegazione-di-pagamento' },
                { name: 'Consolidamento Debiti', href: '/consolidamento-debiti' },
                { name: 'Prestiti per Segnalati CRIF', href: '/prestiti-segnalati-crif' }
            ]
        },
        {
            name: 'L\'Agenzia',
            href: '/chi-siamo',
            subMenu: [
                { name: 'Chi Siamo', href: '/chi-siamo' },
                { name: 'Recensioni e Opinioni', href: '/recensioni' },
                { name: 'Blog & Educazione Finanziaria', href: '#' },
                { name: 'Contatti e Sedi', href: '/contatti' },
                { name: 'Lavora con noi', href: '/lavora-con-noi' }
            ]
        }
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/img/logo_biofinance_header.png"
                                alt="Biofinance Logo"
                                width={200}
                                height={72}
                                className="h-12 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex space-x-1 self-stretch">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group flex items-center h-full"
                                onMouseEnter={() => setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <div className="flex items-center">
                                    {link.href !== '#' ? (
                                        <Link
                                            href={link.href}
                                            className="px-3 py-2 font-bold text-sm text-neutral-dark hover:text-primary transition-all whitespace-nowrap"
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <button className="px-3 py-2 font-bold text-sm text-neutral-dark hover:text-primary transition-all whitespace-nowrap">
                                            {link.name}
                                        </button>
                                    )}
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180 text-secondary' : 'text-gray-400'}`} />
                                </div>

                                {/* Active Line Indicator - Aligned to bottom of header */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-secondary transition-all duration-300 transform origin-left ${isLinkActive(link.href, link.subMenu) ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />

                                {/* Dropdown Menu */}
                                <div className={`absolute top-full w-64 bg-white shadow-2xl rounded-b-xl border border-gray-100 py-3 transition-all duration-200 ${link.name === "L'Agenzia" ? 'right-0' : 'left-0'} ${activeDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                    {link.subMenu.map((sub) => (
                                        sub.href.startsWith('/') ? (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className={`block px-5 py-2.5 text-sm transition-colors font-semibold ${pathname === sub.href ? 'bg-secondary-light text-secondary border-l-4 border-secondary' : 'text-gray-700 hover:bg-secondary-light hover:text-primary'}`}
                                            >
                                                {sub.name}
                                            </Link>
                                        ) : (
                                            <a
                                                key={sub.name}
                                                href={sub.href}
                                                className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-secondary-light hover:text-primary transition-colors font-semibold"
                                            >
                                                {sub.name}
                                            </a>
                                        )
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="xl:hidden flex items-center">
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
                <div className="xl:hidden bg-white border-b border-secondary pb-6 shadow-2xl absolute w-full left-0 top-20 max-h-[calc(100vh-5rem)] overflow-y-auto">
                    <div className="px-4 pt-2 space-y-1">
                        {navLinks.map((link) => (
                            <div key={link.name} className="border-b border-gray-50 last:border-0">
                                <div className="flex items-center justify-between w-full">
                                    {link.href !== '#' ? (
                                        <Link
                                            href={link.href}
                                            className={`flex-1 text-left px-3 py-4 text-base font-bold rounded-lg transition-colors ${isLinkActive(link.href, link.subMenu) ? 'bg-secondary-light/50 text-neutral-dark' : 'text-neutral-dark hover:bg-gray-50'}`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                            className="flex-1 text-left px-3 py-4 text-base font-bold text-neutral-dark hover:bg-gray-50 rounded-lg transition-colors"
                                        >
                                            {link.name}
                                        </button>
                                    )}
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                        className="p-4"
                                    >
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                    </button>
                                </div>

                                {activeDropdown === link.name && (
                                    <div className="bg-neutral-bg rounded-xl mb-2 px-2 py-2 space-y-1 ml-3">
                                        {link.subMenu.map((sub) => (
                                            sub.href.startsWith('/') ? (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    className={`block px-4 py-3 text-sm font-semibold transition-colors ${pathname === sub.href ? 'text-secondary bg-white rounded-lg shadow-sm border-l-4 border-secondary' : 'text-gray-600 hover:text-primary'}`}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ) : (
                                                <a
                                                    key={sub.name}
                                                    href={sub.href}
                                                    className="block px-4 py-3 text-sm font-semibold text-gray-600 hover:text-primary"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {sub.name}
                                                </a>
                                            )
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
