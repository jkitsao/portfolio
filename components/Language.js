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
      desc: "Javascript is a client side language",
    },
    {
      name: "Html",
      image: "https://bit.ly/387dSkH",
      desc: "Html is a markup language",
    },
    {
      name: "Css",
      image: "https://bit.ly/2CyKb06",
      desc: "Css is a styling language",
    },
  ]);
  return (
    <div className="flex overflow-x-auto flex-column flex-wrap sm:flex-no-wrap lg:px-32 mt-16">
      {num.map((data) => (
        <Card data={data} key={data.image} />
      ))}
    </div>
  );
}
