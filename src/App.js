import './App.css';
import Navbar from './componets/Navbar';
import Textform from './componets/Textform';
import About from './componets/About';
import React, { useState } from 'react';
import Alert from './componets/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alertMessage, setAlertMessage] = useState(null);
  const [showAbout, setShowAbout] = useState(false); 

  const showAlert = (message) => {
    setAlertMessage(message);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled");
    }
  };

  const toggleAbout = () => {
    setShowAbout(!showAbout); // Toggle between About and Textform
  };

  return (
    <>
      <Navbar title="TEXTUTILS" aboutText="About" mode={mode} togglemode={togglemode} toggleAbout={toggleAbout} />
      <div>
        {alertMessage && <Alert alert={alertMessage} onClose={() => setAlertMessage(null)} />}
      </div>
      <div className='container my-3'>
        {showAbout ? <About /> : <Textform header="Enter the text to analyze below :" mode={mode} showAlert={showAlert} />}
      </div>
    </>
  );
}

export default App;
