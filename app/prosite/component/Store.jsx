import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import image3 from "../../assets/image3.svg";
import image32 from "../../assets/image32.svg";
import store07 from "../../assets/07.svg";
import temimg from "../../assets/temimg.svg";

const Store = (props) => {
  const [productt, setProductt] = useState([]);

  useEffect(() => {
    if (props.product) {
      setProductt(props.product);
    }
  }, [props.product]);

  // Conditional rendering when 'productt' is empty or undefined
  if (!productt || productt.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="select-none">
        <div className="text-3xl font-semibold text-center my-2 py-2">
          Store
        </div>
        <div className="flex justify-center items-center px-3">
          <div className="md:grid md:grid-cols-4 md:gap-6 pn:max-md:flex pn:max-sm:space-y-5 pn:max-sm:flex-col xxl:w-[65%] sm:max-md:flex-wrap justify-center items-center px-3">
            {productt.map((d, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col justify-center max-w-[400px] sm:max-w-[320px] m-2 w-full"
                >
                  <div className="bg-[#EEEEEE] flex justify-center items-center rounded-lg py-3">
                    <div className=" max-w-[240px]">
                      <img src={d?.u} alt="img" />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 my-2 text-lg font-medium">
                    <div className="text-base font-semibold h-[30px] overflow-hidden ">
                      {d?.p?.brandname}
                    </div>
                    <div className="text-[#737373]">
                      Sold by {d?.p?.creator?.fullname}
                    </div>
                    <div className="text-[19px] font-semibold">
                      ₹ {d?.p?.discountedprice}
                      <span className="text-base font-medium text-[#5585FF]">
                        {d?.p?.percentoff}%
                      </span>
                    </div>
                    <div className="font-semibold">
                      M.R.P. :
                      <del className="font-medium text-[#FF0000]">
                        ₹ {d?.p?.price}
                      </del>
                    </div>
                  </div>
                  <button className="text-white bg-black rounded-xl flex justify-center items-center space-x-2 p-2 w-full">
                    Add To Cart
                  </button>
                </div>
              );
            })}

            {/* <div className="flex flex-col justify-center max-w-[400px] sm:max-w-[320px] m-2 w-full">
              <div className="bg-[#EEEEEE] flex justify-center items-center rounded-lg py-3">
                <div className=" max-w-[240px]">
                  <Image src={store07} />
                </div>
              </div>
              <div className="flex flex-col space-y-2 my-2 text-lg font-medium">
                <div className="text-base font-semibold h-[30px] overflow-hidden">
                  Luxury Bag- venus skin curry Handbag
                </div>
                <div className="text-[#737373]">Sold by riya singh</div>
                <div className="text-[19px] font-semibold">
                  ₹400,089{" "}
                  <span className="text-base font-medium text-[#5585FF]">
                    {" "}
                    79% off
                  </span>
                </div>
                <div className="font-semibold">
                  M.R.P. :{" "}
                  <del className="font-medium text-[#FF0000]">₹2299</del>
                </div>
              </div>
              <button className="text-white bg-black rounded-xl flex justify-center items-center space-x-2 p-2 w-full">
                Add To Cart <AiOutlineShoppingCart />
              </button>
            </div>
            <div className="flex flex-col justify-center max-w-[400px] sm:max-w-[320px] m-2 w-full">
              <div className="bg-[#EEEEEE] flex justify-center items-center rounded-lg py-3">
                <div className=" max-w-[240px]">
                  <Image src={temimg} />
                </div>
              </div>
              <div className="flex flex-col space-y-2 my-2 text-lg font-medium">
                <div className="text-base font-semibold h-[30px] overflow-hidden">
                  Luxury Bag- venus skin curry Handbag
                </div>
                <div className="text-[#737373]">Sold by riya singh</div>
                <div className="text-[19px] font-semibold">
                  ₹400,089{" "}
                  <span className="text-base font-medium text-[#5585FF]">
                    {" "}
                    79% off
                  </span>
                </div>
                <div className="font-semibold">
                  M.R.P. :{" "}
                  <del className="font-medium text-[#FF0000]">₹2299</del>
                </div>
              </div>
              <button className="text-white bg-black rounded-xl flex justify-center items-center space-x-2 p-2 w-full">
                Add To Cart <AiOutlineShoppingCart />
              </button>
            </div>
            <div className="flex flex-col justify-center max-w-[400px] sm:max-w-[320px] m-2 w-full">
              <div className="bg-[#EEEEEE] flex justify-center items-center rounded-lg py-3">
                <div className=" max-w-[240px]">
                  <Image src={image32} />
                </div>
              </div>
              <div className="flex flex-col space-y-2 my-2 text-lg font-medium">
                <div className="text-base font-semibold h-[30px] overflow-hidden">
                  Luxury Bag- venus skin curry Handbag
                </div>
                <div className="text-[#737373]">Sold by riya singh</div>
                <div className="text-[19px] font-semibold">
                  ₹400,089{" "}
                  <span className="text-base font-medium text-[#5585FF]">
                    {" "}
                    79% off
                  </span>
                </div>
                <div className="font-semibold">
                  M.R.P. :{" "}
                  <del className="font-medium text-[#FF0000]">₹2299</del>
                </div>
              </div>
              <button className="text-white bg-black rounded-xl flex justify-center items-center space-x-2 p-2 w-full">
                Add To Cart <AiOutlineShoppingCart />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
