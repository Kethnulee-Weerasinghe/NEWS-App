import React from "react";
import styles from "./NewsList.module.css";

const NewsList = ({ articles }) => {
  return (
    <div className={styles["news-list"]}>
      {articles.map((article, index) => (
        <div key={index} className={styles["news-card"]}>
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} />
          )}
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
