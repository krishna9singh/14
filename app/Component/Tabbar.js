"use client";
import Image from "next/image";
import React, { useState } from "react";
import home from "../assets/Images/nrmlhome.png";
import chat from "../assets/Images/messages2.png";
import library from "../assets/Images/solana.png";
import Link from "next/link";

function Tabbar() {
  const Map = [
    {
      name: "Home",
      id: 0,
      img: home,
      path: "/main/post/Newforyou",
    },
    {
      name: "Chats",
      id: 1,
      img: chat,
      path: "/main/chat",
    },
    {
      name: "Library",
      id: 2,
      img: library,
      path: "/main/library/Cart",
    },
  ];
  return (
    <div className="w-screen h-[60px] border-t-2 border-[#f5f5f5] bg-white flex flex-row fixed bottom-0 justify-evenly">
      {Map.map((d, i) => (
        <Link
          key={i}
          href={d.path}
          className="flex  justify-center items-center flex-col "
        >
          <Image src={d.img} alt="icons" className="h-[22px] w-[22px] my-1" />
          <div className="text-[14px] text-[#333]">{d.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default Tabbar;
