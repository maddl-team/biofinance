import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../../lib/wp/types';

interface PostCardProps {
    post: BlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full">
            <div className="aspect-[4/3] mb-4 overflow-hidden bg-gray-100 relative rounded-sm">
                {post.featuredImage ? (
                    <Image
                        src={post.featuredImage.url}
                        alt={post.featuredImage.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
                        <span className="text-xs uppercase tracking-widest font-bold">Biofinance News</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
            </div>

            <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                    {post.categories.map((cat) => (
                        <span key={cat.id} className="text-[10px] uppercase tracking-wider font-bold text-secondary">
                            {cat.name}
                        </span>
                    ))}
                    <span className="text-[10px] text-gray-400">
                        {new Date(post.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                </div>

                <h3 className="font-bold text-xl text-primary mb-3 group-hover:text-secondary transition-colors leading-tight">
                    {post.title}
                </h3>

                <div
                    className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
            </div>

            <div className="mt-auto flex items-center text-primary text-xs font-bold uppercase tracking-widest group-hover:text-secondary transition-colors">
                Leggi l'articolo
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                </svg>
            </div>
        </Link>
    );
};

export default PostCard;
