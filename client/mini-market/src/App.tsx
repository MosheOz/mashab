import React from "react";

import "./App.css";
import Categories from "./categories/categories";
import ItemsAmount from "./items-amount/items-amount";
import Items from "./items/items";

function App() {
  return (
    <div className="App">
      <ItemsAmount />
      <Categories />
      <Items />
    </div>
  );
}

export default App;
