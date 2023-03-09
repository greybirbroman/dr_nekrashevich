import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import SocialLinksBar from "./components/SocialLinksBar/SocialLinksBar";
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
          <SocialLinksBar className={'flex justify-center bg-gray-200 w-full py-2 sm:py-1 sticky top-0 z-50'} />
          <AboutMe />
          <Work />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
