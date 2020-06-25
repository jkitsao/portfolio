import React from "react";
import Link from "next/link";
// import github from "../public/svg/github.svg";
export default function Navbar() {
  return (
    <nav className=" bg-black border-b-2 ">
      {/* <div>
        <h3 className="text-yellow-300 text-4xl">Kitsao</h3>
      </div> */}
      <div className="flex p-3 overflow-x-scroll lg:overflow-hidden lg:justify-center">
        <ul className="flex">
          <li className=" hover:bg-yellow-700 hover:text-white p-2  ml-4">
            <Link href="/">
              <a className="text-red-400 active:bg-yellow-500 text-lg">Home</a>
            </Link>
          </li>
          <li className="lg:ml-32 hover:bg-yellow-700 ml-4 p-2 ">
            <Link href="/">
              <a className="text-red-400 active:bg-yellow-500 text-lg">
                Project
              </a>
            </Link>
          </li>
          <li className="lg:ml-32 hover:bg-yellow-700 p-2 ml-4 ">
            <Link href="/">
              <a className="text-red-400 active:bg-yellow-500 text-lg">
                Skills
              </a>
            </Link>
          </li>
          <li className="lg:ml-32 hover:bg-yellow-700 p-2 ml-4 ">
            <Link href="/">
              <a className="text-red-400 active:bg-yellow-500 text-lg">
                Github
              </a>
            </Link>
          </li>
          <li className="lg:ml-32 hover:bg-yellow-700 p-2 ml-4 ">
            <Link href="/">
              <a className="text-red-400 active:bg-yellow-500 text-lg">
                twitter
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
