import React, { useState } from 'react';
import "./App.css";
import Home from './pages/home';
import Navbar from './components/Navbar';

const App = () => {
 const [darkmode , setDarkMode] = useState(false)

  const toggleDarkMode = () =>{
    const newMode = !darkmode ; 
     setDarkMode(newMode);
      document.body.classList.toggle("dark",newMode)
  }
  return (

    <div>
      <Navbar toggleDarkMode={toggleDarkMode} darkmode={darkmode} />
      <Home />
    </div>
  );
};

export default App; 