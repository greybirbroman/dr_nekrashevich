import React from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Header from './components/Header/Header';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App w-full min-w-[320px] h-screen mx-auto flex flex-col justify-between'>
      <Header />
      <main className='w-full flex flex-col'>
        <Landing />
        <About />
        <Work />
        <Footer />
      </main>
    </div>
  );
}

export default App;
