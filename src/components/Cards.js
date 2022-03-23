import React from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";

const Cards = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="pigeon.png" />
      <Card.Body>
        <Card.Title>Staple's 비둘기</Card.Title>
        <Card.Text>비둘기 후드를 드립니다.</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">오픈씨 링크</Card.Link>
        <Card.Link href="#">담보대출 링크</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Cards;
