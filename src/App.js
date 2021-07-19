import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Spinner from "./components/Spinner.jsx";
import Data from "./components/Data";
import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
      setShowData(true);
    }, 5000);
  }, []);

  const [spin, setSpin] = useState(true);

  const [showData, setShowData] = useState(false);

  return (
    <div className="App">
      {spin ? <Spinner /> : null}
      {showData ? <Data /> : null}
      {/* <iframe width="560" height="315" title="yt" frameBorder="0" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&showinfo=0" allow="autoplay" autoPlay></iframe> */}
    </div>
  );
}

export default App;
