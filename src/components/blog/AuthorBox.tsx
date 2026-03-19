import React from 'react';
import Image from 'next/image';

interface AuthorBoxProps {
    author: {
        name: string;
        description: string;
        avatarUrl?: string;
    };
}

const AuthorBox: React.FC<AuthorBoxProps> = ({ author }) => {
    if (!author || !author.name) return null;

    return (
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 mt-6 mb-10 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 transition-all hover:shadow-md">
            {/* Avatar */}
            <div className="flex-shrink-0">
                {author.avatarUrl ? (
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <Image
                            src={author.avatarUrl}
                            alt={author.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                ) : (
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center border-2 border-white shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                )}
            </div>

            {/* Author Info */}
            <div className="flex-grow text-center md:text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2 block">L'autore</span>
                <h3 className="text-xl font-bold text-primary mb-3">
                    {author.name}
                </h3>
                {author.description && (
                    <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                        {author.description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default AuthorBox;
