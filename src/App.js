import React from "react";
import Navigator from "./components/Navigator";
import ControlledTabs from "./components/ControlledTabs";
import NFTs from "./components/NFTs";
import Sheeps from "./components/Sheeps";

const App = () => {
  return (
    <div>
      <Navigator />
      <Sheeps />
      <ControlledTabs />
      <NFTs />
    </div>
  );
};

export default App;
