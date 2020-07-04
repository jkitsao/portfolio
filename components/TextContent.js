import React from "react";
// import Link from 'next/link'
import Parallax from "react-rellax";
import { motion } from "framer-motion";
export default function TextContent() {
  return (
    <div className="p-2">
      <div className="text-white text-2xl lg:text-4xl max-w-4xl">
        <motion.div
          initial={{ opacity: 0, top: -500 }}
          animate={{ opacity: 1, top: 0 }}
          transition={{ duration: 6.9 }}
        >
          <Parallax speed={7}>
            <h1 className="font-mono text-green-500">
              Hello stranger, i'm
              <span className="bg-red-700  m-1 text-white">
                {"  "}
                Jackson kitsao
              </span>{" "}
              and i am a Software Engineer from Nairobi,Kenya passionate about
              developing innovative products geared toward simplifying &
              Improving life.
            </h1>
          </Parallax>
        </motion.div>
        <div>
          <Parallax speed={3}>
            <h2 className="text-indigo-400 text-lg lg:text-2xl mt-8 font-sans">
              currently i am working on{" "}
              <a
                href="/"
                className="text-yellow-700 hover:bg-yellow-6 hover:text-white"
              >
                openvue
              </a>{" "}
              a platform that will hopefully help the Real estate and housing
              sector in Africa...||... on my free time away from the keyboard i
              like learning about science stuff black holes,distant
              galaxies,stars and all those geeky stuff..||..i also enjoy playing
              video games, watching movies and tv shows
            </h2>
          </Parallax>
          <hr className="mt-16" />
        </div>
      </div>
    </div>
  );
}
