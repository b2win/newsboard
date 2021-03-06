import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsArticle from "./NewsArticle";
import loadingImage from "../loadingImage.gif";
import styled from "styled-components";

function NewsList({ category }) {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "Headline" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=cb7f2c87059e431aac872c465d1287bd`
        );
        console.log(category);
        // setArticles(response.data.articles);
        // console.log(response.data.articles);
        const news = response.data.articles;
        // 기사 10개씩 페이지네이션 구현 방법 띵크 하기
        console.log(news);
        setArticles(
          news.slice(0, parseInt(`${pageNumber}`) + `${pageNumber}` * 9)
        );
        // console.log(
        //   news.slice(0, parseInt(`${pageNumber}`) + `${pageNumber}` * 9)
        // );
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return (
      <img
        src={loadingImage}
        alt="loading Img"
        style={{
          width: "150px",
          display: "flex",
          margin: "0 auto",
        }}
      />
    );
  }

  if (!articles) {
    return null;
  }

  return (
    <>
      <NewsListBlock>
        {articles.map((article, id) => (
          <NewsArticle key={article.url} article={article} id={id + 1} />
        ))}
      </NewsListBlock>
    </>
  );
}

export default NewsList;

const NewsListBlock = styled.div`
  margin: 0 auto; // 중앙으로 배치 할때!
  width: 75%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;
