import './App.css';
import Navbar from './componets/Navbar';
import Textform from './componets/Textform';
import About from './componets/About';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TEXTUTILS" aboutText="About" mode={mode} togglemode={togglemode}/>
      <div className='container my-3'>
      <Textform header="Enter the text to analyze below :"  mode={mode} />
      </div>
      <About/>
    </>
  );
}

export default App;
