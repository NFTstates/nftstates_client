import React from "react";
import Item from "../components/Item";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const NFTs = () => {
  const Gallery = styled.section`
    display: flex;
    flex-wrap: wrap;
  `;

  const dispatch = useDispatch();
  const handleClick = (item) => {
    // dispatch(DoSomething(item.id)); // redux도입
  };

  return (
    <div>
      <div id="item-list-title">대출을 제안하고 이자수익을 얻어보세요!</div>
      <Gallery>
        {Array(6)
          .fill(-1)
          .map((item, idx) => {
            return (
              <Item
                item={item}
                key={idx}
                handleClick={() => {
                  handleClick(item);
                }}
              />
            );
          })}
      </Gallery>
    </div>
  );
};

export default NFTs;
