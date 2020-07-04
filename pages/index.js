import React from "react";
import Navbar from "../components/Navbar";
import TextContent from "../components/TextContent";
// import Chart from "../components/Piechart";
import Language from "../components/Language";
// import { PieChart } from "react-minimal-pie-chart";
import LastSection from "../components/LastSection";
// import Parallax from "react-rellax";
import ScrollAnimation from "react-animate-on-scroll";

export default function index() {
  return (
    <div>
      <ScrollAnimation animateIn="fadeOut">
        <div className="flex justify-center py-8 px-3 ">
          <TextContent />
        </div>
      </ScrollAnimation>
      <div className="bg-grey-300">
        <div className=" bg-grey-100 px-3">
          <h3 className="text-green-600 text-3xl text-center tracking-tight leading-tight font-serif">
            Below are some of the languages i interact with mostly
          </h3>
        </div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="flex justify-center px-3  py-3 ">
            <Language />
          </div>
        </ScrollAnimation>

        <LastSection />
      </div>
    </div>
  );
}
