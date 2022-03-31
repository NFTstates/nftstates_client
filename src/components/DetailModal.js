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
            <h4>원하는 대출 조건 : 6000UST 90일 </h4>
            <form>
              <span>
                <label>
                  <span>대출 금액</span>
                  <span>
                    <input
                      name="loanValue"
                      type="number"
                      min="1"
                      required
                      value
                    />
                    <select
                      class="loan-currency"
                      name="selectCurrency"
                      required
                    >
                      <option>Klay</option>
                      <option>stableCoin</option>
                    </select>
                  </span>
                </label>
              </span>
              <br />
              <span>
                <label>
                  <span>기간</span>
                  <select class="duration" name="duration" required>
                    <option value="7">7일</option>
                    <option value="14">14일</option>
                    <option value="30">30일</option>
                    <option value="90">90일</option>
                  </select>
                </label>
              </span>
              <span>
                <label></label>
              </span>
              <span>
                <label></label>
              </span>
            </form>
            <button>제안하기</button>
          </div>
        </Figure>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>닫기</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DetailModal;
