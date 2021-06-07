import React from "react";
import styled from "styled-components";

const categories = [
  "all",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
];

function Categories() {
  return (
    <div>
      {categories.map((category) => (
        <h1>{category}</h1>
      ))}
    </div>
  );
}

export default Categories;
