import React from 'react';
import './Sidebar.css';

const Sidebar = ({ articles }) => (
  <aside className="sidebar">
    <h3>Trending</h3>
    <ul>
      {articles.map((article, index) => (
        <li key={index}>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
