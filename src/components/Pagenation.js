import React, { useState } from "react";
import styled from "styled-components";

const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  width: 30px;
  display: block;
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;

function Pagenation({ paginate, inx }) {
  // console.log(inx);
  const [articlesPerPage, setArticlesPerPage] = useState(5);
  const pageNumber = [];
  for (let i = 0; i <= Math.ceil(inx / articlesPerPage); i++) {
    pageNumber.push(i);
    console.log(pageNumber);
  }

  return (
    <div>
      {pageNumber.map((number) => (
        <PageLi key={number} className="page-item">
          <PageSpan onClick={() => paginate(number)} className="page-link">
            {number}
          </PageSpan>
        </PageLi>
      ))}
    </div>
  );
}

export default Pagenation;
