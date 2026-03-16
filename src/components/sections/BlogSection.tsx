import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const BlogSection: React.FC = () => {
    const articles = [
        {
            title: "Prestito Personale START",
            desc: "Il prodotto perfetto per affrontare piccole spese familiari o personali senza preoccupazioni, con tassi fissi e rata costante.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Prestito Personale ONE",
            desc: "Il prestito migliore per realizzare tutti i propri sogni. Si tratta di un prodotto a tasso fisso, ideale per qualunque esigenza.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Prestito Personale TOP",
            desc: "Pensato per chi non si accontenta e ha desideri o sogni molto ambiziosi. Per chi desidera uno stile di vita top.",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Prestito Personale COMPACT",
            desc: "Questo tipo di finanziamento consente di gestire la propria situazione finanziaria con una comoda rata e una liquidità maggiore.",
            image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Prestito Personale MAXI",
            desc: "Pensato per chi cerca una soluzione finanziaria importante, fino a 100.000€ per grandi progetti.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section id="news" className="section-padding bg-white overflow-hidden">
            {/* Header - Aligned with container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-2">
                            News e Approfondimenti
                        </h2>
                        <p className="text-gray-600">
                            Scopri le ultime novità dal mondo del credito.
                        </p>
                    </div>
                    <a href="#blog" className="hidden md:flex items-center text-primary font-semibold hover:text-secondary transition-colors">
                        Leggi tutti gli articoli <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Carousel - Boxed Left, Bleed Right */}
            {/* Calculation approx: pad-left = max(1rem, (100vw - 1480px) / 2 + 1rem) usually handled by container classes, 
                but here we construct a specific scroll container.
                We use a padding-left that matches the container logic.
            */}
            <div className="flex overflow-x-auto pb-12 snap-x scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-8 pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100vw-1480px)/2+2rem))] pr-4 scrollbar-hide">
                <div className="flex space-x-6">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className="w-[280px] sm:w-[350px] flex-shrink-0 snap-start group cursor-pointer"
                        >
                            <div className="aspect-square mb-6 overflow-hidden bg-gray-100 relative">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 640px) 280px, 350px"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                            </div>
                            <h3 className="font-bold text-lg text-primary mb-2 uppercase tracking-wide">
                                {article.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {article.desc}
                            </p>
                        </div>
                    ))}
                    {/* Extra space at the end */}
                    <div className="w-4 sm:w-12 shrink-0"></div>
                </div>
            </div>

            <div className="px-4 md:hidden mt-4">
                <a href="#blog" className="flex items-center text-primary font-semibold hover:text-secondary transition-colors">
                    Leggi tutti gli articoli <ArrowRight className="ml-2 w-5 h-5" />
                </a>
            </div>
        </section>
    );
};

export default BlogSection;
