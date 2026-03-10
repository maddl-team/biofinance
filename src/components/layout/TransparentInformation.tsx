import React from 'react';
import { Info } from 'lucide-react';

const TransparentInformation: React.FC = () => {
    return (
        <section className="bg-neutral-bg py-12 border-t border-gray-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary/60 font-bold text-[10px] uppercase tracking-[0.2em] mb-6 border border-primary/10">
                        <Info className="w-3 h-3" />
                        INFORMAZIONI TRASPARENTI
                    </div>

                    <div className="max-w-5xl">
                        <p className="text-[11px] lg:text-[12px] text-gray-500 leading-relaxed text-justify md:text-center font-medium">
                            <span className="font-bold text-gray-700">WWW.BIOFINANCE.IT</span> - è di proprietà di Biofinance Agenzia in attività finanziaria S.r.l.,
                            iscritto/a all'albo degli Agenti in Attività Finanziaria tenuto dall'OAM al n. <span className="text-primary font-semibold">A15318</span> e
                            Società Iscritta all'Albo degli Intermediari Assicurativi tenuto dall'IVASS n. <span className="text-primary font-semibold">E000722108</span> sez. E del RUI
                            <a href="https://www.ivass.it" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline ml-1 font-semibold">www.ivass.it</a>,
                            con sede legale ed operativa in VIA MEZZOMIGLIO 22/D 51018 PIEVE A NIEVOLE (PT) - P.I 02048040477 e CF e Registro Imprese 02048040477 -
                            REA N. PT-609455, - Capitale Sociale Deliberato e Capitale sociale i.v. € 10.000.
                            Biofinance Agenzia in attività finanziaria S.r.l. opera in qualità di agente monomandatario della <span className="font-bold text-gray-700">Fides Spa</span>,
                            Intermediario Finanziario iscritto al n. 29 dell'Albo Unico tenuto da Banca d'Italia ai sensi dell'art. 106 del D. Lgs. 385/1993 ("TUB")
                            con sede legale in Viale Regina Margherita, 279B- 00198 Roma (cod. fisc. 00667720585) e facente parte del <span className="font-bold text-gray-700">Gruppo Banco Desio</span>,
                            per la distribuzione dei prodotti cessione del quinto, delegazione di pagamento, anticipo trattamento fine servizio e prestito personale di Fides Spa,
                            la quale si riserva la valutazione del merito creditizio e dei requisiti necessari alla concessione dei finanziamenti, ovvero di altre Banche/Intermediari
                            Finanziari collocati da Fides Spa. In tale ultima ipotesi questi ultimi, previa valutazione dei requisiti necessari alla concessione del finanziamento,
                            saranno i diretti contraenti e titolari di tutti i rapporti contrattuali.
                        </p>

                        <div className="mt-6 pt-6 border-t border-gray-200/60 transition-all hover:border-secondary/30">
                            <p className="text-[11px] lg:text-[12px] text-gray-400 italic font-medium leading-relaxed">
                                Per le condizioni contrattuali o per quanto non espressamente indicato è necessario fare riferimento al modulo denominato
                                <span className="text-gray-500 font-semibold not-italic ml-1 underline decoration-secondary/30 decoration-2 underline-offset-4">
                                    "Informazioni Europee di Base sul Credito ai consumatori"
                                </span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransparentInformation;
