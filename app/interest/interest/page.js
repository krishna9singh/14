"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import one from "../../../app/assets/Images/1.png";
import Anime from "../../../app/assets/Images/Anime.png";
import art from "../../../app/assets/Images/Art.png";
import edu from "../../../app/assets/Images/edu.png";
import bs from "../../../app/assets/Images/Bus.png";
import fashion from "../../../app/assets/Images/Fashion.png";
import gym from "../../../app/assets/Images/Gym.png";
import photo from "../../../app/assets/Images/Photo.png";
import pop from "../../../app/assets/Images/Pop.png";
import food from "../../../app/assets/Images/Food.png";
import sc from "../../../app/assets/Images/Sc.png";
import music from "../../../app/assets/Images/Music.png";
import Sports from "../../../app/assets/Images/Sports.png";
import tv from "../../../app/assets/Images/TV.png";
import maps from "../../../app/assets/Images/Maps.png";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { API } from "@/Essentials";
import { Router } from "next/router";

function page() {
  const [interest, setInterest] = useState([]);
  const [toast, setToast] = useState(false);
  const [imag, setImag] = useState();
  const search = useSearchParams();
  const name = search.get("name");
  const gender = search.get("gender");
  const dob = search.get("dob");
  const router = useRouter();
  // const blob = new Blob([search.get("img")], { type: "image/png" });
  const fileName = search.get("mage");
  // const file = new File([blob], fileName, { type: "image/png" });

  const number = search.get("number");
  const username = search.get("username");
  const bio = search.get("bio");
  const email = search.get("email");
  console.log(name, gender, bio, username, number, email, imag);

  const [load, setLoad] = useState(false);
  const handleNext = async () => {
    if (interest.length > 2) {
      setLoad(true);
      console.log("first");
      const form = new FormData();
      if (fileName) {
        form.append("image", {
          uri: fileName,
          type: "image/jpg",
          name: "dps.jpg",
        });
      } else {
        form.append("image", "male-1.png");
      }
      router.push("/main/post/Newforyou");
      if (email) {
        form.append("email", email);
        form.append("pass", pass);
      } else {
        form.append("number", number);
      }
      form.append("fullname", name);
      form.append("gender", gender);
      form.append("username", username);
      form.append("bio", bio);
      form.append("interest", interest);
      form.append("dob", dob);

      try {
        if (email) {
          const res = await axios.post(
            `${API}/v1/createnewaccountemail`,
            form,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          if (res?.data?.success) {
            await sessionStorage.setItem("id", res.data.user._id);
            await sessionStorage.setItem("fullname", res.data.user.fullname);
            await sessionStorage.setItem("username", res.data.user.username);
            await sessionStorage.setItem("pic", res.data.pic);
          } else {
          }
        } else {
          const res = await axios.post(`${API}/v1/createnewaccountweb`, form, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log(res.data);
          if (res?.data?.success) {
            await sessionStorage.setItem("id", res.data.user._id);
            await sessionStorage.setItem("fullname", res.data.user.fullname);
            await sessionStorage.setItem("username", res.data.user.username);
            await sessionStorage.setItem("pic", res.data.pic);
          } else {
            toast.error("Something went wrong...");
          }
        }
      } catch (e) {
        console.log(e, "error");
      }
    } else {
      setToast({
        appear: true,
        text: "Select a Minimum of 3 Interests",
        success: false,
      });
      setTimeout(() => {
        setToast({ appear: false });
      }, 2000);
    }
    setLoad(false);
  };
  // useEffect(() => {
  //   setImag(file);
  // }, []);
  const data = [
    { item: "Gaming", img: one },
    { item: "Education", img: edu },
    { item: "Travel", img: maps },
    { item: "Food & Cooking", img: food },
    { item: "Movie", img: tv },
    { item: "Science & Technology", img: sc },
    { item: "Music & Events", img: music },
    { item: "Sports", img: Sports },
    { item: "Photography", img: photo },
    { item: "Entrepreneurship & Business", img: bs },
    { item: "Arts & Crafts", img: art },
    { item: "Anime", img: Anime },
    { item: "Pop Culture", img: pop },
    { item: "Fashion & Beauty", img: fashion },
    { item: "Health & Fitness", img: gym },
  ];
  return (
    <div className="flex flex-col justify-center items-center  py-2 px-2 h-screen pn:max-sm:h-[100%] w-screen bg-white">
      <Toaster toastOptions={{ duration: 4000 }} />
      <div className="font-bold  pn:max-sm:text-[18px] text-[25px] text-[#313C58] ">
        Choose what You Like!
      </div>
      <div className="text-[#96A0AD] text-[15px] pn:max-sm:text-[14px] px-5">
        You can change them at any time in settings
      </div>

      {/* All interests */}
      <div className="w-[50%] pn:max-sm:w-[100%] h-[70%] flex flex-wrap justify-center items-center">
        {data.map((d, i) => (
          <div
            disabled={load}
            onClick={() => {
              if (interest?.includes(d?.item)) {
                const updatedInterests = interest?.filter(
                  (item) => item !== d?.item
                );
                setInterest(updatedInterests);
              } else {
                const updatedInterests = [...interest, d?.item];
                setInterest(updatedInterests);
              }
            }}
            key={i}
            className={`${
              interest?.includes(d?.item)
                ? "flex flex-row px-2 h-[50px] m-3 justify-center items-center rounded-full bg-blue-200 gap:3 "
                : "flex flex-row px-2 h-[50px] m-3 justify-center items-center rounded-full bg-slate-200 gap:3 "
            }`}
          >
            <div className=" text-[#717171] text-[12px] mx-2">{d.item}</div>
            <Image alt="img" src={d.img} className="h-[35px] w-[35px] mx-2" />
          </div>
        ))}
      </div>

      <div className="py-5 flex flex-row w-[100%] px-5 justify-between">
        <Link
          href={"sign"}
          className="h-[40px] w-[150px] ring-1 ring-black  bg-white pn:max-sm:w-[100px] flex items-center justify-center rounded-2xl text-[#333333]"
        >
          Back
        </Link>
        <div
          onClick={handleNext}
          className="h-[40px] w-[150px] bg-black pn:max-sm:w-[100px] flex items-center justify-center rounded-2xl text-white "
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default page;
