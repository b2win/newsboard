import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsArticle from "./NewsArticle";
import loadingImage from "../loadingImage.gif";
import Pagenation from "./Pagenation";

function NewsList({ category }) {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(<div>로딩중 ...</div>);
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=cb7f2c87059e431aac872c465d1287bd`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <img src={loadingImage} alt="loading Img" />;
  }

  if (!articles) {
    return null;
  }

  return (
    <>
      <div>
        {articles.map((article, id) => (
          <NewsArticle key={article.url} article={article} id={id + 1} />
        ))}
      </div>
    </>
  );
}

export default NewsList;
