import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import CessioneDelQuinto from './pages/CessioneDelQuinto';
import CalcoloCessioneDelQuinto from './pages/CalcoloCessioneDelQuinto';
import RinnovoCessione from './pages/RinnovoCessione';
import DipendentiPrivati from './pages/DipendentiPrivati';
import GrandiAziende from './pages/GrandiAziende';
import Neoassunti from './pages/Neoassunti';
import DipendentiStatali from './pages/DipendentiStatali';
import ScuolaMiur from './pages/ScuolaMiur';
import ForzeArmate from './pages/ForzeArmate';
import EntiLocali from './pages/EntiLocali';
import Sanita from './pages/Sanita';
import Pensionati from './pages/Pensionati';
import PensionatiOver80 from './pages/PensionatiOver80';
import PensionatiExInpdap from './pages/PensionatiExInpdap';
import DelegazionePagamento from './pages/DelegazionePagamento';
import ConsolidamentoDebiti from './pages/ConsolidamentoDebiti';
import SegnalatiCrif from './pages/SegnalatiCrif';
import ChiSiamo from './pages/ChiSiamo';
import Recensioni from './pages/Recensioni';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cessione-del-quinto" element={<CessioneDelQuinto />} />
          <Route path="/calcolo-cessione-del-quinto" element={<CalcoloCessioneDelQuinto />} />
          <Route path="/rinnovo-cessione-del-quinto" element={<RinnovoCessione />} />
          <Route path="/dipendenti-privati" element={<DipendentiPrivati />} />
          <Route path="/prestiti-grandi-aziende" element={<GrandiAziende />} />
          <Route path="/prestiti-neoassunti" element={<Neoassunti />} />
          <Route path="/dipendenti-statali" element={<DipendentiStatali />} />
          <Route path="/prestiti-scuola-miur" element={<ScuolaMiur />} />
          <Route path="/prestiti-forze-armate" element={<ForzeArmate />} />
          <Route path="/prestiti-enti-locali" element={<EntiLocali />} />
          <Route path="/prestiti-sanita" element={<Sanita />} />
          <Route path="/prestiti-pensionati" element={<Pensionati />} />
          <Route path="/prestiti-pensionati-over-80" element={<PensionatiOver80 />} />
          <Route path="/prestiti-pensionati-ex-inpdap" element={<PensionatiExInpdap />} />
          <Route path="/delegazione-di-pagamento" element={<DelegazionePagamento />} />
          <Route path="/consolidamento-debiti" element={<ConsolidamentoDebiti />} />
          <Route path="/prestiti-segnalati-crif" element={<SegnalatiCrif />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/recensioni" element={<Recensioni />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
