import React from "react";
import Panel from "../components/Panel";
import TextInfo from "../components/TextInfo";
export default function index() {
  return (
    <div className="h-screen bg-white flex">
      {/* left side links /panel */}
      <div className="fixed">
        <Panel />
      </div>
      {/* page content */}
      <div className="bg-gray-200 w-full h-1/2 overflow-scroll">
        <div className="p-40">
          <TextInfo />
        </div>
      </div>
    </div>
  );
}
