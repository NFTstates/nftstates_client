import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navigator = () => {
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const accounts = await window.klaytn.enable();
    } catch (err) {
      console.log(err);
    }
  };

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
            <Nav.Link onClick={handleLogin}>로그인</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigator;
