import React from "react";
import Respichart from "../components/Respiechart";
function LastSection() {
  const data = [
    {
      id: "Html",
      label: "Html",
      value: 550,
      color: "hsl(71, 70%, 50%)",
    },
    {
      id: "Css",
      label: "Css",
      value: 500,
      color: "hsl(39, 70%, 50%)",
    },
    {
      id: "Javascript",
      label: "Javascript",
      value: 600,
      color: "hsl(80, 70%, 50%)",
    },
    {
      id: "Reactjs",
      label: "Reactjs",
      value: 450,
      color: "hsl(94, 70%, 50%)",
    },
    {
      id: "Nodejs",
      label: "Nodejs",
      value: 430,
      color: "hsl(8, 70%, 50%)",
    },
  ];
  return (
    <div className=" py-8">
      <h2 className="text-4xl font-bold text-center text-green-800">
        Languages and frameworks i'm familiar with
      </h2>
      <div className="" style={{ height: "30rem" }}>
        <Respichart data={data} />
      </div>
    </div>
  );
}

export default LastSection;
