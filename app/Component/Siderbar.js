"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Chat from "../assets/Chat";
import Library from "../assets/Lib";
import settings from "../assets/Images/setting.png";
import Sarch from "../assets/Search";
import help from "../assets/Images/help.png";
import Link from "next/link";
import Search from "../Component/Search";
import DarkModeToggle from "./darkMode";
import Home from "../assets/Home";
import Setting from "../assets/Setting";

function Siderbar() {
  const [pix, setPix] = useState();
  const [sear, setSear] = useState(false);
  const [color, setColor] = useState();

  useEffect(() => {
    setColor(
     sessionStorage.getItem("selectedColor")
    
    )
    // Store the selected color in sessionStorage
    sessionStorage.setItem("selectedColor", color.toString());
  }, [color]);

  const handleColor = (i) => {
    setColor(i);
  };
  const fetch = async () => {
    const value = await sessionStorage.getItem("pic");
    setPix(value);
  };
  const Map = [
    {
      name: "Home",
      id: 0,
      img: <Home color={color} />,
      path: "../../../main/post/Newforyou",
      change: 1,
    },
    {
      name: "Chats",
      id: 1,
      img: <Chat color={color} />,
      path: "../../../main/chat",

      change: 2,
    },
    {
      name: "Library",
      id: 2,
      img: <Library color={color} />,
      path: "../../main/library",
      change: 3,
    },
  ];

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="h-screen w-[70px] bg-[#f9f9f9] dark:bg-[#171717] flex flex-col justify-center items-center">
      {/* Image */}
      <div className="h-screen w-[70px] ring-[#f5f5f5] z-10 dark:bg-[#171717] bg-white absolute flex flex-col justify-evenly items-center">
        {pix !== null ? (
          <Link href="../../prosite">
            <img
              className="h-[45px] w-[45px] rounded-2xl bg-yellow-300 "
              src={pix}
              alt="pix"
            />
          </Link>
        ) : (
          <div className="h-[45px] w-[45px] rounded-2xl bg-yellow-300 "></div>
        )}

        <div className="flex flex-col py-20 w-[100%] h-[70%] justify-between items-center pn:max-sm:hidden">
          {Map.map((d, i) => (
            <Link
              key={i}
              onClick={() => {
                setSear(false);
                setColor(d?.change);
              }}
              href={d.path}
              className="flex justify-center items-center flex-col"
            >
              <div className=" my-1">{d?.img}</div>
              <div
                className={`font-medium ${
                  color === d?.change
                    ? "text-[14px] text-[#569FF5]  "
                    : "text-[14px] dark:text-white  text-[#333]"
                }`}
              >
                {d.name}
              </div>
            </Link>
          ))}
          <div
            onClick={() => {
              setSear(!sear);
              handleColor(4);
            }}
            className="flex justify-center items-center flex-col"
          >
            <div className="  my-1">
              <Sarch color={color} setColor={setColor} />
            </div>
            <div
              className={`font-medium ${
                color === 4
                  ? "text-[14px] text-[#569FF5]"
                  : "text-[14px] text-[#333]  dark:text-[#fff]"
              }`}
            >
              Search
            </div>
          </div>
          <Link
            onClick={() => {
              setSear(false);
              handleColor(5);
            }}
            href={"../../main/settings"}
            className="flex  justify-center items-center flex-col"
          >
            <Setting color={color} />
            <div
              className={`font-medium ${
                color === 5
                  ? "text-[14px] text-blue-300 "
                  : "text-[14px] text-[#333]  dark:text-[#fff]"
              }`}
            >
              Settings
            </div>
          </Link>
        </div>
        <div className="">
          <DarkModeToggle />
        </div>
      </div>
      <div
        className={`bg-blue-700 border-r-2 border-[#f9f9f9] dark:border-[#171717] md:min-w-[390px] md:[360px] duration-1000 h-screen  ${
          sear ? "absolute z-0 left-[9vh]" : "absolute z-0 -left-[100vh]"
        }`}
      >
        <Search />
      </div>
    </div>
  );
}

export default Siderbar;
