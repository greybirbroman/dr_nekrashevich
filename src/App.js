import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Work from "./components/Work/Work";

function App() {
 

  return (
    <div className='App w-full h-[100vh] mx-auto flex flex-col justify-between'>
      <Header />
      <Routes>
        <Route path='/' Component={Landing}/>
        <Route path='/about' Component={About} />
        <Route path='/work' Component={Work} />
      </Routes>
    </div>
  );
}

export default App;
