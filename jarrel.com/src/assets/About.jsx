import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-heading">All about me</h2>
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          </p>
          <p>
            Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
            Mauris massa. Vestibulum lacinia arcu eget nulla. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;