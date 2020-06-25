import React from "react";
// import Link from 'next/link'
import { motion } from "framer-motion";
export default function TextContent() {
  return (
    <div className="p-2">
      <div className="text-white text-2xl lg:text-4xl max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5.9 }}
        >
          <h1 className="font-mono text-green-500">
            Hello stranger, im
            <span className="bg-red-700  m-1 text-white">
              {"  "}
              Jackson kitsao
            </span>{" "}
            and i am a Software Engineer from Nairobi,Kenya passionate about
            developing innovative products geared toward simplifying & Improving
            life.
          </h1>
        </motion.div>
        <div>
          <motion.h2
            className="text-indigo-400 text-lg lg:text-2xl mt-8 font-sans"
            initial={{ x: -1700 }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 1.2 }}
          >
            currently i am working on{" "}
            <a
              href="/"
              className="text-yellow-700 hover:bg-yellow-6 hover:text-white"
            >
              openvue
            </a>{" "}
            a platform that will hopefully help the Real estate and housing
            sector in Africa. on my free time away from the keyboard i like
            learning about science stuff black holes,distant galaxies,stars and
            all those geeky stuff playing video games, watching movies and tv
            shows
          </motion.h2>
          <hr className="mt-16" />
        </div>
      </div>
    </div>
  );
}
