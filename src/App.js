import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo-text">
            THE <span>CYPHER</span> GAMING LOUNGE
          </div>

          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <a href="#pricing">PRICING</a>
            </li>
            <li>
              <a href="#booking">BOOK</a>
            </li>
            <li>
              <button className="franchise-btn">FRANCHISE</button>
            </li>
          </ul>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>
      </nav>

      {/* Hero Section (VIDEO) */}
      <header className="hero" id="home">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <h1 className="neon-text">JOIN THE CYPHER</h1>
          <p>Elevate Your Gaming Experience</p>
          <button className="cta-main">EXPLORE NOW</button>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="services">
        <h2>OUR SERVICES</h2>

        <div className="services-grid">
          <div className="service-card bg-gaming">
            <div className="overlay">
              🎮
              <h3>Gaming Café</h3>
              <p>High-end RTX PCs</p>
            </div>
          </div>

          <div className="service-card bg-billiards">
            <div className="overlay">
              🎱
              <h3>Billiards</h3>
              <p>Pro-grade tables</p>
            </div>
          </div>

          <div className="service-card bg-racing">
            <div className="overlay">
              🏎️
              <h3>Racing Sims</h3>
              <p>Immersive setups</p>
            </div>
          </div>

          <div className="service-card bg-cafe">
            <div className="overlay">
              🍕
              <h3>Café</h3>
              <p>Food & drinks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing">
        <h2>PRICING</h2>
        <div className="pricing-grid">
          <div className="price-card glow">₹100/hr</div>
          <div className="price-card glow">₹500 Night Pass</div>
          <div className="price-card glow">₹3000 Monthly</div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="booking">
        <h2>BOOK YOUR SLOT</h2>
        <a
          href="https://wa.me/919970292632?text=I want to book a gaming slot at The Cypher"
          target="_blank"
          rel="noreferrer"
          className="cta-main"
        >
          Book on WhatsApp
        </a>
      </section>

      <footer>
        <p>THE CYPHER © 2025</p>
      </footer>
    </div>
  );
}

export default App;
