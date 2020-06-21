import React from "react";
import Panel from "../components/Panel";
export default function index() {
  return (
    <div className="h-screen bg-white">
      {/* left side links /panel */}
      <div className="">
        <Panel />
      </div>
      {/* page content */}
      <div></div>
    </div>
  );
}
