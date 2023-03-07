import React from "react";
import "./App.css";
import Logo from "./components/Logo//Logo.js";
import Landing from "./components/Landing/Landing";
import AboutMe from "./components/AboutMe/AboutMe";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import { motion } from "framer-motion";

function App() {
  function MotionLink({ text, href }) {
    return (
      <motion.a
        className='w-auto py-2 px-2 font-semibold z-20 rounded border-2 border-white bg-cyan-500 text-white hover:border-cyan-900 ml-3'
        href={href}
        whileHover={{
          scale: 1.1,
          color: "rgb(6, 182, 212)",
          backgroundColor: "rgb(255, 255, 255)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        
      >
        {text}
      </motion.a>
    );
  }

  return (
    <div className='App overflow-x-hidden'>
      <div className='wrapper bg-white h-screen'>
        <header className='flex justify-between items-center py-2 px-2'>
          <Logo />
          <nav className="flex">
          <MotionLink href='#t1' text='Узнать обо мне' />
          <MotionLink href='#t2' text='Записаться в клинику' />
          </nav>
        </header>

        <main className='content flex-col flex-1 sm: px-2'>
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
