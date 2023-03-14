import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
