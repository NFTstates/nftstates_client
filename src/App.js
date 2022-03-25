import React from "react";
import Navigator from "./components/Navigator";
import ControlledTabs from "./components/ControlledTabs";
import ItemListContainer from "./pages/ItemListContainer";
import Sheeps from "./components/Sheeps";

const App = () => {
  return (
    <div>
      <Navigator />
      <Sheeps />
      <ControlledTabs />
      <ItemListContainer />
    </div>
  );
};

export default App;
