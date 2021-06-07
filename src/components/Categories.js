import React from "react";
import styled from "styled-components";
import logoImage from "../logoImage.png";

const categories = [
  "all",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Category = styled.h1`
  font-size: 2rem;
  cursor: pointer;
  white-space: pre;
  color: inherit;

  &:hover {
    color: #495057;
  }
  & + & {
    margin-left: 2rem;
  }
`;

function Categories() {
  return (
    <>
      <CategoriesBlock>
        <img
          src={logoImage}
          alt="Logo"
          style={{ width: "120px", borderRadius: "100%" }}
        />
        {categories.map((category) => (
          <Category>{category}</Category>
        ))}
      </CategoriesBlock>
    </>
  );
}

export default Categories;
