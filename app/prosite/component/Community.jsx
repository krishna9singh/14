"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BG from "../../assets/BG.svg";
import compic from "../../assets/compic.png";

const Community = (props) => {
  const [community, setCommunity] = useState([]);

  useEffect(() => {
    if (props.coms) {
      setCommunity(props.coms);
    }
  }, [props.coms]);
  console.log(community);
  return (
    <>
      <div className="select-none">
        <div className="sm:text-3xl text-2xl font-semibold text-center mt-[6%]">
          Communities
        </div>
        <div className="my-[4%] ">
          <div className="flex pn:max-md:flex-col justify-center md:space-x-7 pn:max-md:space-y-5 pn:max-md:px-[7%] px-6 items-center">
            {community.map((d, i) => {
              return (
                <div className="flex flex-col justify-center items-center max-w-[470px] min-w-[340px] border-2 md:max-lg:w-[400px] space-y-3 border-[#D4D2E3] rounded-3xl py-3">
                  <div>
                    <img src={d?.dps} alt="img" width={100} />
                  </div>
                  <div className="text-2xl text-center font-semibold">
                    {d?.community?.title}
                  </div>
                  <div className="text-sm text-center w-[82%]">
                    {d?.community?.desc}
                  </div>
                  <div className="flex items-center">
                    <div className="flex flex-row justify-start z-0 w-[100%] items-center">
                      {d?.memdps?.length >= 4 ? (
                        <>
                          <img
                            src={d?.memdps[0]}
                            className="h-[35px] w-[35px] rounded-lg z-30 bg-[#f1f1f1] shadow-md"
                            alt="member"
                          />
                          <img
                            src={d?.memdps[1]}
                            alt="member"
                            className="h-[35px] w-[35px] rounded-lg z-20 -ml-[10px] bg-[#f1f1f1] shadow-md"
                          />
                          <img
                            src={d?.memdps[2]}
                            alt="member"
                            className="h-[35px] w-[35px] rounded-lg z-10 -ml-[10px] bg-[#f1f1f1] shadow-md"
                          />
                          <img
                            src={d?.memdps[3]}
                            alt="member"
                            className="h-[35px] w-[35px] rounded-lg z-0 -ml-[10px] bg-[#f1f1f1] shadow-md"
                          />
                        </>
                      ) : (
                        <img
                          src={d?.memdps[0]}
                          className="h-[35px] w-[35px] rounded-lg z-30 bg-[#f1f1f1] shadow-md"
                          alt="member"
                        />
                      )}
                    </div>

                    <div>{d?.community?.memberscount}</div>
                  </div>
                  <button className="text-white rounded-full bg-[#0F172A] w-[85%] p-[10px]">
                    Join
                  </button>
                </div>
              );
            })}
            {/* <div className="flex flex-col justify-center items-center max-w-[470px] min-w-[340px] border-2 md:max-lg:w-[400px] space-y-3 border-[#D4D2E3] rounded-3xl py-3">
              <div>
                <Image src={BG} width={100} />
              </div>
              <div className="text-2xl text-center font-semibold">
                Assemble: <br />
                The Marvel Community
              </div>
              <div className="text-sm text-center w-[82%]">
                Welcome to our vibrant education community! Join us on a journey
                of knowledge and growth ...
              </div>
              <div className="flex items-center">
                <div>
                  <Image src={compic} />
                </div>
                <div>20k members</div>
              </div>
              <button className="text-white rounded-full bg-[#0F172A] w-[85%] p-[10px]">
                Join
              </button>
            </div>
            <div className="flex flex-col justify-center items-center max-w-[470px] min-w-[340px] border-2 md:max-lg:w-[400px] space-y-3 border-[#D4D2E3] rounded-3xl py-3">
              <div>
                <Image src={BG} width={100} />
              </div>
              <div className="text-2xl text-center font-semibold">
                Assemble: <br />
                The Marvel Community
              </div>
              <div className="text-sm text-center w-[82%]">
                Welcome to our vibrant education community! Join us on a journey
                of knowledge and growth ...
              </div>
              <div className="flex items-center">
                <div>
                  <Image src={compic} />
                </div>
                <div>20k members</div>
              </div>
              <button className="text-white rounded-full bg-[#0F172A] w-[85%] p-[10px]">
                Join
              </button>
            </div>
            <div className="flex flex-col justify-center items-center max-w-[470px] min-w-[340px] border-2 md:max-lg:w-[400px] space-y-3 border-[#D4D2E3] rounded-3xl py-3">
              <div>
                <Image src={BG} width={100} />
              </div>
              <div className="text-2xl text-center font-semibold">
                Assemble: <br />
                The Marvel Community
              </div>
              <div className="text-sm text-center w-[82%]">
                Welcome to our vibrant education community! Join us on a journey
                of knowledge and growth ...
              </div>
              <div className="flex items-center">
                <div>
                  <Image src={compic} />
                </div>
                <div>20k members</div>
              </div>
              <button className="text-white rounded-full bg-[#0F172A] w-[85%] p-[10px]">
                Join
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
