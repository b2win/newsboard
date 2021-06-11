import React from "react";
import styled from "styled-components";
import logoImage from "../logoImage.png";
import { Link, NavLink } from "react-router-dom";

const categories = [
  "Headline",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
];

function Categories() {
  return (
    <>
      <CategoriesBlock>
        <Link to="/">
          <img src={logoImage} alt="Logo" className="Logo" to="/" />
        </Link>
        <Category>
          {categories.map((category) =>
            category === "Headline" ? (
              <Link to="/" className="menu">
                {category}
              </Link>
            ) : (
              <Link to={category} className="menu">
                {category}
              </Link>
            )
          )}
        </Category>
      </CategoriesBlock>
    </>
  );
}

export default Categories;

const CategoriesBlock = styled.div`
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: hidden;
  }
  img {
    width: 100px;
    border-radius: 10%;
    margin-top: 10px;
  }
  .menu {
    text-decoration: none;
    color: black;
    margin-left: 4.5rem;
    &:hover {
      color: gray;
    }
  }
`;

const Category = styled.h2`
  font-size: 1.5rem;
  white-space: pre;
  display: inline-flex;
  margin-bottom: -2rem;
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
