import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Lessons from "../../Components/Lessons/Lessons";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div
        className="home d-flex justify-content-center align-items-center w-100"
        style={{ height: "93vh" }}
      >
        <Sidebar />
        <Lessons />
      </div>
    </>
  );
};

export default Home;
