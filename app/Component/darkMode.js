import Image from "next/image";
import { useEffect, useState } from "react";
import Sun from "../assets/Images/sun.png";
import Moon from "../assets/Images/moon.png";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState();

  useEffect(() => {
    setDarkMode(JSON.parse(sessionStorage.getItem("dark")) || false);
    const body = document.querySelector("body");
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }

    // Save the darkMode value to sessionStorage when it changes
    sessionStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      onClick={toggleDarkMode}
      className={`duration-200 select-none ${
        darkMode
          ? "h-8 w-12 rounded-full flex items-center pl-[40%] bg-white "
          : "h-8 w-12 rounded-full flex items-center bg-[#3e3e3e]"
      }`}
    >
      <div
        className={`duration-200 m-[1px] ${
          darkMode
            ? "h-7 w-7 rounded-full flex justify-center items-center bg-[#3e3e3e]"
            : "h-7 w-7 rounded-full flex justify-center items-center bg-[#fff]"
        }`}
      >
        {darkMode ? (
          <Image src={Moon} alt="sun" className=" h-5 w-5 rounded-full" />
        ) : (
          <Image src={Sun} alt="sun" className=" h-5 w-5 rounded-full" />
        )}
      </div>
    </div>
  );
};

export default DarkModeToggle;
