/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Features from './components/Features';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-200 selection:text-teal-900">
      <Navbar />
      <main>
        <div id="inicio"><Hero /></div>
        <div id="destinos"><Destinations /></div>
        <div id="sobre"><Features /></div>
      </main>
      <div id="contato"><Footer /></div>
      <FloatingButtons />
    </div>
  );
}

