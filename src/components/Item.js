import React, { useState } from "react";
import { Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import DetailModal from "./DetailModal";

const Item = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="pigeon.png" />
          <Card.Body>
            <Card.Title>Staple's 비둘기</Card.Title>
            <Card.Text>비둘기 후드를 드립니다.</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Staple 프로젝트</ListGroupItem>
            <ListGroupItem>현재 바닥 가격</ListGroupItem>
            <ListGroupItem></ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">오픈씨 링크</Card.Link>
            <Card.Link href="#">담보대출 링크</Card.Link>
          </Card.Body>
        </Card>
      </Button>
      <DetailModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Item;
