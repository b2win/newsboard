import React from "react";

function NewsArticle(article) {
  const { title, description, url, urlToImage, publishedAt } = article;
  return (
    <>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="article img" />
          </a>
        </div>
      )}
      <div>
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
        <p>{publishedAt}</p>
      </div>
    </>
  );
}

export default NewsArticle;
