"use client";

import React, { useState, useEffect, useRef } from "react";
import Script from "next/script";

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

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ minHeight: "80px" }} // Reserved space to prevent CLS
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-50 animate-pulse rounded-lg flex items-center justify-center">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 rounded-full" />
            ))}
          </div>
        </div>
      )}

      {isInView && (
        <>
          <div id={containerId} />
          <Script
            id={`trustindex-script-${containerId}`}
            src={scriptSrc}
            strategy="lazyOnload"
            onLoad={() => setIsLoaded(true)}
          />
        </>
      )}
    </div>
  );
};

export default TrustindexWidget;
