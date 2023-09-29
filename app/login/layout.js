"use client";
import pic from "../../app/assets/Images/login.png";
import Image from "next/image";

export default function LoginLayout({ children }) {
  return (
    <div className="h-screen w-screen bg-white flex pn:max-sm:flex-col ">
      <div className="w-[50%] h-full flex  py-20 justify-end items-center pn:max-sm:hidden">
        <Image
          alt="hey"
          src={pic}
          className="object-contain w-[90%] h-[90%] "
          priority={true}
        />
      </div>
      <div className="w-[50%] h-[100%] flex justify-center items-center pn:max-sm:w-[100%] pn:max-sm:h-[100%] ">
        <div>{children}</div>
      </div>
    </div>
  );
}
