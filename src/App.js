import HomeTextImageLeft from './components/HomeTextImageLeft';
import HomeBar from './components/HomeBar';
import { otrosProductos } from './mock/otros';
function GuiasDetailWrapper() {
  const { slug } = useParams();
  function slugify(text) {
    return text
      .toString()
      .normalize('NFD').replace(/\p{Diacritic}/gu, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }
  const producto = otrosProductos.find(p => slugify(p.title) === slug);
  if (!producto) return <div className="pt-20 text-center">Guía no encontrada</div>;
  const OtrosDetail = require('./components/OtrosDetail').default;
  return <OtrosDetail producto={producto} />;
}
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate, useParams, useLocation } from 'react-router-dom';
import WhatsappButton from './components/WhatsappButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProteinaPage from './components/ProteinaPage';
import GuiasPage from './components/OtrosPage';
import ChallengePage from './components/ChallengePage';
import ChallengeDetail from './components/ChallengeDetail';
import { defaultChallenges } from './mock/challenges';
import HomePage from './components/HomePage';
import ThankYouPage from './components/ThankYouPage';


const featuresData = [
  { icon: 'heart', title: 'Bienestar Integral', description: 'Programas diseñados para nutrir tu cuerpo y mente, logrando un equilibrio perfecto.' },
  { icon: 'star', title: 'Resultados Reales', description: 'Metodologías probadas que te guiarán hacia tus objetivos de forma efectiva y sostenible.' },
  { icon: 'check', title: 'Comunidad de Apoyo', description: 'Únete a una red de mujeres que te motivarán y acompañarán en cada paso de tu transformación.' },
];

function slugify(text) {
  return text
    .toString()
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function ChallengeDetailWrapper() {
  const { slug } = useParams();
  const challenge = defaultChallenges.find(c => slugify(c.title || 'reto') === slug);
  if (!challenge) return <div className="pt-20 text-center">Reto no encontrado</div>;
  return <ChallengeDetail challenge={challenge} />;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuAnim, setMenuAnim] = useState('');

  // Open menu: show and animate down
  const openMenu = () => {
    setMenuAnim(''); // reset animation
    setMenuVisible(true);
    setMobileMenuOpen(true);
    setMenuAnim('animate-slide-down-menu');
  };
  // Close menu: animate up, then hide
  const closeMenu = () => {
    setMenuAnim('animate-slide-up-menu');
    setMobileMenuOpen(false);
    setTimeout(() => {
      setMenuVisible(false);
    }, 350);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased text-gray-800 overflow-x-hidden">
        


        <Navbar
          mobileMenuOpen={mobileMenuOpen}
          menuVisible={menuVisible}
          menuAnim={menuAnim}
          openMenu={openMenu}
          closeMenu={closeMenu}
        />


        <main className="pt-16">
          <Routes>
            <Route path="/" element={
              <HomePage />
            } />
            <Route path="/retos" element={<ChallengePage />} />
            <Route path="/retos/:slug" element={<ChallengeDetailWrapper />} />
            <Route path="/proteina" element={<ProteinaPage />} />
            <Route path="/guias" element={<GuiasPage />} />
            <Route path="/guias/:slug" element={<GuiasDetailWrapper />} />
            {/* Rutas para políticas y aspectos legales */}
            <Route path="/privacidad" element={
              <section className="min-h-screen flex flex-col items-center justify-center bg-pink-50 py-20 px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6">Política de Privacidad</h1>
                <div className="max-w-2xl text-gray-700 text-lg bg-white rounded-xl shadow p-8">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aquí se informará cómo manejamos tus datos personales.</p>
                </div>
              </section>
            } />
            <Route path="/terminos" element={
              <section className="min-h-screen flex flex-col items-center justify-center bg-pink-50 py-20 px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6">Términos y Condiciones</h1>
                <div className="max-w-2xl text-gray-700 text-lg bg-white rounded-xl shadow p-8">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aquí se establecerán las reglas del servicio y protección legal.</p>
                </div>
              </section>
            } />
            <Route path="/envios" element={
              <section className="min-h-screen flex flex-col items-center justify-center bg-pink-50 py-20 px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6">Política de Envíos y Devoluciones</h1>
                <div className="max-w-2xl text-gray-700 text-lg bg-white rounded-xl shadow p-8">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aquí se dará claridad sobre productos físicos, envíos y devoluciones.</p>
                </div>
              </section>
            } />
            <Route path="/pagos" element={
              <section className="min-h-screen flex flex-col items-center justify-center bg-pink-50 py-20 px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6">Política de Pagos y Reembolsos</h1>
                <div className="max-w-2xl text-gray-700 text-lg bg-white rounded-xl shadow p-8">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aquí se explicará cómo protegemos ante reclamos económicos.</p>
                </div>
              </section>
            } />
            <Route path="/responsabilidad" element={
              <section className="min-h-screen flex flex-col items-center justify-center bg-pink-50 py-20 px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6">Aviso de Responsabilidad</h1>
                <div className="max-w-2xl text-gray-700 text-lg bg-white rounded-xl shadow p-8">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aquí se evitarán problemas legales por temas de salud.</p>
                </div>
              </section>
            } />
            <Route path="/thankyou" element={<ThankYouPage />} />
          </Routes>
        </main>

        <WhatsappButton />

        <Footer />
      </div>
    </Router>
  );
}

export default App;