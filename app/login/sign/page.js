"use client";
import React, { useEffect, useState } from "react";
import pic from "../../assets/Images/login.png";
import OtpInput from "react-otp-input";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
function page() {
  const search = useSearchParams();
  const [otp, setOtp] = useState("");
  const [gender, setGender] = useState(0);
  const [theme, setTheme] = useState();
  const [namee, setNamee] = useState("");
  const [dobb, setDobb] = useState("");
  const [genderr, setGenderr] = useState("");
  const number = search.get("no");

  return (
    <div className=" items-center flex flex-col justify-between text-black">
      <div className="font-bold  pn:max-sm:text-[18px] text-[25px] text-[#313C58] ">
        "Welcome , we've saved you a seat."
      </div>
      <div className="flex flex-col justify-center items-center  py-2">
        <div className="text-[#96A0AD] text-[15px] pn:max-sm:text-[14px] px-5">
          You can change them at any time in settings
        </div>
        <div className="py-4">
          <div className="text-black pn:max-sm:text-[15px] text-[15px] py-2">
            Name
          </div>
          <input
            value={namee}
            onChange={(i) => {
              setNamee(i.target.value);
            }}
            className="h-[50px] w-[300px] ring-1 ring-slate-400 rounded-2xl px-4 outline-slate-400 "
            placeholder="Enter your name"
          />
        </div>
        <div className="py-2">
          <div className="text-black py-2">DOB</div>
          <input
            value={dobb}
            onChange={(i) => {
              setDobb(i.target.value);
            }}
            className="h-[50px] w-[300px] ring-1  ring-slate-400 rounded-2xl px-4 outline-slate-400 "
            placeholder="choose"
            type="date"
          />
        </div>
      </div>
      <div className="flex flex-col py-2 w-[300px] ">
        <div className="text-black py-2">Gender</div>
        <div className="flex flex-row justify-between gap-3">
          <div
            onClick={() => {
              setGender(1);
              setGenderr("Male");
            }}
            className={`h-[50px] px-3 rounded-2xl flex flex-row justify-between items-center ${
              gender === 1 ? "bg-slate-100" : "ring-1 ring-slate-400 "
            }`}
          >
            <div className="h-[17px] w-[17px] m-1 rounded-full ring-1 ring-blue-400 flex justify-center items-center">
              <div
                className={`h-[14px] w-[14px]  rounded-full ${
                  gender === 1 ? "bg-blue-400" : "hidden"
                }`}
              ></div>
            </div>
            <div className="text-slate-500 text-[14px]">Male</div>
          </div>
          <div
            onClick={() => {
              setGender(2);
              setGenderr("Female");
            }}
            className={`h-[50px] px-3 rounded-2xl flex flex-row justify-between items-center ${
              gender === 2 ? "bg-slate-100" : "ring-1 ring-slate-400 "
            }`}
          >
            <div className="h-[17px] w-[17px] rounded-full ring-1 m-1 ring-blue-400 flex justify-center items-center">
              <div
                className={`h-[14px] w-[14px]  rounded-full ${
                  gender === 2 ? "bg-blue-400" : "hidden"
                }`}
              ></div>
            </div>
            <div className="text-slate-500 text-[14px]">Female</div>
          </div>
          <div
            onClick={() => {
              setGender(3);
              setGenderr("Others");
            }}
            className={`h-[50px] px-3 rounded-2xl flex flex-row justify-between items-center ${
              gender === 3 ? "bg-slate-100" : "ring-1 ring-slate-400 "
            }`}
          >
            <div className="h-[17px] w-[17px] m-1 rounded-full ring-1 ring-blue-400 flex justify-center items-center">
              <div
                className={`h-[14px] w-[14px]  rounded-full ${
                  gender === 3 ? "bg-blue-400" : "hidden"
                }`}
              ></div>
            </div>
            <div className="text-slate-500 text-[14px]">Others</div>
          </div>
        </div>
      </div>
      <div className="py-5 ">
        <Link
          href={{
            pathname: "username",
            query: { genderr: genderr, name: namee, dobb: dobb, no: number },
          }}
          passHref
        >
          Continue
        </Link>
        {/* href={{ pathname: '/destination', query: { prop1: 'value1', prop2: 'value2' } }} as="/destination" */}
      </div>
    </div>
  );
}

export default page;
