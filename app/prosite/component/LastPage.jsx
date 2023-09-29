import React from "react";
import Image from "next/image";
import Grovyo from "../../assets/Grovyo.svg";

const LastPage = () => {
  return (
    <>
      <div className="mt-[5%] my-3 sm:px-4 select-none">
        <div className="flex pn:max-sm:flex-col text-center space-y-3 justify-between items-center px-[2%]">
          <div className="flex justify-center items-center space-x-1">
            <div>
              <Image src={Grovyo} width={70} />
            </div>
            <div className="text-2xl font-semibold">Grovyo</div>
          </div>
          <div className="font-medium my-5">
            Copyright © 2023 Grovyo Templates | All Rights Reserved{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default LastPage;
