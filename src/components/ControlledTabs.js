import React, { useState } from "react";
import { Tabs, Tab, Sonnet } from "react-bootstrap";

const ControlledTabs = () => {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="대출을 원하는 상품"></Tab>
      <Tab eventKey="profile" title="1억 이상 상품"></Tab>
      <Tab eventKey="contact1" title="천만원 이상"></Tab>
      <Tab eventKey="contact2" title="백만원 이상"></Tab>
      <Tab eventKey="contact3" title="게시판"></Tab>
    </Tabs>
  );
};

export default ControlledTabs;
