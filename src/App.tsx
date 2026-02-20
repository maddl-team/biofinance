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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
