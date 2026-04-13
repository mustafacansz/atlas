import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SingleFillingMachine from './pages/SingleFillingMachine';
import HygienicCentrifugalPump from './pages/HygienicCentrifugalPump';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-filling-machine" element={<SingleFillingMachine />} />
        <Route path="/hygienic-centrifugal-pump" element={<HygienicCentrifugalPump />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
