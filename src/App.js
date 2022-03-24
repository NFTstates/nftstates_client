import React, { useRef } from "react";
import Navigator from "./components/Navigator";
import ControlledTabs from "./components/ControlledTabs";
import NFTs from "./components/NFTs";
// import { Background } from "./js/background";

const { Background } = require("./js/background");

const App = () => {
  return (
    <div>
      <Navigator />
      <ControlledTabs />
      <NFTs />
    </div>
  );
};

export default App;
