import React from "react";
import styled from "styled-components";
import logoImage from "../logoImage.png";
import { Link, NavLink } from "react-router-dom";

const categories = [
  "All",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 90%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  img {
    width: 120px;
    border-radius: 100%;
  }
`;

const Category = styled.h2`
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

// const Category = styled.Link`
//   font-size: 2rem;
//   cursor: pointer;
//   white-space: pre;
//   color: inherit;

//   &:hover {
//     color: #495057;
//   }
//   & + & {
//     margin-left: 2rem;
//   }
// `;

// function Categories() {
//   return (
//     <>
//       <CategoriesBlock>
//         {/* 로고 클릭시 홈으로 이동 구현하기! */}
//         <img src={logoImage} alt="Logo" className="Logo" to="/" />
//         {categories.map((category) => (
//           <Category
//             // key={category}
//             // exact={category === "All"}
//             to={category === "All" ? "/" : `/${category}`}
//           >
//             {category}
//           </Category>
//         ))}
//       </CategoriesBlock>
//     </>
//   );
// }

function Categories() {
  return (
    <>
      <CategoriesBlock>
        {/* 로고 클릭시 홈으로 이동 구현하기! */}
        <img src={logoImage} alt="Logo" className="Logo" to="/" />
        <Category>
          {categories.map((category) =>
            category === "All" ? (
              <Link to="/">{category}</Link>
            ) : (
              <Link to={category}>{category}</Link>
            )
          )}
        </Category>
      </CategoriesBlock>
    </>
  );
}

export default Categories;
