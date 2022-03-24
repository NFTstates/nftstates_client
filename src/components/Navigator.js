import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navigator = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">NFTstates</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">대출</Nav.Link>
            <Nav.Link href="#features">이자 수익</Nav.Link>
            <Nav.Link href="#pricing">회사 소개</Nav.Link>
            <Nav.Link href="#pricing">내 계좌</Nav.Link>
            <Nav.Link href="#pricing">알림</Nav.Link>
            <Nav.Link href="#pricing">로그인</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigator;
