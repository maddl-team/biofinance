import React from 'react';

const Testimonials: React.FC = () => {
    const widgetRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!widgetRef.current) return;

        // Prevent double injection
        if (widgetRef.current.getAttribute('data-loaded') === 'true') return;

        const script = document.createElement('script');
        script.src = 'https://cdn.trustindex.io/loader.js?9a6430065e07017f01064e81b32';
        script.async = true;
        script.defer = true;

        // Append script to the specific div container
        widgetRef.current.appendChild(script);
        widgetRef.current.setAttribute('data-loaded', 'true');

        return () => {
            // Usually we keep it if we want it to persist, but for clean unmount:
            if (widgetRef.current) {
                widgetRef.current.removeAttribute('data-loaded');
            }
        };
    }, []);

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
                    <div
                        className="min-h-[150px] trustindex-widget-container"
                        id="trustindex-widget"
                        ref={widgetRef}
                    >
                        {/* The widget will be injected here by the script */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
