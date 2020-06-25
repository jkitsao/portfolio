import React from "react";
import Link from "next/link";
// import github from "../public/svg/github.svg";
export default function Navbar() {
  return (
    <nav className=" bg-black border-b-2 ">
      {/* <div>
        <h3 className="text-yellow-300 text-4xl">Kitsao</h3>
      </div> */}
      <div className="flex justify-center p-3">
        <ul className="flex ">
          <li className=" hover:bg-yellow-700 p-2">
            <Link href="/">
              <a className="text-white text-lg">Home</a>
            </Link>
          </li>
          <li className="ml-32 hover:bg-yellow-700 p-2">
            <Link href="/">
              <a className="text-white text-lg">Project</a>
            </Link>
          </li>
          <li className="ml-32 hover:bg-yellow-700 p-2">
            <Link href="/">
              <a className="text-white text-lg">Skills</a>
            </Link>
          </li>
          <li className="ml-32 hover:bg-yellow-700 p-2">
            <Link href="/">
              <a className="text-white text-lg">Github</a>
            </Link>
          </li>
          <li className="ml-32 hover:bg-yellow-700 p-2">
            <Link href="/">
              <a className="text-white text-lg">twitter</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
