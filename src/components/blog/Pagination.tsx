import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, baseUrl }) => {
    if (totalPages <= 1) return null;

    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    return (
        <nav className="flex justify-center items-center space-x-2 mt-16" aria-label="Paginazione">
            {/* Previous Page */}
            {prevPage ? (
                <a
                    href={`${baseUrl}?page=${prevPage}`}
                    className="inline-flex items-center px-4 py-2 border border-gray-200 text-sm font-bold uppercase tracking-widest text-primary bg-white hover:bg-gray-50 transition-all rounded-sm shadow-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    Precedente
                </a>
            ) : (
                <span className="inline-flex items-center px-4 py-2 border border-gray-100 text-sm font-bold uppercase tracking-widest text-gray-300 bg-gray-50 rounded-sm cursor-not-allowed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    Precedente
                </span>
            )}

            {/* Current Status */}
            <span className="px-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Pagina <span className="text-primary">{currentPage}</span> di {totalPages}
            </span>

            {/* Next Page */}
            {nextPage ? (
                <a
                    href={`${baseUrl}?page=${nextPage}`}
                    className="inline-flex items-center px-4 py-2 border border-gray-200 text-sm font-bold uppercase tracking-widest text-primary bg-white hover:bg-gray-50 transition-all rounded-sm shadow-sm"
                >
                    Successiva
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </a>
            ) : (
                <span className="inline-flex items-center px-4 py-2 border border-gray-100 text-sm font-bold uppercase tracking-widest text-gray-300 bg-gray-50 rounded-sm cursor-not-allowed">
                    Successiva
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </span>
            )}
        </nav>
    );
};

export default Pagination;
