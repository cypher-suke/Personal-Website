import React from 'react';
import './Articles.css';
import articleImage from './pawel-czerwinski-FwcMuEOW3O0-unsplash.jpg'; // Placeholder image

const Articles = () => {
  const posts = [
    {
      title: "The Human Side of Cybersecurity",
      summary: "Exploring the emotional intelligence needed to thrive in tech.",
      url: "https://www.linkedin.com/in/your-profile/posts/article-1"
    },
    {
      title: "How I Pivoted Into Cybersecurity",
      summary: "My transition from tech support to threat analysis and beyond.",
      url: "https://www.linkedin.com/in/your-profile/posts/article-2"
    },
    {
      title: "Building a Culture of Security",
      summary: "Why security posture starts with people and mindset.",
      url: "https://www.linkedin.com/in/your-profile/posts/article-3"
    }
  ];

  return (
    <section id="articles" className="articles-section">
      <h2 className="articles-heading">Writings</h2>
      <div className="articles-grid">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.url}
            className="article-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={articleImage} alt="Article Cover" className="article-image" />
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Articles;
