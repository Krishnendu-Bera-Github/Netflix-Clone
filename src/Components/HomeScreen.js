import React from "react";
import Banner from "../Banner";
import Navbar from "../Navbar";
import RowComponent from "./RowComponent";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <RowComponent />
    </div>
  );
};

export default HomeScreen;
