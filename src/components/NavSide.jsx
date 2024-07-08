import React from "react";
import { IoBook, IoBookmarkOutline } from "react-icons/io5";

export default function NavSide() {
  return (
    <div className="w-[5rem]  relative hidden md:block">
      <ul className="flex flex-col items-center mt-[100px] gap-10 ">
        <li className="bg-[#D8DFE5] p-2 rounded-lg cursor-pointer">
          <span className="text-[#00957D] text-2xl mb-5">
            <IoBook />
          </span>
        </li>
        <li>
          <span className="text-[#ACBCC9] text-2xl mb-5">
            <IoBookmarkOutline />
          </span>
        </li>
      </ul>
    </div>
  );
}
