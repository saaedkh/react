import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import './Home.css'; // Ensure you have this CSS file for additional styling
//src/componets/home.jsx
const Home = observer(({ isDarkMode }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showReportForm, setShowReportForm] = useState(false);
  const [reportContent, setReportContent] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const images = [
    '/images/adidas-large.png',
    '/images/adidas-large2.jpg',
    '/images/adidas-large3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleReportSubmit = (e) => {
    e.preventDefault();
    const existingReports = JSON.parse(localStorage.getItem('reports')) || [];
    const newReport = { content: reportContent };
    localStorage.setItem('reports', JSON.stringify([...existingReports, newReport]));
    setReportContent('');
    setReportSubmitted(true);
    setTimeout(() => setReportSubmitted(false), 3000); // Reset the submission message after 3 seconds
  };

  return (
    
    <div className={`home-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="hero-slider">
        <img src={images[currentImageIndex]} alt="Adidas Hero" className="hero-image" />
      </div><button 
          onClick={() => setShowReportForm(!showReportForm)} 
          className="report-button"
        >
          {showReportForm ? 'Cancel' : 'Send Report'}
        </button>
        {showReportForm && (
          <form onSubmit={handleReportSubmit} className="report-form">
            <textarea
              value={reportContent}
              onChange={(e) => setReportContent(e.target.value)}
              placeholder="Write your report here..."
              required
              rows="4"
              className="report-textarea"
            />
            <button type="submit" className="submit-report-button">
              Submit Report
            </button>
            {reportSubmitted && <p className="success-message">Report submitted successfully!</p>}
          </form>
        )}
      <section className="special-offers">
        <h2 className="offers-title">Special Offers</h2>
        <div className="offers-container">
          
          <div className="product-card">
            <img src="/images/AdidasHoodie.jpg" alt="Product 1" className="product-image" />
            <h3 className="product-name">Adidas Hoodie</h3>
            <p className="product-price">$120</p>
          </div>
          <div className="product-card">
            <img src="/images/AdidasRunningShoes.jpg" alt="Product 2" className="product-image" />
            <h3 className="product-name">Adidas Running Shoes</h3>
            <p className="product-price">$80</p>
          </div>
          <div className="product-card">
            <img src="/images/AdidasTShirt.jpg" alt="Product 3" className="product-image" />
            <h3 className="product-name">Adidas T-Shirt</h3>
            <p className="product-price">$50</p>
          </div>
        </div>
        
      </section>
    </div>
  );
});

export default Home;
