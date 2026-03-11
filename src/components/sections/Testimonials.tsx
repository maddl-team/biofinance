"use client";

import React from 'react';
import TrustindexWidget from '../widgets/TrustindexWidget';

const Testimonials: React.FC = () => {
    return (
        <section id="recensioni" className="pt-14 lg:pt-20 bg-neutral-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    Dicono di Noi
                </h2>
            </div>

            {/* Full-width Boxed Container for the Widget */}
            <div className="w-full bg-neutral-bg py-10">
                <div className="max-w-[1400px] mx-auto px-4">
                    <TrustindexWidget
                        scriptSrc="https://cdn.trustindex.io/loader.js?9a6430065e07017f01064e81b32"
                        containerId="trustindex-widget"
                        className="min-h-[150px] trustindex-widget-container"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
