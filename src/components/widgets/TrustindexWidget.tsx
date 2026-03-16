"use client";

import React, { useState, useEffect, useRef } from "react";

interface TrustindexWidgetProps {
  scriptSrc: string;
  containerId: string;
  className?: string;
}

const TrustindexWidget: React.FC<TrustindexWidgetProps> = ({
  scriptSrc,
  containerId,
  className,
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Load slightly before it enters the viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && containerRef.current && !isLoaded) {
      // Trustindex loader strategy:
      // The widget script will render inside its parent node or target the containerId.
      // We inject it as a sibling to the target container to keep them separate but localized.

      const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = scriptSrc;
        script.async = true;
        script.defer = true;
        script.id = `ti-script-${containerId}`;

        // Append to the wrapper div (not the widget target div) to maintain separation
        containerRef.current.appendChild(script);
      }

      setIsLoaded(true);
    }
  }, [isInView, scriptSrc, containerId, isLoaded]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ minHeight: "80px" }} // Reserved space to prevent CLS
    >
      {/* Target container for Trustindex to inject the iframe/content */}
      <div id={containerId} className="trustindex-container" />

      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-50 animate-pulse rounded-lg flex items-center justify-center">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 rounded-full" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrustindexWidget;
