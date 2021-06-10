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
      <hr />
      <NewsList category={category} />
      <hr />
    </ArticlePageBlock>
  );
}

export default ArticlePage;

const ArticlePageBlock = styled.div`
  /* margin: 0 auto; // 중앙으로 배치 할때! */
  /* justify-content: center;
  align-items: center; */
  box-sizing: border-box;
  hr {
    border: 1px solid #e2e2e2;
  }
`;
