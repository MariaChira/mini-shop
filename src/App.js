import React from "react";
import './App.css';

import Header from "./components/header/header";
import CategoryPage from "./pages/category-page/categoryPage";


function App() {
  return (
    <div className="App">
      <Header/>
      <CategoryPage/>
    </div>
  );
}

export default App;
