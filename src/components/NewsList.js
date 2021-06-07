import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsArticle from "./NewsArticle";
import loadingImage from "../loadingImage.gif";

function NewsList() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(<div>로딩중 ...</div>);
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=cb7f2c87059e431aac872c465d1287bd"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <img src={loadingImage} alt="loading Img" />;
  }

  if (!articles) {
    return null;
  }

  return (
    <>
      <div>
        {articles.map((article) => (
          <NewsArticle key={article.url} article={article} />
        ))}
      </div>
    </>
  );
}

export default NewsList;
