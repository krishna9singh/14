"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import yupp from "../assets/Images/yupp.png";
import box from "../assets/Images/Box.png";
import wait from "../assets/Images/wait.png";
import logo from "../assets/Images/logo.png";
import bg from "../assets/Images/bg.png";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { API } from "@/Essentials";

function page() {
  const search = useSearchParams();
  const dat = search.get("data");
  const [data, setData] = useState([]);
  const [click, setClick] = useState(1);
  const [isSite, setIssite] = useState(false);
  const [load, setLoad] = useState(false);
  const [bio, setBio] = useState();
  const [coms, setComs] = useState();
  const [product, setProduct] = useState();
  // const [dat, setDat] = useState();

  //fetch prosite
  const fetchsite = useCallback(async () => {
    const id = search.get("data");
    try {
      const res = await axios.get(`${API}/getprosite/${id}`);

      if (res.data.success) {
        setIssite(true);
      } else {
        setIssite(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  // Bio api
  const fetchBio = useCallback(async () => {
    const id = search.get("data");
    try {
      const res = await axios.get(`${API}/getbio/${id}`);
      setBio(res?.data?.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const fetchComms = useCallback(async () => {
    const id = search.get("data");
    try {
      const res = await axios.get(`${API}/getcommunities/${id}`);
      if (res?.data?.success) {
        const dp = res?.data?.data?.dps;
        if (dp.length > 0) {
          setLoad(true);
        } else {
          setLoad(false);
        }
        const memdp = res?.data?.data?.memdps;
        const url = res?.data?.data?.urls;
        const post = res?.data?.data?.posts;
        const coms = res?.data?.data?.community;
        const like = res?.data?.data?.liked;
        const merged = dp?.map((d, i) => ({
          dps: d,
          memdps: memdp[i],
          urls: url[i],
          liked: like[i],
          community: coms[i],
          posts: post[i],
        }));
        setComs(merged);
        setLoad(true);
      } else {
        setLoad(false);
      }
    } catch (e) {
      console.log(e);
      setLoad(false);
    }
  }, []);
  console.log(bio, "bio", product, coms);

  const fetchProducts = useCallback(async () => {
    const id = search.get("data");
    try {
      const res = await axios.get(`${API}/fetchproduct/${id}`);

      if (res?.data?.success) {
        const url = res?.data?.data?.urls;
        const pro = res?.data?.data?.product;
        const merge = url?.map((u, i) => ({
          u,
          p: pro[i],
        }));

        setProduct(merge);
        setLoad(true);
      } else {
        setLoad(false);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchsite();
    fetchBio();
    fetchComms();
    fetchProducts();
  }, [fetchsite, fetchBio, fetchComms, fetchProducts]);

  return (
    <div className="bg-white h-screen w-[100%] flex flex-col overflow-auto scrollbar-hide">
      {/* Header */}
      <div className="px-2 bg-white mx-3 items-center justify-between w-[100%]   flex flex-row py-2">
        <div className="flex flex-row w-[10%] bg-[#F9F9F9] rounded-lg justify-evenly items-center ">
          <div className="h-[35px] w-[35px]  rounded-2xl bg-yellow-400"></div>
          <div className="flex flex-col">
            {Array.isArray(data) && data.map((d, i) => console.log(d))}
            <div className="font-sans text-black text-[12px] font-bold">
              Riya Singh
            </div>
            <div className="font-sans text-black text-[12px] ">Singh_riya</div>
          </div>
        </div>
        <div className="flex flex-row bg-[#F9F9F9] mx-3 rounded-lg h-[35px] justify-center">
          <div
            onClick={() => {
              setClick(1);
            }}
            className={`${
              click === 1
                ? "bg-black m-1 rounded-2xl w-[100px] font-sans flex font-medium text-[14px] justify-center items-center h-[25px] text-white"
                : "bg-[#F9F9F9] m-1 rounded-2xl flex justify-center items-center w-[100px] font-sans h-[25px] font-medium text-[14px] text-black"
            }`}
          >
            About
          </div>
          <div
            onClick={() => {
              setClick(2);
            }}
            className={`${
              click === 2
                ? "bg-black m-1 rounded-2xl w-[100px] font-sans flex font-medium text-[14px] justify-center items-center h-[25px] text-white"
                : "bg-[#F9F9F9] m-1 rounded-2xl flex justify-center items-center w-[100px] font-sans h-[25px] font-medium text-[14px] text-black"
            }`}
          >
            Store
          </div>
          <div
            onClick={() => {
              setClick(3);
            }}
            className={`${
              click === 3
                ? "bg-black m-1 rounded-2xl w-[100px] font-sans flex font-medium text-[14px] justify-center items-center h-[25px] text-white"
                : "bg-[#F9F9F9] m-1 rounded-2xl flex justify-center items-center w-[100px] font-sans h-[25px] font-medium text-[14px] text-black"
            }`}
          >
            Community
          </div>
        </div>
      </div>
      <div className="flex w-[100%] h-[60%]">
        <div className="flex flex-col  w-[60%] h-[100%] justify-center items-center">
          <div className="flex flex-col w-[90%] h-[60%] justify-center items-center">
            <div className="text-[25px] text-black font-bold my-2">
              "Unleash your passion to personalize your space and show the world
              the extraordinary things you're capable of “
            </div>
            <div className="text-[16px] text-black">
              Prosite : fully customizable layouts for an enhanced
              personalization experience
            </div>
            <div className="bg-[#0075FF] text-white font-sans my-2 font-medium text-[16px] w-[160px] flex justify-center items-center  py-2 rounded-lg">
              Edit now
            </div>
          </div>
        </div>
        <div className="h-[100%] w-[40%]  flex justify-center items-center ">
          <Image src={yupp} className="h-[100%] w-[100%] object-contain" />
        </div>
      </div>

      {/* About section */}
      <div className="flex flex-col w-[100%] h-[60%] justify-center items-center">
        <div className="font-sans text-black text-[21px] font-bold my-2">
          About
        </div>
        <div className="h-[80%] w-[90%] bg-[#F9F9F9] rounded-lg flex flex-col">
          <div className="font-sans text-black text-[16px] font-bold">Bio</div>
          {data.map((d, i) => console.log(d))}

          <div className="font-sans text-black text-[16px] font-bold my-2">
            Joined On
          </div>
          <div className="font-sans text-black text-[16px] ">March 2023</div>
        </div>
      </div>

      {/* Store section */}
      <div className="flex flex-col my-2 w-[100%] h-[70%] justify-evenly items-center">
        <div className="font-sans text-black text-[21px] font-bold">Store</div>
        <div className="flex justify-center items-center h-[60%] w-[60%]">
          <Image src={box} className="h-[90%] w-[90%] object-contain" />
        </div>
        <div className="font-sans text-black text-[26px] font-bold">
          No Products Yet
        </div>
        <div className="font-sans text-black text-[16px] ">
          Once you add Products, they will appear here!
        </div>
        <div className="font-sans w-[240px] my-2 h-[40px] flex justify-center items-center bg-black text-white rounded-lg text-[14px] ">
          Add Product
        </div>
      </div>

      {/* Store section 2 */}
      <div className="flex flex-col my-2 w-[100%] h-[70%] justify-evenly items-center">
        <div className="font-sans text-black text-[21px] font-bold">Store</div>
        <div className="flex justify-center items-center h-[60%] w-[60%]">
          <Image src={wait} className="h-[90%] w-[90%] object-contain" />
        </div>
        <div className="bg font-sans text-black text-[26px] font-medium">
          Create Your Own Community Now
        </div>

        <div className="font-sans w-[240px] my-2 h-[40px] flex justify-center items-center bg-black text-white rounded-lg text-[14px] ">
          Create Community
        </div>
      </div>

      <div className="py-2 items-center justify-between px-2 w-[100%]  flex flex-row">
        <div className="flex flex-row items-center">
          <Image src={logo} className="h-[35px] w-[35px]" />
          <div className="text-black text-[18px] font-bold font-sans">
            Grovyo
          </div>
        </div>
        <div className="text-black text-[12px] font-sans">
          Copyright © 2023 Grovyo Templates | All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default page;
