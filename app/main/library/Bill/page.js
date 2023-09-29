"use client";
import Image from "next/image";
import React, { useState } from "react";
import tick from "../../../assets/Images/tick.png";
import Illustration from "../../../assets/Images/Illustration.png";
import continuee from "../../../assets/Images/continue.png";
import delivery from "../../../assets/Images/delivery.png";
import coupon from "../../../assets/Images/coupon.png";

function page() {
  const [data, setData] = useState([]);
  return (
    <div className="w-[79%] pn:max-md:hidden h-screen bg-white flex flex-col justify-center items-center">
      {/* placing order */}

      {data.length === 0 ? (
        // Render content when data is empty
        <div className="w-[80%] h-[80%] flex  flex-col items-center justify-evenly ">
          {/* No charges */}
          <div className="w-[80%] h-[10%] bg-[#F6F6F6] rounded-lg flex flex-row items-center justify-center">
            <Image
              src={delivery}
              alt="delivery"
              className="h-[30px] w-[30px] "
            />
            <div className="text-[18px] text-[#2D2D2D] px-1">Yay!</div>
            <div className="text-[18px] text-[#2D2D2D]  font-semibold">
              No Delivery Charge
            </div>
            <div className="text-[18px] text-[#2D2D2D] px-1">on this order</div>
          </div>

          {/* Apply coupon */}

          <div className="w-[80%] h-[15%] flex flex-col items-center justify-center">
            <div className="w-[100%] h-[50%] font-bold text-black text-[18px] bg-white  flex items-center">
              Have a Coupon?
            </div>

            {/* Add coupon */}
            <div className="w-[100%] h-[50%] font-bold text-black text-[20px] bg-[#F6F6F6] border-[#D2D2D2] rounded-lg border-2 flex flex-row">
              <div className="w-[10%] h-[100%] flex items-center justify-center ">
                <Image src={coupon} className="h-[30px] w-[20px]" />
              </div>

              <div className="text-[#737373] font-sans w-[70%] flex items-center h-[100%] text-[16px] font-thin bg-[#F6F6F6] ">
                Enter Coupon Code
              </div>
              <div className="text-[#0075FF] w-[20%] h-[100%] text-[16px] flex items-center justify-center ">
                APPLY
              </div>
            </div>
          </div>

          {/* Price details*/}
          <div className="w-[80%] h-[55%] bg-white flex flex-col justify-between">
            <div className="text-[16px] font-semibold text-black">
              PRICE DETAILS
            </div>
            {/* MRP */}
            <div className="flex flex-row justify-between items-center">
              <div className="text-[#737373] text-[14px]">Total MRP</div>
              <div className="text-black text-[14px]">Rs. 0</div>
            </div>

            {/* Discount */}
            <div className="flex flex-row justify-between items-center">
              <div className="text-[#737373] text-[14px]">Discount on MRP</div>
              <div className="text-[#2DC071] text-[14px]">-Rs. 0</div>
            </div>

            {/* Coupon Discount */}

            <div className="flex flex-row justify-between items-center">
              <div className="text-[#737373] text-[14px]">Coupon Discount</div>
              <div className="text-black text-[14px]">Rs. 0</div>
            </div>

            {/* delivery charge */}

            <div className="flex flex-row justify-between items-center">
              <div className="text-[#737373] text-[14px]">Delivery Charge</div>
              <div className="text-[#2DC071] text-[14px]">Free</div>
            </div>

            {/* Total charge */}
            <div className="border-t-2 flex flex-row justify-between items-center py-2 bg">
              <div className="text-[#737373] text-[14px]">Total Amount</div>
              <div className="text-black font-bold text-[14px]">Rs. 0</div>
            </div>

            <div className="bg-black rounded-lg flex flex-row justify-center items-center py-2">
              <div className="text-white text-[14px]">PLACE ORDER</div>
            </div>
          </div>
        </div>
      ) : (
        data.map((d, i) => (
          <div className="w-[80%] h-[80%] flex  flex-col items-center justify-evenly ">
            {/* No charges */}
            <div className="w-[80%] h-[10%] bg-[#F6F6F6] rounded-lg flex flex-row items-center justify-center">
              <Image
                src={delivery}
                alt="delivery"
                className="h-[30px] w-[30px] "
              />
              <div className="text-[18px] text-[#2D2D2D] px-1">Yay!</div>
              <div className="text-[18px] text-[#2D2D2D]  font-semibold">
                No Delivery Charge
              </div>
              <div className="text-[18px] text-[#2D2D2D] px-1">
                on this order
              </div>
            </div>

            {/* Apply coupon */}

            <div className="w-[80%] h-[15%] flex flex-col items-center justify-center">
              <div className="w-[100%] h-[50%] font-bold text-black text-[18px] bg-white  flex items-center">
                Have a Coupon?
              </div>

              {/* Add coupon */}
              <div className="w-[100%] h-[50%] font-bold text-black text-[20px] bg-[#F6F6F6] border-[#D2D2D2] rounded-lg border-2 flex flex-row">
                <div className="w-[10%] h-[100%] flex items-center justify-center ">
                  <Image
                    src={coupon}
                    alt="coupon b  "
                    className="h-[30px] w-[20px]"
                  />
                </div>

                <input
                  placeholder="Enter Coupon Code"
                  className="text-[#737373] font-sans outline-none w-[70%] h-[100%] text-[16px] font-thin bg-[#F6F6F6] "
                />
                <div className="text-[#0075FF] w-[20%] h-[100%] text-[16px] flex items-center justify-center ">
                  APPLY
                </div>
              </div>
            </div>

            {/* Price details*/}
            <div className="w-[80%] h-[55%] bg-white flex flex-col justify-between">
              <div className="text-[16px] font-semibold text-black">
                PRICE DETAILS ({d?.c?.quantity} items)
              </div>
              {/* MRP */}
              <div className="flex flex-row justify-between items-center">
                <div className="text-[#737373] text-[14px]">Total MRP</div>
                <div className="text-black text-[14px]">
                  Rs. {d?.c?.product?.price}
                </div>
              </div>

              {/* Discount */}
              <div className="flex flex-row justify-between items-center">
                <div className="text-[#737373] text-[14px]">
                  Discount on MRP
                </div>
                <div className="text-[#2DC071] text-[14px]">-Rs. 0</div>
              </div>

              {/* Coupon Discount */}

              <div className="flex flex-row justify-between items-center">
                <div className="text-[#737373] text-[14px]">
                  Coupon Discount
                </div>
                <div className="text-black text-[14px]">Rs. 0</div>
              </div>

              {/* delivery charge */}

              <div className="flex flex-row justify-between items-center">
                <div className="text-[#737373] text-[14px]">
                  Delivery Charge
                </div>
                <div className="text-[#2DC071] text-[14px]">Free</div>
              </div>

              {/* Total charge */}
              <div className="border-t-2 flex flex-row justify-between items-center py-2 bg">
                <div className="text-[#737373] text-[14px]">Total Amount</div>
                <div className="text-black font-bold text-[14px]">
                  Rs. {d?.c?.product?.discountedprice}
                </div>
              </div>

              <div className="bg-black rounded-lg flex flex-row justify-center items-center py-2">
                <div className="text-white text-[14px]">PLACE ORDER</div>
              </div>
            </div>
          </div>
        ))
      )}

      {/* confirmation */}

      <div className="w-[80%] h-[80%] hidden flex-col items-center justify-evenly ">
        <div className="flex flex-row justify-center items-center">
          <div className="text-[#0075FF] text-[34px] font-bold">CONFIRMED</div>
          <Image alt="tick" src={tick} className="h-[40px] w-[40px]" />
        </div>
        <div className="text-[18px] font-semibold text-black">
          THANK YOU FOR YOUR ORDER!
        </div>
        <div className="text-[14px] font-semibold text-black">
          Order Id: 56089
        </div>
        <Image
          alt="Illustration"
          src={Illustration}
          className="h-[30%] w-[40%] object-scale-down"
        />
        <div className="text-[14px] font-semibold text-black">
          Estimated Delivery
        </div>
        <div className="text-[14px] font-semibold text-black">
          Monday, 09th January, 2023
        </div>
        <div className="bg-black w-[60%] py-4 rounded-lg text-white text-[12px] font-semibold flex justify-center items-center">
          <div> Continue Shopping</div>
          <Image
            alt="continuee"
            src={continuee}
            className="h-[20px] w-[20px] mx-1 "
          />
        </div>
      </div>

      {/* Add delivery address */}
      <div className="w-[70%] h-[90%] hidden flex-col items-center justify-between ">
        <div className="text-[20px] font-bold text-black h-[15%] flex justify-center items-center w-[100%] ">
          Add delivery address
        </div>

        {/* First and last name */}
        <div className="flex flex-row h-[10%] text-[#585858] w-[100%] justify-between">
          <div className="h-[100%] w-[40%] flex flex-col ">
            <div className="text-[#585858] flex items-center text-[12px] h-[50%] w-[100%]">
              First Name
            </div>
            <input
              className="h-[50%] w-[100%] px-2 border-2 rounded-lg outline-none text-[12px] text-black"
              placeholder="Salem"
            />
          </div>
          <div className="h-[100%] w-[40%] flex flex-col ">
            <div className="text-[#585858] flex items-center text-[12px] h-[50%] w-[100%]">
              Last Name
            </div>
            <input
              className="h-[50%] w-[100%] px-2 border-2 rounded-lg outline-none text-[12px] text-black"
              placeholder="Salem"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-row h-[10%] text-[#585858] w-[100%] justify-between">
          <div className="h-[100%] w-[100%] flex flex-col ">
            <div className="text-[#585858] flex items-center text-[12px] h-[50%] w-[100%]">
              Email
            </div>
            <input
              className="h-[50%] w-[100%] px-2 border-2 rounded-lg outline-none text-[12px] text-black"
              placeholder="Salem"
            />
          </div>
        </div>

        {/* Phone no */}

        <div className="flex flex-row h-[10%] text-[#585858] w-[100%] justify-between">
          <div className="h-[100%] w-[100%] flex flex-col ">
            <div className="text-[#585858] flex items-center text-[12px] h-[50%] w-[100%]">
              Phone number
            </div>
            <div className="h-[50%] w-[100%] flex flex-row justify-between">
              <input
                className="h-[100%] w-[10%] px-2 border-2 rounded-lg outline-none text-[12px] text-black"
                placeholder="+ 91"
              />
              <input
                className="h-[100%] w-[88%] px-2 border-2 rounded-lg outline-none text-[12px] text-black"
                placeholder="S+91"
              />
            </div>
          </div>
        </div>

        {/* Flat no */}
        <div className="flex flex-row h-[10%] text-[#585858] w-[100%] justify-between">
          <div className="h-[100%] w-[100%] flex flex-col ">
            <div className="text-[#585858] flex items-center text-[12px] h-[50%] w-[100%]">
              Flat/House no.
            </div>
            <input
              className="h-[50%] w-[100%] px-2 border-2 rounded-lg outline-none text-[12px] text-black"
              placeholder="Kochi - Kanyakumari Hwy, Palayam"
            />
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-row h-[10%] text-[#585858] w-[100%] justify-between">
          <div className="h-[100%] w-[100%] flex flex-col ">
            <div className="text-[#585858] flex items-center text-[12px] h-[50%] w-[100%]">
              Address
            </div>
            <input
              className="h-[50%] w-[100%] px-2 border-2 rounded-lg outline-none text-[12px] text-black"
              placeholder="Thiruvananthapuram, Kerala"
            />
          </div>
        </div>

        {/* City and State */}
        <div className="flex flex-row h-[10%] text-[#585858] w-[100%] justify-between">
          <div className="h-[100%] w-[40%] flex flex-col ">
            <div className="text-[#585858] flex items-center text-[12px] h-[50%] w-[100%]">
              City
            </div>
            <input
              className="h-[50%] w-[100%] px-2 border-2 rounded-lg outline-none text-[12px] text-black"
              placeholder="Thiruvananthapuram"
            />
          </div>
          <div className="h-[100%] w-[40%] flex flex-col ">
            <div className="text-[#585858] flex items-center text-[12px] h-[50%] w-[100%]">
              State
            </div>
            <input
              className="h-[50%] w-[100%] px-2 border-2 rounded-lg outline-none text-[12px] text-black"
              placeholder="Salem"
            />
          </div>
        </div>

        {/* Postal Code and Landmark */}
        <div className="flex flex-row h-[10%] text-[#585858] w-[100%] justify-between">
          <div className="h-[100%] w-[40%] flex flex-col ">
            <div className="text-[#585858] flex items-center text-[12px] h-[50%] w-[100%]">
              Postal Code
            </div>
            <input
              className="h-[50%] w-[100%] px-2 border-2 rounded-lg outline-none text-[12px] text-black"
              placeholder="Thiruvananthapuram"
            />
          </div>
          <div className="h-[100%] w-[40%] flex flex-col ">
            <div className="text-[#585858] flex items-center text-[12px] h-[50%] w-[100%]">
              Landmark
            </div>
            <input
              className="h-[50%] w-[100%] px-2 border-2 rounded-lg outline-none text-[12px] text-black"
              placeholder="Salem"
            />
          </div>
        </div>

        <div className="flex justify-center items-center h-[10%]  w-[100%] font-semibold">
          <div className="text-white  flex justify-center items-center bg-black w-[100%] h-[60%] rounded-lg ">
            Save Address
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
