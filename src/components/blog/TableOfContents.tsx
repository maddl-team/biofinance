"use client";

import React, { useState, useEffect } from 'react';

interface ToCProps {
    headings: Array<{ id: string, text: string, level: number }>;
}

const TableOfContents: React.FC<ToCProps> = ({ headings }) => {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        if (!headings || headings.length === 0) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -80% 0px', // Trigger when heading is in the top 20% of the viewport
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [headings]);

    if (!headings || headings.length === 0) return null;

    return (
        <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl mb-8 shadow-sm">
            <h4 className="text-primary font-bold mb-4 text-sm uppercase tracking-widest">Indice dell'articolo</h4>
            <nav>
                <ul className="space-y-3">
                    {headings.map((heading, index) => {
                        const isActive = activeId === heading.id;
                        return (
                            <li
                                key={index}
                                style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
                                className="text-sm"
                            >
                                <a
                                    href={`#${heading.id}`}
                                    className={`transition-all duration-300 leading-tight block py-1 ${isActive
                                            ? 'text-secondary font-bold translate-x-1'
                                            : 'text-gray-600 hover:text-secondary'
                                        }`}
                                >
                                    {heading.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default TableOfContents;
