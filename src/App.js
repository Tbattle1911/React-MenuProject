import React, { useState } from "react";
import Main from "./Components/main";
import Category from "./Components/category";
import data from "./Components/items";
import "./App.css";

const allHeaders = ["all", ...new Set(data.map((d) => d.category))];

function App() {
  const [mainMenu, setMainMenu] = useState(data);
  const [category, setCategory] = useState(allHeaders);

  const handleFilter = (categories) => {
    if (categories === "all") {
      setMainMenu(data);
      return;
    }
    const items = data.filter((item) => item.category === categories);
    setMainMenu(items);
  };

  return (
    <section className="menu">
      <div className="menu-title">
        <h1> Our Menu </h1>
        <div className="shadow"></div>
      </div>
      <Category category={category} handleFilter={handleFilter} />
      <Main data={mainMenu} />
    </section>
  );
}

export default App;
