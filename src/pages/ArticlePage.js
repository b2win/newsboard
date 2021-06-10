import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import styled from "styled-components";

function ArticlePage({ match }) {
  const category = match.params.category || "Headline";
  console.log(match);

  return (
    <ArticlePageBlock>
      <Categories />
      <NewsList category={category} />
    </ArticlePageBlock>
  );
}

export default ArticlePage;

const ArticlePageBlock = styled.div`
  /* margin: 0 auto; // 중앙으로 배치 할때! */
  /* justify-content: center;
  align-items: center; */
  box-sizing: border-box;
`;
