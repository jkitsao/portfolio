import React from "react";
import { motion } from "framer-motion";
export default function Card({ data }) {
  return (
    <motion.div
      className="bg-white rounded shadow-lg overflow-hidden mx-2 my-1  w-full"
      drag="x"
      dragConstraints={{
        left: 8,
        right: 8,
      }}
    >
      <motion.img
        src={data.image}
        className=" h-64 w-full object-cover object-top"
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1.3 }}
      />
      <div className="p-3">
        <h3 className="text-3xl text-indigo-600">{data.name}</h3>
        <h3 className="text-lg text-green-700 ">{data.desc}</h3>
      </div>
    </motion.div>
  );
}
