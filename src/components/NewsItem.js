import React, { useState } from 'react';
import styles from './NewsItem.module.css';

const NewsItem = ({ article }) => (
  <div className="news-item">
    <h3>{article.title}</h3>
    <img src={article.urlToImage} alt={article.title} />
    <p>{article.description}</p>
  </div>
);

export default NewsItem;