import React from "react";
import Navigator from "./components/Navigator";
import ControlledTabs from "./components/ControlledTabs";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div>
      <Navigator />
      <ControlledTabs />
      <Cards />
    </div>
  );
};

export default App;
