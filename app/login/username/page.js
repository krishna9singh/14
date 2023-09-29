"use client";
import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
function page() {
  const s = useSearchParams();
  const name = s.get("name");
  const gender = s.get("genderr");
  const dob = s.get("dobb");

  const [theme, setTheme] = useState();
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [tick, setTick] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectImage, setSelectImage] = useState(null);
  const no = s.get("no");
  console.log(selectedImage);
  const chnge = () => {
    if (localStorage.getItem("theme") === "0") {
      localStorage.setItem("theme", 1);
      setTheme(1);
    } else {
      localStorage.setItem("theme", 0);
      setTheme(0);
    }
  };
  const handleImageChange = (e) => {
    setSelectImage(URL.createObjectURL(e.target.files[0]));
    setSelectedImage(e.target.files[0]);
  };
  // console.log(name, gender, bio, username, selectImage, selectedImage);
  return (
    <div className="h-[100%] w-[100%] items-center flex flex-col">
      <div className="flex justify-center items-center flex-col ">
        <div className="font-bold pn:max-sm:text-[18px] text-[25px] text-[#313C58] ">
          "Let's build something extraordinary!"
        </div>

        <div className="text-[#96A0AD] text-[15px] pn:max-sm:text-[14px]">
          You can change them at any time in settings
        </div>
      </div>
      {/* profile */}
      <div className="flex flex-col justify-center gap-4 items-center pt-10">
        <div className="h-16 w-16 rounded-3xl sm:shadow-[0_1px_12px_2px_rgba(1,1,1,0.02)] bg-[#f0f0f0]">
          {selectImage && (
            <img
              src={selectImage}
              className="h-16 w-16 rounded-3xl  sm:shadow-[0_1px_12px_2px_rgba(1,1,1,0.02)] bg-[#fff]"
              alt="Selected"
            />
          )}
        </div>
        <div className=" font-semibold ">
          <form>
            <input
              id="inputTag"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <label
              htmlFor="inputTag"
              className=" outline-none  select-none cursor-pointer text-sm font-semibold text-[#0075FF] "
            >
              Change Profile Piture
            </label>
          </form>
        </div>
      </div>
      {/* username */}
      <div className="py-4">
        <div className="text-black pn:max-sm:text-[15px] text-[15px] py-1">
          Username
        </div>
        <input
          value={username}
          className="h-[50px] w-[300px] ring-1 text-black ring-slate-400 rounded-2xl px-4 outline-slate-200"
          placeholder="Enter your name"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      {/* bio */}
      <div className="py-2">
        <div className="text-black py-1">Bio</div>
        <input
          value={bio}
          className="h-[50px] w-[300px] ring-1 text-black ring-slate-400 rounded-2xl px-4 outline-slate-200"
          placeholder="Add some lines.."
          onChange={(e) => {
            setBio(e.target.value);
          }}
        />
      </div>

      {/* T&C */}
      <div className="flex flex-col pn:max-sm:absolute pn:max-sm:bottom-2">
        <div className="flex flex-row px-2 gap-2 pt-20 ">
          <div
            onClick={() => {
              setTick(!tick);
            }}
            className={`h-[17px] w-[17px] rounded-md flex items-center justify-center ${
              tick ? " ring-1 ring-black" : "bg-[#0075ff]"
            }`}
          >
            <TiTick className="h-6 w-6 text-white" />
          </div>
          <div className="text-black text-[11px]">
            I have read and agreed to the{" "}
            <span className="text-[#0075FF]">Terms & Conditions</span> and
            <span className="text-[#0075FF]"> Privacy policy</span>
          </div>
        </div>

        {/* back and next */}
        <div className="py-5 flex flex-row w-[100%] px-5 justify-between">
          <Link
            href={"sign"}
            className="h-[50px] w-[100px] bg-slate-200 pn:max-sm:w-[100px] flex items-center justify-center rounded-2xl text-[#333333]"
          >
            Back
          </Link>
          <Link
            href={{
              pathname: "../interest/interest",
              query: {
                username: username,
                bio: bio,
                img: selectImage,
                mage: selectedImage,
                gender: gender,
                dob: dob,
                name: name,
                number: no,
              },
            }}
            className="h-[50px] w-[100px] bg-black pn:max-sm:w-[100px] flex items-center justify-center rounded-2xl text-white "
          >
            Next
          </Link>
          {/* href={{ pathname: '/destination', query: { prop1: 'value1', prop2: 'value2' } }} as="/destination" */}
        </div>
      </div>
    </div>
  );
}

export default page;
