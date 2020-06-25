import React from "react";
import { motion } from "framer-motion";
export default function Card({ data }) {
  return (
    <div className="bg-white rounded shadow-lg overflow-hidden mx-2 my-1  w-full">
      <img src={data.image} className=" h-64 w-full object-cover object-top" />
      <div className="p-3">
        <h3 className="text-3xl text-indigo-600">{data.name}</h3>
        <h3 className="text-lg text-green-700 ">{data.desc}</h3>
      </div>
    </div>
  );
}
