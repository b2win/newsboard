import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import styled from "styled-components";

function ArticlePage({ match }) {
  const category = match.params.category || "Headline";
  console.log(match);

  return (
    <ArticlePageBlock>
      <HeaderBlock>
        <header>
          <div>
            Favorite &#38; No.1 News Updates! | 최고 빠른 대한민국 뉴스!
          </div>
        </header>
      </HeaderBlock>
      <Categories />
      <NewsList category={category} />
      <FooterBlock>
        <header>
          <div>
            Favorite &#38; No.1 News Updates! | 최고 빠른 대한민국 뉴스!
          </div>
        </header>
      </FooterBlock>
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

const HeaderBlock = styled.h2`
  height: 2rem;
  text-align: center;
  font-weight: 600;
`;

const FooterBlock = styled.div`
  margin-top: 2rem;
  height: 5rem;
  text-align: center;
  font-weight: 600;
  background-color: #292929;
`;
