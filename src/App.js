import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full h-full bg-bodyColor text-lightText">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto"></div>
    </div>
  );
};

export default App;
