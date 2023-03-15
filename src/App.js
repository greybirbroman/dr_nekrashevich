import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App flex flex-col m-auto'>
      <div className='wrapper'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
