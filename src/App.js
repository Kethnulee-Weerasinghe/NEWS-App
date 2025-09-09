import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsList from './components/NewsList';
import Sidebar from './components/Sidebar';
import './App.css';

const API_KEY = '43622b89c6a04779a9062ea36eb64388';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = '';
        if (query) {
          // Search endpoint
          url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;
        } else {
          // Category headlines
          url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [category, query]);

  if (!articles.length) {
    return <p style={{ textAlign: 'center' }}>Loading news...</p>;
  }

  const [topStory, ...rest] = articles;

  return (
    <div className="app">
      <Header onSearch={setQuery} />
      
      <div className="container">
        <div className="main-content">
          <NewsList articles={rest} />
        </div>
        <Sidebar articles={rest.slice(0, 5)} />
      </div>

      <Footer />
    </div>
  );
};

export default App;
