import React from "react";
import styled from "styled-components";

const NewsArticleBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 320px;
      height: 200px;
      object-fit: cover;
      border-radius: 10%;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

function NewsArticle({ article }) {
  const { title, description, url, urlToImage, publishedAt } = article;
  return (
    <NewsArticleBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="article img" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
        <p>{publishedAt}</p>
      </div>
    </NewsArticleBlock>
  );
}

export default NewsArticle;
