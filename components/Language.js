// import React, { useState } from "react";
import Card from "./Card";
//import images
// import cssImage from "/css.jpg"; //css image
// import jsImage from "/javascript.jpg"; //js image
// import htmlImage from "/html.jpg"; //html image
export default function Language() {
  const [num, setnum] = React.useState([
    {
      name: "Javascript",
      image: "https://bit.ly/3i5HGmy",
      desc:
        "JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    },
    {
      name: "Html",
      image: "https://bit.ly/387dSkH",
      desc:
        "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser",
    },
    {
      name: "Css",
      image: "https://bit.ly/2CyKb06",
      desc:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document ",
    },
  ]);
  return (
    <div className="flex overflow-x-scroll flex-wrap sm:flex-no-wrap lg:px-32 mt-16 w-full lg:w-3/4">
      {num.map((data) => (
        <Card data={data} key={data.image} />
      ))}
    </div>
  );
}
