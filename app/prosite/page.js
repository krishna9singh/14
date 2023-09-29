"use client";
import React, { useCallback, useEffect, useState } from "react";
import FirstPage from "./component/FirstPage";
import SecondPage from "./component/SecondPage";
import Store from "./component/Store";
import Community from "./component/Community";
import LastPage from "./component/LastPage";
import axios from "axios";
import { API } from "@/Essentials";
import { useSearchParams } from "next/navigation";

function page() {
  const [coms, setComs] = useState();
  const [bio, setBio] = useState();
  const [issite, setIssite] = useState(false);
  const [product, setProduct] = useState();
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [myid, setMyid] = useState();
  const [chesk, setCheck] = useState(false);
  const [ifsite, setIfsite] = useState(false);
  const [link, setLink] = useState();
  const [checkchat, setCheckchat] = useState();
  const se = useSearchParams();
  const id = se.get("id");

  // prosite -
  const checkid = useCallback(async () => {
    const i = sessionStorage.getItem("id");

    setMyid(i);
    if (i === id) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, []);

  const fetchsite = useCallback(async () => {
    try {
      const res = await axios.get(`${API}/getprosite/${id}`);
      if (res.data.success) {
        setIfsite(true);

        setLink(res?.data?.url);
      } else {
        setIfsite(false);
      }
    } catch (error) {
      setIfsite(false);
      console.error("Error fetching data:", error);
    }
  }, [id]);

  // Bio api
  const fetchBio = useCallback(async () => {
    try {
      const res = await axios.get(`${API}/getbio/${id}`);
      setBio(res?.data?.data);
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  const fetchComms = useCallback(async () => {
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
  }, [id]);
  
  const fetchProducts = useCallback(async () => {
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
  }, [id]);

  useEffect(() => {
    fetchsite();
    fetchBio();
    fetchComms();
    fetchProducts();
  }, [fetchsite, fetchBio, fetchComms, fetchProducts]);

  //check if conv. exists
  const checkconv = useCallback(async () => {
    try {
      const res = await axios.post(`${API}/checkconv`, {
        first: id,
        second: myid,
      });
      setCheckchat(res?.data?.success);
    } catch (e) {
      console.log(e);
    }
  }, [id, myid]);

  useEffect(() => {
    checkid();

    checkconv();
  }, [checkid, checkconv]);
  return (
    <div className="bg-white text-black">
      <FirstPage bio={bio} />
      <SecondPage bio={bio} />
      <Store product={product} />
      <Community coms={coms} />
      <LastPage />
    </div>
  );
}

export default page;
