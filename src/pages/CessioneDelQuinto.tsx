import React from 'react';
import {
    CheckCircle2,
    ArrowRight,
    Users,
    Building2,
    UserCheck,
    ShieldCheck,
    PlusCircle,
    FileText,
    Percent,
    Calendar,
    Wallet
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQ from '../components/sections/FAQ';

const CessioneDelQuinto: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Page Header / Hero */}
            <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 bg-secondary-light overflow-hidden isolate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
                            Cessione del Quinto: Il Prestito Garantito, Sostenibile e Unico per Diritto.
                        </h1>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            La Cessione del Quinto non è un semplice prestito personale, ma un diritto del lavoratore e del pensionato sancito dalla legge italiana (DPR 180/1950). In <span className="font-bold">Biofinance</span>, trasformiamo questo diritto in liquidità immediata, trasparente e sicura.
                        </p>
                        <p className="text-lg text-gray-600">
                            A differenza dei finanziamenti bancari classici, qui la tua garanzia non è il tuo passato creditizio, ma la tua busta paga o la tua pensione.
                        </p>
                    </div>
                </div>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-10 pointer-events-none">
                    <img src="/img/logo_biofinance_header.png" alt="" className="w-[600px] h-auto" />
                </div>
            </section>

            {/* Come Funziona */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Come Funziona la Cessione del Quinto?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Il meccanismo è semplice e progettato per tutelare il tuo bilancio familiare.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-neutral-bg p-8 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                                <Percent className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4"><span className="font-bold">Rata Fissa e Sostenibile:</span></h3>
                            <p className="text-gray-600">
                                La rata mensile non può mai superare il <span className="font-bold">20% (un quinto)</span> del tuo stipendio netto o della tua pensione netta. Questo ti garantisce di avere sempre a disposizione il restante 80% per le tue spese quotidiane.
                            </p>
                        </div>
                        <div className="bg-neutral-bg p-8 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                                <Wallet className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4"><span className="font-bold">Prelievo alla Fonte:</span></h3>
                            <p className="text-gray-600">
                                Non devi preoccuparti di bollettini o scadenze. La rata viene trattenuta direttamente dal tuo datore di lavoro o dall'ente pensionistico e versata all'istituto finanziario.
                            </p>
                        </div>
                        <div className="bg-neutral-bg p-8 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4"><span className="font-bold">Durata Flessibile:</span></h3>
                            <p className="text-gray-600">
                                Puoi scegliere piani di ammortamento da <span className="font-bold">24 a 120 mesi (10 anni)</span>. Adattiamo il piano alle tue esigenze di liquidità e sostenibilità mensile.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* A chi è rivolta - 3 Pilastri */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">A chi è rivolta? I 3 Pilastri di Biofinance</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Ogni categoria lavorativa ha caratteristiche uniche. In Biofinance ottimizziamo la pratica in base al tuo status.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Static links for now as requested [Internal Link] */}
                        <div className="flex flex-col bg-white p-8 rounded-2xl border-b-4 border-secondary shadow-sm">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-secondary mb-6 shadow-lg">
                                <Building2 className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4"><span className="font-bold">1. Dipendenti Pubblici e Statali</span></h3>
                            <p className="text-gray-600 mb-6 flex-grow">
                                Per dipendenti ministeriali, scolastici (NoiPA) o delle Forze Armate, i tassi sono spesso i più bassi del mercato grazie al basso profilo di rischio garantito dallo Stato.
                            </p>
                            <Link to="/dipendenti-statali" className="inline-flex items-center text-secondary font-bold hover:underline group">
                                Approfondisci per Dipendenti Statali <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                        <div className="flex flex-col bg-white p-8 rounded-2xl border-b-4 border-secondary shadow-sm">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-secondary mb-6 shadow-lg">
                                <Users className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4"><span className="font-bold">2. Dipendenti Privati (SRL, SPA, Grandi Aziende)</span></h3>
                            <p className="text-gray-600 mb-6 flex-grow">
                                Lavori in un'azienda privata? Il tuo TFR accantonato funge da garanzia solida. Finanziamo dipendenti di PMI e Grandi Aziende (es. Luxottica, Ferrero) con assunzione a tempo indeterminato.
                            </p>
                            <Link to="/dipendenti-privati" className="inline-flex items-center text-secondary font-bold hover:underline group">
                                Approfondisci per Dipendenti Privati <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                        <div className="flex flex-col bg-white p-8 rounded-2xl border-b-4 border-secondary shadow-sm">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-secondary mb-6 shadow-lg">
                                <UserCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4"><span className="font-bold">3. Pensionati INPS ed ex-INPDAP</span></h3>
                            <p className="text-gray-600 mb-6 flex-grow">
                                Grazie alla Convenzione INPS e altri enti (ENPAM, Cassa Geometri), godi di tassi agevolati. La quota cedibile viene calcolata direttamente dall'ente, tutelando sempre il "minimo vitale".
                            </p>
                            <Link to="/prestiti-pensionati" className="inline-flex items-center text-secondary font-bold hover:underline group">
                                Approfondisci per Pensionati <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* I Vantaggi che la Banca non ti dice */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">I Vantaggi che la Banca non ti dice</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-lg"><span className="font-bold">Accessibile ai "Cattivi Pagatori":</span></h4>
                                        <p className="text-gray-600">Se sei segnalato in CRIF o hai avuto disguidi finanziari, questo è l'unico prestito che puoi ottenere legalmente. La garanzia è il tuo stipendio, non la tua storia.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-lg"><span className="font-bold">Nessun Giustificativo di Spesa:</span></h4>
                                        <p className="text-gray-600">Vuoi ristrutturare casa, comprare un'auto o aiutare un figlio? Non devi dirci il motivo. La liquidità è libera.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <ShieldCheck className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-lg"><span className="font-bold">Assicurazione Inclusa per Legge:</span></h4>
                                        <p className="text-gray-600">Ogni contratto include obbligatoriamente polizze Rischio Vita e Rischio Impiego. Sei tutelato tu, ed è tutelata la tua famiglia.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <PlusCircle className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-lg"><span className="font-bold">Possibilità di Rinnovo:</span></h4>
                                        <p className="text-gray-600">Hai già una Cessione in corso? Se hai pagato il 40% del piano, puoi rinegoziarla per ottenere nuova liquidità.</p>
                                        <Link to="/rinnovo-cessione-del-quinto" className="text-secondary font-bold text-sm mt-2 inline-block shadow-none hover:underline">Scopri come funziona il Rinnovo →</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary rounded-3xl p-10 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-6 italic">Perché scegliere Biofinance?</h3>
                                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                                    "Amiamo definire la Cessione del Quinto come lo strumento più democratico del mercato finanziario. Non giudichiamo il tuo passato, ma investiamo nel tuo presente e nel tuo futuro lavorativo."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary"></div>
                                    <div>
                                        <p className="font-bold">Il Team Biofinance</p>
                                        <p className="text-sm opacity-70">Esperti in Credito Sostenibile</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 p-8 text-secondary opacity-10">
                                <ShieldCheck size={120} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Requisiti Minimi */}
            <section className="section-padding bg-neutral-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-8 lg:p-12">
                                <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                                    <FileText className="text-secondary" /> Requisiti Minimi
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-4 border-b border-gray-100 text-sm">
                                        <span className="text-gray-600 font-bold">Età:</span>
                                        <span className="text-primary">Da 18 a 85 anni (a fine piano ammortamento).</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-gray-100 text-sm">
                                        <span className="text-gray-600 font-bold">Contratto:</span>
                                        <span className="text-primary">Tempo indeterminato (per i dipendenti).</span>
                                    </div>
                                    <div className="flex justify-between items-start py-4 border-b border-gray-100 text-sm">
                                        <span className="text-gray-600 font-bold">Documenti:</span>
                                        <span className="text-primary text-right">Carta d'identità, Codice Fiscale, Ultimi 2 cedolini/cedolino pensione.</span>
                                    </div>
                                    <div className="flex justify-between items-start py-4 text-sm">
                                        <span className="text-gray-600 font-bold">Certificato di Stipendio/Quota Cedibile:</span>
                                        <span className="text-primary text-right max-w-[200px]">Documento rilasciato dall'amministrazione (ci pensiamo noi a richiederlo).</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-secondary p-8 lg:p-12 flex flex-col justify-center items-center text-center">
                                <h3 className="text-3xl font-bold text-white mb-6">Pronto a iniziare?</h3>
                                <p className="text-white/90 text-lg mb-8">
                                    Calcola il tuo preventivo senza impegno. I nostri consulenti gestiscono tutta la burocrazia per te.
                                </p>
                                <Link
                                    to="/calcolo-cessione-del-quinto"
                                    className="bg-primary text-white text-xl font-bold px-10 py-5 rounded-2xl shadow-2xl hover:bg-slate-800 transition-all transform hover:scale-105"
                                >
                                    CALCOLA LA TUA CESSIONE ORA
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQ
                items={[
                    {
                        question: <span className="font-bold">Domanda 1: Qual è la differenza tra Cessione del Quinto e Prestito Personale?</span>,
                        answer: <><span className="font-bold">Risposta:</span> La differenza principale sta nella garanzia e nel rimborso. Nel prestito personale la banca valuta il merito creditizio (CRIF) e il pagamento avviene tramite RID bancario. Nella Cessione del Quinto, la garanzia è la busta paga/pensione (quindi accessibile anche a cattivi pagatori) e il pagamento è trattenuto alla fonte dal datore di lavoro, azzerando il rischio di dimenticare una rata.</>
                    },
                    {
                        question: <span className="font-bold">Domanda 2: Cosa succede se perdo il lavoro o cambio azienda?</span>,
                        answer: <><span className="font-bold">Risposta:</span> In caso di cambio azienda, la Cessione del Quinto viene "trasferita" sul nuovo stipendio (notificando il nuovo datore di lavoro). In caso di licenziamento o perdita del lavoro, il debito viene coperto prelevando dal TFR maturato. Se il TFR non basta, interviene l'assicurazione rischio impiego, che potrebbe poi rivalersi sul debitore una volta rioccupato.</>
                    },
                    {
                        question: <span className="font-bold">Domanda 3: Ho già altri prestiti in corso, posso fare la Cessione?</span>,
                        answer: <><span className="font-bold">Risposta:</span> Sì, la Cessione del Quinto può coesistere con altri prestiti (mutui, prestiti personali) purché la somma delle rate non comprometta la sussistenza. Anzi, spesso viene utilizzata per il "Consolidamento Debiti", chiudendo vecchi finanziamenti costosi per averne uno solo con rata più bassa.</>
                    }
                ]}
            />

            {/* Added dynamic metadata script for SEO (can be handled via Helmet if installed, otherwise manual injection or just comments) */}
        </div>
    );
};

export default CessioneDelQuinto;
