import React, { useState } from "react";
import Link from "next/link";
export default function Panel() {
  // const [links,setlinks]=useState['home','dashboard','projects','menhrefrs']
  return (
    <div className="bg-darkTheme h-screen w-40 ">
      <ul className="py-56 px-5">
        <li className="py-4 text-xl mb-2 p-3 text-white hover:text-green-300">
          <Link href="/home">
            <a>Home</a>
          </Link>
        </li>

        <li className="py-4 text-xl mb-2 p-3 text-white hover:text-green-300">
          <Link href="/projects">
            <a>projects</a>
          </Link>
        </li>
        <li className="py-4 text-xl mb-2 p-3 text-white hover:text-green-300">
          <Link href="/skills">
            <a>skills</a>
          </Link>
        </li>
        <li className="py-4 text-xl mb-2 p-3 text-white hover:text-green-300">
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li className="py-4 text-xl mb-2 text-white p-3 hover:text-green-300">
          <Link href="/blogs">
            <a>blogs</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
