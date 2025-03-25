import React from 'react';
import heroBg from '../assets/hero-bg.jpg'; // Make sure the image is in the same folder
import './Hero.css';

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Jarrel Thomas</h1>
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
