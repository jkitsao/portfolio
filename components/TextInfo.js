import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
export default function TextInfo() {
  return (
    <motion.div
      className="max-w-2xl pl-10 py-3"
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
    >
      <div>
        <h1 className="text-5xl text-blue-400"> Hello, i'm Jackson kitsao</h1>
        <div>
          <h3 className="text-black text-2xl font-hairline">
            i'm a software engineer working in web development im farmiliar with
            the latest trends in web developmentand have passion for cloud
            computin,machine learning,internet of thing and much more
          </h3>
        </div>
        <div className="my-10">
          <Link href="/contact">
            <a className="px-5 py-3 bg-teal-500 rounded shadow text-xl text-bold text-white hover:bg-teal-300">
              contact me
            </a>
          </Link>
        </div>
      </div>
      <div></div>
    </motion.div>
  );
}
