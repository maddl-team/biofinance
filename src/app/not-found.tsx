import Link from 'next/link';
import {
  ArrowRight,
  Home,
  Calculator,
  Wallet,
  Landmark,
  BadgeEuro,
  Search,
  MessageCircle
} from 'lucide-react';

export default function NotFound() {
  const navigationBoxes = [
    {
      title: "Cessione del Quinto",
      description: "Scopri come ottenere liquidità con la tua busta paga o pensione.",
      href: "/cessione-del-quinto",
      icon: Wallet,
      color: "text-primary"
    },
    {
      title: "Calcolo Rata",
      description: "Simula il tuo prestito e scopri subito la tua rata ideale.",
      href: "/calcolo-cessione-del-quinto",
      icon: Calculator,
      color: "text-secondary"
    },
    {
      title: "Prestiti Pensionati",
      description: "Soluzioni dedicate in convenzione INPS fino a 85 anni.",
      href: "/prestiti-pensionati",
      icon: BadgeEuro,
      color: "text-accent"
    },
    {
      title: "Dipendenti Statali",
      description: "Tassi agevolati per dipendenti pubblici, NoiPA e statali.",
      href: "/dipendenti-statali",
      icon: Landmark,
      color: "text-secondary"
    },
    {
      title: "Soluzioni Liquidità",
      description: "Dal consolidamento debiti alla delegazione di pagamento.",
      href: "/soluzioni-liquidita",
      icon: Search,
      color: "text-primary"
    },
    {
      title: "Contattaci",
      description: "Parla con un consulente dedicato per un preventivo gratuito.",
      href: "/contatti",
      icon: MessageCircle,
      color: "text-secondary"
    }
  ];

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main 404 Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#10B981] uppercase bg-secondary-light/30 rounded-full">
            Errore 404
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight">
            Ops! Forse abbiamo preso una <br className="hidden md:block" />
            <span className="text-[#10B981]">direzione diversa.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            La pagina che stai cercando non è disponibile. Potrebbe essere stata spostata o il link potrebbe essere scaduto. Non preoccuparti, siamo qui per aiutarti a trovare la soluzione giusta per te.
          </p>

          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-full transition-all hover:bg-black hover:shadow-lg group"
          >
            <Home className="w-5 h-5 mr-3" />
            Torna in Homepage
            <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Navigation Grid */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center md:text-left">
            Cosa stavi cercando?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {navigationBoxes.map((box, index) => (
              <Link
                key={index}
                href={box.href}
                className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-secondary transition-all duration-300 flex flex-col"
              >
                <div className={`w-14 h-14 rounded-xl bg-neutral-bg flex items-center justify-center mb-6 group-hover:bg-secondary-light transition-colors ${box.color}`}>
                  <box.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {box.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {box.description}
                </p>
                <div className="inline-flex items-center text-secondary font-black tracking-widest text-xs uppercase pt-4 border-t border-gray-50">
                  Esplora ora
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
