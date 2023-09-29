"use client ";
import Number from "./login/page";
import Numbe from "./login/layout";

export default function Home() {
  return (
    <div className="flex bg-black ">
      <Numbe />
      <div className="w-[50%] h-[100%] flex justify-center items-center pn:max-sm:w-[100%] pn:max-sm:h-[100%] absolute right-0 ">
        <Number />
      </div>
    </div>
  );
}
