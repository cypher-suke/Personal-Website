import heroVideo from '..assets/hero-bg.mp4';
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">Jarrel Whitmore</h1>
        <h2 className="hero-subtitle">Security Analyst</h2>
        <p className="hero-text">
          Helping organizations detect threats, maintain compliance <br />
          and strengthen security posture through actionable analysis and operational excellence.
        </p>
      </div>
    </section>
  );
};

export default Hero;
