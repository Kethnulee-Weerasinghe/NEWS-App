import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.open(`https://www.cnn.com/search?q=${query}`, '_blank');
      setQuery('');
    }
  };

  return (
    <footer className="footer">
      {/* Search Bar */}
      <form className="footer-search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search NNA..."
          value={query}s
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">🔍︎</button>
      </form>

      {/* Footer Navigation */}
      <div className="footer-columns">
        <div className="footer-col">
          <h4>World</h4>
          <ul>
            <li>Africa</li>
            <li>Americas</li>
            <li>Asia</li>
            <li>Australia</li>
            <li>China</li>
            <li>Europe</li>
            <li>India</li>
            <li>Middle East</li>
            <li>United Kingdom</li>
            <li>Nigeria</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Politics</h4>
          <ul>
            <li>US Politics</li>
            <li>Facts First</li>
            <li>2025 Elections</li>
          </ul>
          <br></br>
          <h4>Business</h4>
          <ul>
            <li>Media</li>
            <li>Markets</li>
            <li>Investing</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Health</h4>
          <ul>
            <li>Fitness</li>
            <li>Food</li>
            <li>Mindfulness</li>
          </ul>
          <br></br>
          <h4>Entertainment</h4>
          <ul>
            <li>Movies</li>
            <li>Television</li>
            <li>Celebrity</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Sports</h4>
          <ul>
            <li>Football</li>
            <li>Motorsport</li>
            <li>Olympics</li>
          </ul>
          <br></br>
          <h4>Science</h4>
          <ul>
            <li>Space</li>
            <li>Climate</li>
            <li>Weather</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Features</h4>
          <ul>
            <li>Inside Africa</li>
            <li>Impact Your World</li>
            <li>Call to Earth</li>
          </ul>
          <br></br>
          <h4>More</h4>
          <ul>
            <li>Live TV</li>
            <li>Podcasts</li>
            <li>Transcripts</li>
          </ul>
        </div>
      </div>

      {/* Legal Section */}
      <div className="footer-bottom">
        <h4>
          © 2025 News Network App - All Rights Reserved
        </h4>
      </div>

      <div className="legal-links">
        <li>Terms of Use</li>          
          <br></br>
        <li>Privacy Policy</li>
          <br></br>
        <li>Manage Cookies</li>
          <br></br>
        <li>Accessibility & CC</li>
          <br></br>
        <li>About</li>        
      </div>
    </footer>
  );
};

export default Footer;
