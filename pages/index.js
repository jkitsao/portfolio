import React from "react";
import Navbar from "../components/Navbar";
import TextContent from "../components/TextContent";
// import Chart from "../components/Piechart";
import Language from "../components/Language";
// import { PieChart } from "react-minimal-pie-chart";
export default function index() {
  return (
    <div className="bg-darktheme h-screen">
      <div className=" overflow-x-hidden">
        <Navbar />
      </div>
      <div className="flex justify-center py-8">
        <TextContent />
      </div>
      <div className="flex justify-center px-5 bg-grey-300 py-16 ">
        <Language />
      </div>
    </div>
  );
}
