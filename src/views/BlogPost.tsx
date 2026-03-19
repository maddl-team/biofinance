import React from 'react';
import Image from 'next/image';
import { BlogPost } from '../lib/wp/types';
import { getNormalizedSchema } from '../lib/wp/seo';

import PostCard from '../components/blog/PostCard';
import TableOfContents from '../components/blog/TableOfContents';
import { BlogSidebarCTA } from '../components/blog/BlogSidebar';
import AuthorBox from '../components/blog/AuthorBox';

interface BlogPostViewProps {
    post: BlogPost;
    relatedPosts?: BlogPost[];
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ post, relatedPosts = [] }) => {
    const normalizedSchema = getNormalizedSchema(post.yoast);

    return (
        <article className="bg-white min-h-screen">
            {/* JSON-LD Schema defined by Yoast */}
            {normalizedSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: normalizedSchema }}
                />
            )}

            {/* Header Post */}
            <header className="bg-primary pt-20 pb-32 lg:pt-28 lg:pb-48 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex justify-center mb-8 text-secondary/80 text-xs font-bold uppercase tracking-widest" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2">
                            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                            <li className="flex items-center space-x-2">
                                <span className="text-white/40">/</span>
                                <a href="/blog" className="hover:text-white transition-colors">Blog</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-white/40">/</span>
                                <span className="text-white truncate max-w-[100px] md:max-w-xs">{post.title}</span>
                            </li>
                        </ol>
                    </nav>

                    <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
                        {post.categories.map((cat) => (
                            <a
                                key={cat.id}
                                href={`/blog/categoria/${cat.slug}`}
                                className="px-3 py-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-secondary/90 transition-colors"
                            >
                                {cat.name}
                            </a>
                        ))}
                        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                        <time className="text-white/60 text-xs font-bold uppercase tracking-widest">
                            {new Date(post.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </time>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-0 leading-[1.15]">
                        {post.title}
                    </h1>
                </div>
            </header>

            {/* Main Content & Sidebar Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 lg:-mt-28 pb-24 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    {/* Content Column */}
                    <div className="lg:w-2/3">
                        {/* Featured Image */}
                        {post.featuredImage && (
                            <div className="relative mb-12 lg:mb-16">
                                <div className="aspect-[16/9] relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                                    <Image
                                        src={post.featuredImage.url}
                                        alt={post.featuredImage.alt}
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 992px) 100vw, 800px"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="wp-content pb-10 prose max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </div>

                        {/* Author Box */}
                        {post.author && <AuthorBox author={post.author} />}

                        {/* Related Posts */}
                        {relatedPosts.length > 0 && (
                            <div className="mt-20 lg:mt-32 border-t border-gray-100 pt-16">
                                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center lg:text-left">Potrebbe interessarti anche</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                                    {relatedPosts.slice(0, 2).map((related) => (
                                        <PostCard key={related.id} post={related} />
                                    ))}
                                </div>
                            </div>
                        )}

                        <footer className="mt-10 pt-10 border-t border-gray-100 mb-0">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                                <a
                                    href="/blog"
                                    className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-xs hover:text-secondary transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 w-4 h-4">
                                        <path d="m15 18-6-6 6-6"></path>
                                    </svg>
                                    Torna all'archivio
                                </a>

                                <div className="flex items-center space-x-4">
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Share:</span>
                                    {/* Placeholders for social share */}
                                    <div className="flex space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 cursor-not-allowed">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 cursor-not-allowed">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>

                    {/* Sidebar Column */}
                    <aside className="lg:w-1/3">
                        <div className="sticky top-24 space-y-8">
                            <TableOfContents headings={post.headings || []} />
                            <BlogSidebarCTA />
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
};

export default BlogPostView;
