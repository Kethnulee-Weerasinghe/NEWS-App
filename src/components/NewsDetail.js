import React from 'react';

const NewsDetail = ({ article }) => (
  <div>
    <p>{article.description}</p>
    <a href={article.url} target="_blank" rel="noopener noreferrer">
      Read full article
    </a>
  </div>
);

export default NewsDetail;
