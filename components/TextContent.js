import React from "react";
// import Link from 'next/link'
import { motion } from "framer-motion";
export default function TextContent() {
  return (
    <div>
      <div className="text-white text-4xl max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h1 className="font-mono text-green-500">
            Hello stranger, im Jackson kitsao and i am a Software Engineer from
            Nairobi,Kenya passionate about developing innovative products geared
            toward simplifying & Improving life.
          </h1>
        </motion.div>
        <div>
          <h2 className="text-indigo-400 text-2xl mt-8">
            currently i am working on{" "}
            <a
              href="/"
              className="text-yellow-700 hover:bg-yellow-6 hover:text-white"
            >
              openvue
            </a>{" "}
            a platform that will hopefully helps the Real estate and housing
            sector in Africa. on my free time away from the keyboard i like
            playing video game, watching movies and shows
          </h2>
          <hr className="mt-16" />
        </div>
      </div>
    </div>
  );
}
