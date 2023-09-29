"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import iphone from "../../assets/iphone.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const FirstPage = (bio) => {
  const [menu, setMenu] = useState(false);
  const [pic, setPic] = useState();

  useEffect(() => {
    setPic(sessionStorage.getItem("pic"));
  }, []);
  return (
    <>
      <div className="bg-[#000000] select-none">
        <div className="flex  justify-between items-center py-2 px-2 sm:px-4 md:px-10">
          <div className="flex  justify-center items-center space-x-2">
            <div>
              <img
                alt="dp"
                src={pic}
                className="pn:max-sm:w-16 h-[50px] object-contain"
              />
            </div>
            <div className="flex flex-col text-white justify-center pn:max-sm:hidden items-center">
              <div className="text-xl font-semibold">{bio?.bio?.fullname}</div>
              <div className="text-lg font-semibold">{bio?.bio?.username}</div>
            </div>
          </div>

          <div className="md:hidden text-white z-10">
            {menu ? (
              <AiOutlineClose
                onClick={() => setMenu(!menu)}
                className="text-2xl text-black"
              />
            ) : (
              <AiOutlineMenu
                onClick={() => setMenu(!menu)}
                className="text-2xl"
              />
            )}
          </div>

          <div className="hidden md:block text-white">
            <ul className="flex justify-center items-center space-x-5 font-medium">
              <li>About</li>
              <li>Store</li>
              <li>Community</li>
            </ul>
          </div>
        </div>

        <ul
          className={`bg-white absolute w-[100%] text-center text-black md:hidden py-2 text-xl font-bold duration-500 ${
            menu ? "top-0" : "top-[-100%]"
          }`}
        >
          <li className="py-6">About</li>
          <li className="py-6">Store</li>
          <li className="py-6">Community</li>
        </ul>

        {/* <div className={` duration-700 absolute w-[90%] hidden h-full ${menu ? "left-0" : "left-[-100%]" }`}>
            <ul className="flex flex-col justify-center items-center bg-white font-medium">
              <li className="py-6">About</li>
              <li className="py-6">Store</li>
              <li className="py-6">Community</li>
            </ul>
          </div> */}

        <div className=" flex pn:max-md:flex-col-reverse text-white justify-around  items-center pn:max-md:pb-[5%]">
          <div className="flex flex-col justify-center pn:max-md:items-center space-y-3 sm:space-y-5 md:max-lg:mx-12">
            <div className="font-semibold pt-3 pn:max-sm:text-center">
              SUMMER 2023
            </div>
            <div className="md:text-[40px] text-2xl sm:text-4xl font-semibold">
              NEW COLLECTION
            </div>
            <div className="w-[80%]">
              We know how larg objects will act, but things on a small scale.
            </div>
            <button className="bg-white rounded-2xl text-black md:bg-[#ffffff] md:text-xl font-semibold p-2 w-[45%]">
              SHOP NOW
            </button>
          </div>
          <div className="">
            <Image src={iphone} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
