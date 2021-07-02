import React from "react";
import Tree from "./components/Tree";
import Apple from "./components/Apple";
import Basket from "./components/Basket";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Tree />
      <Apple />
      <Basket />
    </div>
  );
}

export default App;
