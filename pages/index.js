import React from "react";
import Navbar from "../components/Navbar";
import TextContent from "../components/TextContent";
// import Chart from "../components/Piechart";
import Language from "../components/Language";
// import { PieChart } from "react-minimal-pie-chart";
export default function index() {
  return (
    <div className="bg-darktheme h-screen">
      <div className="  sticky top-0">
        <Navbar />
      </div>
      <div className="flex justify-center py-8 px-3">
        <TextContent />
      </div>
      <div className="bg-grey-300">
        <div className=" bg-grey-100 px-3">
          <h3 className="text-green-600 text-3xl text-center tracking-tight leading-tight font-serif">
            Below are some of the languages i interact with mostly
          </h3>
        </div>
        <div className="flex justify-center px-3  py-3 ">
          <Language />
        </div>
      </div>
    </div>
  );
}
