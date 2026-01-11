import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen w-full">
      {/* Animated Glow Background */}
      <div className="fixed inset-0 -z-10 bg-glow"></div>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-[#1a1a2e]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-extrabold neon-text tracking-widest">
            THE CYPHER GAMING LOUNGE
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 uppercase text-sm tracking-wider">
            <a href="#gaming" className="hover:text-cyan-400">
              Gaming
            </a>
            <a href="#pricing" className="hover:text-cyan-400">
              Pricing
            </a>
            <a href="#booking" className="hover:text-cyan-400">
              Booking
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-cyan-400 text-2xl"
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-black border-t border-[#1a1a2e] px-6 py-4 space-y-4">
            <a href="#gaming" className="block">
              Gaming
            </a>
            <a href="#pricing" className="block">
              Pricing
            </a>
            <a href="#booking" className="block">
              Booking
            </a>
          </div>
        )}
      </header>

      {/* VIDEO HERO */}
      <section className="pt-20 relative h-screen flex items-center justify-center text-center">
        <section className="relative h-screen flex items-center justify-center text-center">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 px-6">
            <h2 className="text-5xl md:text-7xl font-black neon-text mb-6">
              LEVEL UP YOUR GAME
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10">
              Esports-grade PCs, ultra-fast internet, and a cyberpunk gaming
              arena.
            </p>
            <span className="btn-neon">COMING SOON</span>
          </div>
        </section>
      </section>

      {/* GAMING SECTION */}
      <section id="gaming" className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="section-title">Gaming Zones</h3>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="service-card">Elite PC Gaming</div>
          <div className="service-card">Console Lounge</div>
          <div className="service-card">Streaming Booths</div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-[#070717] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="section-title">Pricing</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="price-card">₹100 / Hour</div>
            <div className="price-card">₹500 / Day Pass</div>
            <div className="price-card">₹2000 / Monthly</div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section
        id="booking"
        className="max-w-7xl mx-auto px-6 py-24 text-center"
      >
        <h3 className="section-title">Book Your Seat</h3>
        <p className="text-gray-400 mb-6">
          Online booking coming soon. For now, contact us on WhatsApp.
        </p>
        <a href="https://wa.me/91XXXXXXXXXX" className="btn-neon">
          BOOK ON WHATSAPP
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-[#1a1a2e] text-gray-500 text-sm">
        © {new Date().getFullYear()} The Cypher Gaming Café
      </footer>
    </div>
  );
}
