/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Reviews } from "./components/Reviews";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer, MobileStickyBar } from "./components/Footer";
import { ChatWidget } from "./components/ChatWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileStickyBar />
      <ChatWidget />
    </div>
  );
}
