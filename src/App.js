import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Communication from "./components/Communication";
import Reference from "./components/Reference";
import Customers from "./components/Customers";

const App = () => {
  return (
    <div className="w-full h-full bg-bodyColor text-lightText scrollBar">
      <Navbar />
      <Banner />
      <div className="w-full">
        <Communication />
        <Reference />
        <Customers />
      </div>
    </div>
  );
};

export default App;
