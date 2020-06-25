import React from "react";
import { PieChart } from "react-minimal-pie-chart";
export default function chart() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-1/4">
        <h3 className="text-white text-2xl">i love web development</h3>
      </div>
      <PieChart
        className="w-64"
        data={[
          { title: "Html", value: 10, color: "#E38627" },
          { title: "Css", value: 15, color: "#C13C37" },
          { title: "Javascript", value: 20, color: "#6A2135" },
        ]}
        // labelRenderProps={}
        // labelRenderProps = {
        //     x,
        //     y,
        //     dx,
        //     dy,
        //     textAnchor,
        //     dataEntry:{
        //       ...props.data[dataIndex],
        //       // props.data entry relative to the label extended with:
        //       startAngle,
        //       degrees,
        //       percentage
        //     }
        //   };
        label={(labelRenderProps) => "Html"}
      />
      ;
    </div>
  );
}
