import React from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import NFT from "./NFT";

const Cards = () => {
  return (
    <div>
      {Array(6)
        .fill(-1)
        .map((eachNFT) => {
          return <NFT />;
        })}
    </div>
  );
};

export default Cards;
