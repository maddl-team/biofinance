import React from 'react';
import { getNormalizedSchema } from '../lib/wp/seo';
import { BlogPost, YoastHeadJson } from '../lib/wp/types';
import PostCard from '../components/blog/PostCard';
import Pagination from '../components/blog/Pagination';
import { BlogSidebarCTA, PopularGuides } from '../components/blog/BlogSidebar';

interface BlogViewProps {
    posts: BlogPost[];
    title?: string;
    description?: string;
    yoast?: YoastHeadJson;
    currentPage: number;
    totalPages: number;
    baseUrl?: string;
}

const BlogView: React.FC<BlogViewProps> = ({
    posts,
    title = "Il Blog di Biofinance: Guide e Risposte sul Credito per Dipendenti e Pensionati",
    description = "Benvenuto nello spazio informativo di Biofinance, l'agenzia finanziaria specializzata verticalmente nella Cessione del Quinto. Nel settore del credito, la chiarezza e la trasparenza sono i valori più importanti. In questa sezione condividiamo la nostra esperienza decennale per aiutarti a prendere decisioni finanziarie consapevoli. Che tu stia cercando di capire la differenza tra TAN e TAEG, esplorando le opportunità di rinnovo del tuo prestito, o cercando una soluzione sicura in caso di segnalazioni CRIF (cattivi pagatori), i nostri consulenti hanno preparato per te guide chiare, aggiornate e facili da leggere.",
    yoast,
    currentPage,
    totalPages,
    baseUrl = "/blog"
}) => {
    const normalizedSchema = getNormalizedSchema(yoast);

    return (
        <div className="bg-white min-h-screen">
            {normalizedSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: normalizedSchema }}
                />
            )}
            {/* Hero Blog */}
            <section className="bg-primary py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <nav className="flex mb-4 text-secondary/80 text-xs font-bold uppercase tracking-widest" aria-label="Breadcrumb">
                            <ol className="flex items-center space-x-2">
                                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-white/40">/</span>
                                    <span className="text-white">Blog</span>
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            {title}
                        </h1>
                        <p className="text-base lg:text-lg text-white/70 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Articles Grid & Sidebar */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            {posts.length > 0 ? (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                                        {posts.map((post) => (
                                            <PostCard key={post.id} post={post} />
                                        ))}
                                    </div>

                                    {/* Pagination */}
                                    <div className="mt-20">
                                        <Pagination
                                            currentPage={currentPage}
                                            totalPages={totalPages}
                                            baseUrl={baseUrl}
                                        />
                                    </div>
                                </>
                            ) : (
                                <div className="text-center py-24 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                                    <div className="bg-white v-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 w-8 h-8">
                                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
                                            <path d="M8 7h6"></path>
                                            <path d="M8 11h8"></path>
                                            <path d="M8 15h6"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-primary mb-3">Blog in arrivo</h2>
                                    <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                                        Stiamo preparando contenuti di valore per te. Torna a trovarci tra qualche giorno.
                                    </p>
                                    <a
                                        href="/"
                                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-sm font-bold uppercase tracking-widest text-white bg-secondary hover:bg-secondary/90 transition-all rounded-sm shadow-md hover:shadow-lg"
                                    >
                                        Torna alla Home
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-1/3">
                            <div className="sticky top-24 space-y-8">
                                <BlogSidebarCTA />
                                <PopularGuides />
                            </div>
                        </aside>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogView;
