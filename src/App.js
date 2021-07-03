import React from "react";
import Tree from "./components/Tree/Tree";
import Apple from "./components/Apple/Apple";
import Basket from "./components/Basket/Basket";
import "./App.scss";

function App() {
  return (
    <React.Fragment className="App">
      <Tree />
      <Apple />
      <Basket />
    </React.Fragment>
  );
}

export default App;
