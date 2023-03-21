import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Work from "./components/Work/Work";

function App() {
 

  return (
    <div className='App flex flex-col justify-between m-auto w-full h-screen relative'>
      <Header />
      <Routes>
        <Route path='/' Component={Landing}/>
        <Route path='/about' Component={About} />
        <Route path='/work' Component={Work} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
