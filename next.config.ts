import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.biofinance.it",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/contatti',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/chi-siamo',
        permanent: true,
      },
      {
        source: '/cessione-del-quinto2dc9c957',
        destination: '/cessione-del-quinto',
        permanent: true,
      },
      {
        source: '/delega-di-pagamento',
        destination: '/delegazione-di-pagamento',
        permanent: true,
      },
      {
        source: '/i-nostri-servizi',
        destination: '/cessione-del-quinto',
        permanent: true,
      },
      {
        source: '/cose-la-cessione-del-quinto',
        destination: '/cessione-del-quinto',
        permanent: true,
      },
      {
        source: '/quando-potro-rinnovare-la-mia-cessione-del-quinto',
        destination: '/cessione-del-quinto',
        permanent: true,
      },
      {
        source: '/prestiti-personali',
        destination: '/soluzioni-liquidita',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
