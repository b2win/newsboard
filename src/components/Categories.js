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
          <div className="sticky">
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
          </div>
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
  position: sticky;
  top: 0;
  background-color: #292929;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: hidden;
  }
  img {
    width: 60px;
    border-radius: 10%;
  }
  .menu {
    text-decoration: none;
    color: white;
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
