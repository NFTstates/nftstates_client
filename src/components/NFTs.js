import React from "react";
import NFT from "./NFT";
import styled from "styled-components";

const NFTs = () => {
  const Gallery = styled.section`
    display: flex;
    flex-wrap: wrap;
  `;

  return (
    <Gallery>
      {Array(6)
        .fill(-1)
        .map((eachNFT) => {
          return <NFT />;
        })}
    </Gallery>
  );
};

export default NFTs;
