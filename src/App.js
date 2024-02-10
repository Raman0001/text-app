import React, { useState } from "react";
import TextForm from "./component/TextForm";
import Navbar from "./component/Navbar";
// import {BrowserRouter as Router,Route,Link}; 
function App() {
  const [T, setT] = useState('1');
  const [mode, setMode] = useState("Light")
  const togglemode = () => {
    if (mode === "Light" && T === '1') {
      setMode("Dark")
      setT('0');
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"

    }
    else {
      setT('1');
      setMode("Light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  }
  return (
    <>
      <Navbar T={T} />
      <div className="items-center justify-center" style={{ padding: "20px" }}>
        <div>
          <TextForm mode={mode} T={T} togglemode={togglemode} />
        </div>
      </div>
    </>
  );
}

export default App;
