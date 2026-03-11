"use client";

import React from "react";

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
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!ref.current) return;
    if (ref.current.getAttribute("data-loaded") === "true") return;

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.defer = true;

    ref.current.appendChild(script);
    ref.current.setAttribute("data-loaded", "true");

    return () => {
      if (ref.current) {
        ref.current.removeAttribute("data-loaded");
      }
    };
  }, [scriptSrc]);

  return <div id={containerId} className={className} ref={ref} />;
};

export default TrustindexWidget;
