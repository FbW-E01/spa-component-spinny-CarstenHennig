import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Spinner from "./components/Spinner.jsx";
import Data from "./components/Data";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
      setShowData(true);
    }, 3000);
  }, []);

  const [spin, setSpin] = useState(true);

  const [showData, setShowData] = useState(false);

  return (
    <div className="App">
      {spin ? <Spinner /> : null}
      {showData ? <Data /> : null}
    </div>
  );
}

export default App;
