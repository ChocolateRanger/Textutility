
import './App.css';
import React, { useState } from 'react'

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("success","Dark Mode has been enabled")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("success","Light Mode has been enabled")
    }
  }

 const showalert = (type, msg) => {
    setalert({
      Type: type,
      message:msg
    })
   setTimeout(() => {
     setalert(null)
   }, 1500);
    
  }
  return (
    <>
      <Navbar title="Textutils" toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert}/>
      <TextForm toggleMode={toggleMode} mode={mode} showalert={showalert}/>
    </>
  );
}

export default App;
