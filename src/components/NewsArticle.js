import React from "react";
import styled from "styled-components";
import Pagenation from "./Pagenation";

function NewsArticle({ article, id }) {
  const { title, description, url, urlToImage, publishedAt } = article;
  // console.log(id);
  // const pageLength = article.length;
  // console.log(pageLength);

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
              {title}
            </a>
          </h2>
          <p>{description}</p>
          <p>{publishedAt.substr(0, 10)}</p>
        </div>
      </NewsArticleBlock>
      <Pagenation />
    </>
  );
}

export default NewsArticle;

const NewsArticleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
