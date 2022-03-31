import React from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";

function DetailModal(props) {
  const Figure = styled.div`
    display: flex;
  `;
  const Image = styled.img.attrs({
    src: "ape.png",
  })`
    width: 270px;
    height: 270px;
  `;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Bored Ape Yacht Club
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Figure>
          <Image />
          <div>
            <h4>원하는 대출 기간</h4>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <button>제출</button>
          </div>
        </Figure>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DetailModal;
