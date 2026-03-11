import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import clsx from 'clsx';

interface AccordionItemProps {
    title: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="bg-neutral-bg p-8 rounded-3xl border border-gray-100">
            <button
                className="w-full flex items-start justify-between gap-4 text-left focus:outline-none"
                onClick={onClick}
            >
                <span className={clsx("text-lg font-bold", "text-primary")}>
                    {title}
                </span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-secondary mt-1" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 mt-1" />
                )}
            </button>
            <div
                className={clsx(
                    "transition-all duration-300 ease-in-out text-gray-600 leading-relaxed",
                    isOpen ? "max-h-96 pt-4 opacity-100" : "max-h-0 pt-0 opacity-0 overflow-hidden"
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default AccordionItem;
