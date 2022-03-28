import React from "react";
import Item from "../components/Item";
import styled from "styled-components";

const ItemListContainer = () => {
  const Gallery = styled.section`
    display: flex;
    flex-wrap: wrap;
  `;

  return (
    <div>
      <div id="item-list-title">대출을 제안하고 이자수익을 얻어보세요!</div>
      <Gallery>
        {Array(6)
          .fill(-1)
          .map((item, idx) => {
            return <Item item={item} key={idx} />;
          })}
      </Gallery>
    </div>
  );
};

export default ItemListContainer;
