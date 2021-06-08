import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

function ArticlePage({ match }) {
  const category = match.params.category || "all";
  console.log(match);

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}

export default ArticlePage;