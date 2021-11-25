import React from "react";
import Covid from "./Covid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Population from "./Population";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/population" element={<Population />} />
      </Routes>
    </Router>
  );
}

export default App;
