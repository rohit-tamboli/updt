/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experts from './components/Experts';
import Kit from './components/Kit';
import Timeline from './components/Timeline';
import Reach from './components/Reach';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ApplicationForm from './components/ApplicationForm';
import { ModalProvider } from './components/ModalContext';

export default function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-transparent font-sans selection:bg-primary/30 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Kit />
          <Timeline />
          <Testimonials />
          <Experts />
          <Pricing />
          <CTA />
          <Reach />
          <FAQ />
        </main>
        <Footer />
        <ApplicationForm />
      </div>
    </ModalProvider>
  );
}

