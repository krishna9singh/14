"use client";
import { API } from "@/Essentials";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import tick from "../../../../assets/Images/bluetick.png";
import moment from "moment/moment";
import more from "../../../../assets/Images/more.png";
import sent from "../../../../assets/Images/sent.png";
import clap from "../../../../assets/Images/clap.png";
import infocircle from "../../../../assets/Images/infocircle.png";
import doc from "../../../../assets/Images/doc.png";
import smile from "../../../../assets/Images/smile.png";
import send from "../../../../assets/Images/send.png";
import axios from "axios";
import { useSearchParams } from "next/navigation";

function page() {
  const search = useSearchParams();
  const comId = search.get("comId");
  const id = search.get("id");
  const [data, setData] = useState([]);
  const [on, setOn] = useState(false);
  const [dp, setDp] = useState();
  const [load, setLoad] = useState(false);
  const [names, setNames] = useState("");
  const [comverified, setComverified] = useState(false);
  const [members, setMembers] = useState("");
  const [canedit, setCanedit] = useState("");
  const [comTitle, setComTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [loadTopic, setLoadTopic] = useState(false);
  const [toast, setToast] = useState("");
  const [timeout, setTimeout] = useState("");
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState();
  const [activetopic, setActiveTopic] = useState(0);
  const [title, setTitle] = useState();
  const [topicjoined, setTopicjoined] = useState();
  const [topicdetail, setTopicdetail] = useState();
  const [joined, setJoined] = useState();
  const [isSubs, setIsSubs] = useState();
  const [welcomemes, setWelcomemes] = useState();
  const [topicprice, setTopicprice] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [like, setLike] = useState(false);
  const [hello, setHello] = useState(false);
  const [newContent, setNewContent] = useState(null);
  const [fullname, setFullname] = useState();
  const [pic, setPic] = useState();
  const [dps, setDps] = useState([]);

  // Simulate new content appearing after a delay
  // setTimeout(() => {
  //   setNewContent("New Content Here");
  // }, 5000); // Adjust the delay as needed

  // scroll
  const contentRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Function to scroll the content down
    const scrollDownContent = () => {
      if (contentRef.current) {
        contentRef.current.scrollTop += 2; // Adjust the scroll speed as needed
      }
    };

    // Start scrolling when new content appears
    if (newContent) {
      setScrolling(true);
      const scrollInterval = setInterval(scrollDownContent, 16); // Adjust the interval as needed

      // Stop scrolling after a certain duration (e.g., 3 seconds)
      setTimeout(() => {
        setScrolling(false);
        clearInterval(scrollInterval);
      }, 3000); // Adjust the duration as needed
    }
  }, [newContent]);

  const fetchData = useCallback(() => {
    if (comId && id) {
      fetch(`${API}/getcommunity/${comId}/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            if (data?.community?.totaltopics > 4) {
              setOn(false);
            } else {
              setOn(true);
            }

            setData(data.community.topics);
            const topic = data.community.topics;
            const names = [];
            for (let i = 0; i < topic.length; i++) {
              names.push(data.community.topics[i].title);
            }

            setComverified(data?.community?.isverified);
            setDp(data.dp);
            setNames(names);
            setMembers(data.community.memberscount);
            setCanedit(data.canedit);
            setComTitle(data.community.title);
            setDesc(data?.community?.desc);
            setLoadTopic(true);
            setDps(data?.dps);
          } else {
            setLoadTopic(false);
            setToast({
              appear: true,
              success: false,
              text: "Something went wrong...",
            });
            setTimeout(() => {
              setToast({ appear: false });
            }, 2000);
          }
          // console.log(data);
        })
        .catch((error) => {
          setLoadTopic(false);
          setToast({
            appear: true,
            success: false,
            text: "Something went wrong...",
          });
          setTimeout(() => {
            setToast({ appear: false });
          }, 2000);
          console.log(error.message);
        });
    }
  }, [comId, id]);

  //fetching posts
  const fetchPosts = useCallback(() => {
    const headers = new Headers();
    headers.append("Cache-Control", "no-cache");
    headers.append("Pragma", "no-cache");
    fetch(`${API}/getallposts/${comId}/${id}`, { headers })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success === true) {
          const content = data.content;
          const post = data.posts;
          const liked = data.liked;
          const dp = data.dps;
          const comment = data.comments;
          const tc = data.tc;
          const mergedDatap = content.map((c, i) => ({
            c,
            posts: post[i],
            liked: liked[i],
            dps: dp[i],
            comments: comment[i],
            tc: tc[i],
            a: i,
          }));
          setPosts(mergedDatap);
          setLoad(true);
        } else {
          setLoad(false);
          setToast({
            appear: true,
            success: false,
            text: "Something went wrong...",
          });
          setTimeout(() => {
            setToast({ appear: false });
          }, 2000);
          console.log("Posts not fetched");
        }
      })
      .catch((error) => {
        setLoad(false);
        setToast({
          appear: true,
          success: false,
          text: "Something went wrong...",
        });
        setTimeout(() => {
          setToast({ appear: false });
        }, 2000);
        console.log(error.message);
      });
  }, [comId, id]);
  console.log(activetopic);

  //fetch topics
  const fetchTopics = useCallback(
    (item) => {
      setCurrent(item?._id);
      setTitle(item?.title);
      setLoad(false);
      const headers = new Headers();
      headers.append("Cache-Control", "no-cache");
      headers.append("Pragma", "no-cache");
      fetch(`${API}/getmessages/${item?._id}/${id}`, { headers })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === true) {
            const dp = data?.dps;
            const mess = data?.reversed;
            setTopicjoined(data?.topicjoined);
            setTopicdetail(data?.topic);
            const merg = dp.map((d, i) => ({ d, reversed: mess[i] }));
            setMessages(merg);
            setLoad(true);
          }
          setJoined(data?.topicjoined);
          setIsSubs(data?.issubs);
          setWelcomemes(data?.topic?.message);
          setTopicprice(data?.topic?.price);
        })
        .catch((error) => {
          setToast({
            appear: true,
            success: false,
            text: "Something went wrong...",
          });
          setTimeout(() => {
            setToast({ appear: false });
          }, 2000);
          console.log(error.message);
        });
    },
    [current, id]
  );

  //sending message
  const sendMessage = () => {
    const rid = Math.floor(Math.random() * 90000000) + 10000000;

    if (!message.trim()) {
      console.log("Type Something");
    } else {
      // socket.removeAllListeners();
      setHello(false);
      const reversed = {
        sender: { _id: id, fullname: fullname },
        text: message,
        topicId: current,
        createdAt: Date.now(),
        mesId: rid,
        typ: "message",
        comId: comId,
        props: pic,
      };
      let d = pic;
      const mess = {
        reversed,
        d,
      };
      // socket.emit("send-message", mess);
      setMessage("");
      setMessages((p) => [...p, mess]);
      try {
        axios.post(`${API}/newmessage/${current}`, {
          topicId: current,
          sender: id,
          text: message,
          typ: "message",
          mesId: rid,
          comId: comId,
          dissapear: false,
        });
      } catch (e) {
        // console.log(e.message);
      }
    }
  };
  console.log(dps, "dps");
  //calling functions
  useEffect(() => {
    const name = sessionStorage.getItem("fullname");
    const pc = sessionStorage.getItem("pic");

    setPic(pc);
    setFullname(name);
    if (!mounted) {
      setMounted(true);
      fetchData();
      fetchPosts();
    }
  }, [mounted, fetchData, fetchPosts]);

  return (
    <>
      <div className="w-[100%] h-screen  flex select-none flex-col bg-[#f9f9f9] items-center">
        {/* header */}
        <div className="h-[70px] w-[100%] bg-white flex justify-between">
          <div className="flex w-[300px] pl-2">
            <div className="w-[50px] h-[100%] flex justify-center object-scale-down items-center ">
              <img
                alt="dp"
                src={dp}
                className="h-[35px] w-[35px] object-fill rounded-xl ring-1 ring-white shadow-md "
              />
            </div>
            <div className="flex flex-col w-[79%] justify-center px-2 items-start">
              <div className="flex flex-row items-center">
                <div className="text-black text-[14px] font-bold font-sans">
                  {comTitle}
                </div>
                {posts?.isverified ? (
                  <img
                    alt="tick"
                    src={tick}
                    className="h-[15px] w-[15px] mx-1"
                  />
                ) : null}
              </div>
              <div className="flex flex-row  justify-start z-0 w-[100%] items-center">
                {/* <>
                          <img
                            src={dps[0]}
                            className="h-[25px] w-[25px] rounded-lg z-30 bg-[#f1f1f1] shadow-md"
                            alt="member"
                          />
                          <img
                            src={dps[1]}
                            alt="member"
                            className="h-[25px] w-[25px] rounded-lg z-20 -ml-[10px] bg-[#f1f1f1] shadow-md"
                          />
                          <img
                            src={dps[2]}
                            alt="member"
                            className="h-[25px] w-[25px] rounded-lg z-10 -ml-[10px] bg-[#f1f1f1] shadow-md"
                          />
                          <img
                            src={dps[3]}
                            alt="member"
                            className="h-[25px] w-[25px] rounded-lg z-0 -ml-[10px] bg-[#f1f1f1] shadow-md"
                          />
                        </> */}
                <img
                  src={dps}
                  className="h-[25px] w-[25px] rounded-lg z-30 bg-[#f1f1f1] shadow-md"
                  alt="member"
                />

                {/* <div className="text-[12px] font-medium px-2 text-[#3e3e3e]">
                        {dps} members
                      </div> */}
              </div>{" "}
              <div className="flex flex-row  justify-start z-0 w-[100%] items-center">
                {dps?.length >= 4 ? (
                  <>
                    <img
                      src={dps[0]}
                      className="h-[25px] w-[25px] rounded-lg z-30 bg-[#f1f1f1] shadow-md"
                      alt="member"
                    />
                    <img
                      src={dps[1]}
                      alt="member"
                      className="h-[25px] w-[25px] rounded-lg z-20 -ml-[10px] bg-[#f1f1f1] shadow-md"
                    />
                    <img
                      src={dps[2]}
                      alt="member"
                      className="h-[25px] w-[25px] rounded-lg z-10 -ml-[10px] bg-[#f1f1f1] shadow-md"
                    />
                    <img
                      src={dps[3]}
                      alt="member"
                      className="h-[25px] w-[25px] rounded-lg z-0 -ml-[10px] bg-[#f1f1f1] shadow-md"
                    />
                  </>
                ) : (
                  <img
                    src={dps}
                    className="h-[25px] w-[25px] rounded-lg z-30 bg-[#f1f1f1] shadow-md"
                    alt="member"
                  />
                )}

                <div className="text-[12px] font-medium px-2 text-[#3e3e3e]">
                  {dps?.length} members
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50px] flex justify-center items-center h-[100%] ">
            <Image alt="more" src={more} className="h-[20px] w-[20px]" />
          </div>
        </div>

        {/* Main */}
        <div className="h-[85%] w-[100%] flex flex-col justify-center  ">
          {/* All  */}
          <div className="h-[50px] w-[100%] bg-white flex flex-row shadow-sm justify-center items-center ">
            <div className="flex flex-row w-[100%] px-4 justify-center items-center ">
              {data?.map((d, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setLoad(false);
                    setActiveTopic(i);
                    fetchTopics(d);
                    setCurrent(d?._id);
                  }}
                  className={`mx-2 ${
                    activetopic === i
                      ? "bg-blue-600 rounded-3xl px-4 py-1 text-[14px] text-white cursor-pointer font-medium font-sans"
                      : "text-[14px] text-[#5E5E5E] font-medium font-sans bg-[#f7f7f7] rounded-3xl px-4 py-1"
                  }`}
                >
                  {d.title}
                </div>
              ))}
            </div>
          </div>
          {/*  Post section and chatting*/}
          <div
            ref={contentRef}
            style={{ scrollBehavior: scrolling ? "smooth" : "auto" }}
            className="h-[100vh] overflow-y-scroll  scrollbar-hide bg-bgg bg-contain"
          >
            {activetopic === 0 ? (
              <>
                {/* Post */}
                {posts.map((d, i) => {
                  return (
                    <div key={i} className=" w-[360px] flex flex-row p-2">
                      {/* dp */}
                      <img
                        alt="dp"
                        src={d?.dps}
                        className="h-[35px] w-[35px] rounded-xl bg-white ring-1 ring-white shadow-md "
                      />

                      {/* whole post */}
                      <div className="flex flex-col  bg-white shadow-md w-[100%] mt-4 ml-2 rounded-r-xl rounded-bl-xl p-2 ">
                        {/* sender and time */}
                        <div className="h-[30px]   w-[100%] flex flex-row items-center ">
                          <div className="flex flex-row w-[100%] items-center h-[100%] ">
                            {/* Community name */}
                            <div className="flex flex-col w-[100%] justify-start px-2 items-start">
                              <div className="flex flex-row items-center ">
                                <div className="text-[12px] text-black font-sans">
                                  by {d?.posts?.sender?.fullname}
                                </div>
                                <div className="h-[2px] w-[2px] bg-black flex rounded-full mx-2"></div>
                                {/* //Time */}
                                <div className="text-[12px] text-black font-sans">
                                  {moment(d?.posts?.createdAt).fromNow()}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Post img */}
                        {d?.posts.contenttype[0] === "video/mp4" ? (
                          <video
                            src={d?.c}
                            className="h-[250px] object-scale-down bg-gray-600 flex justify-center items-center rounded-md "
                            controls
                          />
                        ) : (
                          <img
                            alt="post"
                            src={d?.c}
                            className="h-[250px] object-scale-down flex justify-center  items-center rounded-md "
                          />
                        )}

                        {/* Desc */}
                        <div className="w-[100%] h-[30px] flex items-center overflow-hidden text-clip text-black text-[16px]  py-2 ">
                          {d?.posts?.desc}
                        </div>

                        {/* Comment */}
                        <div className="flex flex-row  items-center justify-between">
                          <div className="w-[70%]">
                            <input
                              className="h-[35px] w-[140px] bg-[#F5F5F5] rounded-2xl  px-2 flex items-center text-black outline-none text-[14px] "
                              placeholder="Add a comment..."
                            />
                          </div>
                          <div className="flex space-x-2">
                            <div
                              onClick={() => {
                                setLike(true);
                              }}
                              className="flex flex-row bg-[#F5F5F5] rounded-2xl px-2 py-1 items-center"
                            >
                              <Image
                                alt="clap"
                                src={clap}
                                className="h-[25px] w-[25px]"
                                priority={true}
                              />
                              <div className="text-[12px] text-[#3A3A3A] mx-1">
                                {d?.posts?.likes}
                              </div>
                            </div>
                            <Image
                              alt="send"
                              src={sent}
                              className="h-[33px] w-[33px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {/* Chat */}
                {messages.map((d, i) => {
                  return (
                    <div key={i} className=" px-5 py-2 flex flex-row">
                      {d?.reversed?.sender?._id === id ? (
                        <>
                          <div className="flex flex-col w-[100%] h-[100%]  space-y-1 px-2 py-2">
                            <div className="flex items-end justify-end ">
                              <div className="text-ellipsis overflow-hidden text-black rounded-r-lg rounded-bl-lg">
                                {d?.reversed?.sender?.fullname}
                              </div>
                            </div>
                            <div className="flex items-end justify-end  ">
                              <div className=" bg-blue-500 p-2 max-w-[350px] text-ellipsis overflow text-white rounded-b-lg rounded-tl-lg">
                                {d?.reversed?.text}
                              </div>
                            </div>
                          </div>
                          <div className=" h-[100%] w-[45px] ">
                            <img
                              alt="dp"
                              src={d?.d}
                              className="h-[45px] w-[45px] rounded-2xl bg-yellow-300"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className=" h-[100%] w-[45px] ">
                            <img
                              alt="dp"
                              src={d?.d}
                              className="h-[45px] w-[45px] rounded-2xl bg-yellow-300"
                            />
                          </div>
                          <div className="flex flex-col w-[100%] h-[100%]  space-y-1 px-2 py-2">
                            <div className="flex items-end ">
                              <div className="  text-ellipsis overflow-hidden  text-black rounded-r-lg rounded-bl-lg">
                                {d?.reversed?.sender?.fullname}
                              </div>
                            </div>
                            <div className="flex items-end ">
                              <div className=" bg-[#fff] p-2  max-w-[350px] text-ellipsis overflow-hidden  text-black rounded-r-lg rounded-bl-lg">
                                {d?.reversed?.text}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        {activetopic === 0 ? (
          <div className="h-[10%] w-[100%]  flex items-end">
            <div className="h-[70%] w-[100%] bg-[#F1F1F1] rounded-t-3xl shadow-2xl flex flex-row justify-center items-center">
              <Image
                alt="info"
                src={infocircle}
                className="h-[30px] w-[30px] mx-2"
              />
              <div className="text-[10px] text-black">
                Only <span className="text-blue-600">Members</span> admins can
                send the messages
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[10%] rounded-t-2xl bg-white w-[100%] white flex flex-row">
            <div className="w-[8%] flex justify-center items-center">
              <Image alt="doc" src={doc} className="h-[30px] w-[30px]" />
            </div>
            <div className="w-[92%] h-[100%] flex items-center">
              <div className="w-[95%] h-[70%] flex items-center bg-[#f9f9f9] rounded-2xl flex-row">
                <input
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      sendMessage();
                    }
                  }}
                  onChange={(text) => {
                    setMessage(text.target.value);
                  }}
                  value={message}
                  className="h-[50px] w-[100%] outline-none px-2 rounded-2xl bg-[#f9f9f9] text-black"
                  placeholder="Type a message"
                />
                <Image alt="smile" src={smile} className="h-[30px] w-[30px] " />
                <Image
                  src={send}
                  alt="send"
                  onClick={sendMessage}
                  className="h-[30px] w-[30px] mx-2"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default page;
