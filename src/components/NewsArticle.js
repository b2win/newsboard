import React from "react";
import styled from "styled-components";
import Pagenation from "./Pagenation";

function NewsArticle({ article, id }) {
  const { title, description, url, urlToImage, publishedAt } = article;
  // console.log(id);
  // const pageLength = article.length;
  // console.log(pageLength);

  if (!urlToImage) return null;

  return (
    <>
      <NewsArticleBlock>
        {urlToImage && ( //이미지 없을때 넣은 문구/이미지 넣기
          <div className="thumbnail">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={urlToImage} alt="article img" />
            </a>
          </div>
        )}
        <div className="contents">
          <h2>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title.split("-")[0]}
            </a>
          </h2>
          <span>{title.split("-")[1]}</span>
          <span>{publishedAt.substr(0, 10)}</span>
          <p>{description}</p>
        </div>
      </NewsArticleBlock>
      <Pagenation />
    </>
  );
}

export default NewsArticle;

const NewsArticleBlock = styled.div`
  align-items: center;
  justify-content: center;
  height: 400px;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 256px;
      height: 160px;
      object-fit: cover;
      border-radius: 10%;
    }
  }
  .contents {
    h2 {
      margin: 0;
      font-size: 1.2rem;
      width: 256px;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
      width: 256px;
      height: 100px;
      overflow-y: hidden;
      overflow-x: hidden;
    }
  }
  /* & + & {
    margin-top: 3rem;
  } */
`;
