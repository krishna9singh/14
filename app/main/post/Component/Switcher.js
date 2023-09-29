"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Switcher() {
  const [click, setClick] = useState();

  useEffect(() => {
    setClick(JSON.parse(sessionStorage.getItem("click")) || 1);

    const body = document.querySelector("body");
    if (click === 2) {
      body.classList.add(2);
    } else {
      body.classList.remove(2);
    }

    //   // Save the darkMode value to sessionStorage when it changes
    sessionStorage.setItem("click", JSON.stringify(click));
  }, [click]);

  const toggle = () => {
    if (click === 1) {
      setClick(2);
    } else {
      setClick(1);
    }
  };
  return (
    <div>
      <div className="h-[50px] dark:bg-black bg-white shadow-sm z-10 pn:max-md:h-[40px] pn:max-md:items-center pn:max-sm:w-[100%] sm:max-md:px-2 sm:max-md:rounded-r-3xl md:w-[388px] pl-2 pn:max-md:justify-start absolute md:fixed flex flex-row items-end">
        {/* // New for you */}
        <Link
          href={"/main/post/Newforyou"}
          onClick={() => {
            setClick(1);
          }}
          className={`${
            click === 1
              ? "text-[16px] text-[#171717] dark:text-white font-medium mx-2 hover:text-black border-b-2 border-blue-500"
              : "text-[14px] text-[#727272] dark:text-white font-medium mx-2 hover:text-black border-b-0 "
          }`}
        >
          New for you
        </Link>
        {/* //Community */}
        <Link
          href={"/main/post/Community"}
          onClick={() => {
            setClick(2);
          }}
          className={`${
            click === 2
              ? "text-[16px] dark:text-white text-[#171717] font-medium mx-2 hover:text-black border-b-2 border-blue-500"
              : "text-[14px] dark:text-white text-[#727272] font-medium mx-2 hover:text-black border-b-0"
          }`}
        >
          Community
        </Link>
      </div>
    </div>
  );
}

export default Switcher;
