import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import AboutMe from "./components/AboutMe/AboutMe";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <main className='flex-col flex-1'>
          <Landing />
          <AboutMe />
          <Work />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
