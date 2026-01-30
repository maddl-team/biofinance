import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import clsx from 'clsx';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="border border-secondary rounded-lg overflow-hidden mb-4 bg-white transition-shadow hover:shadow-sm">
            <button
                className="w-full flex justify-between items-center p-5 text-left bg-white focus:outline-none"
                onClick={onClick}
            >
                <span className={clsx("font-semibold text-lg", isOpen ? "text-primary" : "text-neutral-dark")}>
                    {title}
                </span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-secondary" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
            </button>
            <div
                className={clsx(
                    "transition-all duration-300 ease-in-out px-5 text-gray-600 bg-gray-50",
                    isOpen ? "max-h-96 py-5 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default AccordionItem;
