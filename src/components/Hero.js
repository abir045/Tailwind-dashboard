import React from "react";

import Search from "./Search";
// import SquareBox from "../assets/square.svg";
import { AiOutlineSearch } from "react-icons/ai";
import Box from "../assets/box.svg";
import Down from "../assets/downArrow.svg";
import Double from "../assets/doubleArrow.svg";
import Eclipse from "../assets/eclipse.svg";
import Orange from "../assets/orange.svg";
import Red from "../assets/red.svg";
import Angle from "../assets/angleDown.svg";
import Left from "../assets/angleLeft.svg";
import Right from "../assets/angleRight.svg";

const Hero = () => {
  return (
    <>
      <div className="flex justify-start">
        <div className="flex ml-6 h-[49px] md:ml-[90px]  lg:ml-[258px]">
          <h5 className="leading-8  text-[#3E3F48] font-bold">Inventory</h5>
        </div>
      </div>
      {/* <Search /> */}
      <div className="flex  bg-[#FFFFFF] rounded-lg md:ml-[130px] lg:ml-[260px] ">
        <label className="fixed bg-[#F2F2F3] rounded-lg w-[392px] mt-6 ml-4">
          <span className="sr-only font-normal">Search</span>

          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <AiOutlineSearch size={20} />
          </span>

          <input
            className="placeholder:normal placeholder:text-neutral-800 rounded-lg	block text-base bg-[#F2F2F3] w-full border borde py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search"
            type="text"
            name="search"
          />
        </label>
        <table className="table-auto w-full my-[72px]">
          <thead className="bg-[#FDF4ED]">
            <tr className="items-center text-[13px] text-[#3E3F48] font-medium h-[41px] leading-5 text-left">
              <th className="hidden md:inline items-center">
                <img src={Box} className="mx-2" alt="check box" />
              </th>
              <th>
                <div className="hidden md:flex items-center text-right mx-1">
                  Date Updated
                  <img src={Down} className="mx-1" alt="down arrow" />
                </div>
              </th>
              <th>
                <div className="flex items-center text-right mx-1">
                  Title
                  <img src={Double} className="mx-1" alt="double arrow" />
                </div>
              </th>

              <th className="hidden lg:table-cell items-center mx-1">
                Details
              </th>
              <th className="mx-1">
                <h5 className="hidden md:flex">Status</h5>
              </th>
              <th className="text-right mx-1">
                <h5 className="hidden lg:flex">Quantity</h5>
              </th>
              <th className="hidden lg:table-cell text-right mx-1 grow-1">
                Unit Price
              </th>
              <th>
                <div className="flex items-center text-right justify-end mx-1">
                  <h5>Amount</h5>
                  <img src={Double} className="ml-1" alt="double arrow" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-full  text-base text-[#3E3F48] font-normal  h-[64px] hover:bg-[#EFFBF0]">
              <td>
                <img
                  src={Box}
                  className="hidden md:inline items-center mx-2"
                  alt="check box"
                />
              </td>
              <td className="hidden md:table-cell items-center">11 Nov 2021</td>
              <td>
                <h5 className="items-center">Hammer</h5>
              </td>
              <td className="hidden lg:table-cell items-center">
                This is a hammer to do work with
              </td>
              <td>
                <div className="flex items-center">
                  <h5 className="hidden md:inline">Alright</h5>
                  <img src={Eclipse} className="mx-2 items-center" />
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-center">
                  <h5 className="font-bold">200</h5>/<h5>300</h5>
                </div>
              </td>
              <td className="hidden lg:table-cell text-right mx-1">$10</td>
              <td className="text-right mx-2 tracking-[-0.01em]">$2000.00</td>
            </tr>
            <tr className="w-full text-base text-[#3E3F48] font-normal items-center h-[64px] hover:bg-[#EFFBF0]">
              <td>
                <img
                  src={Box}
                  className="hidden md:inline items-center mx-2"
                  alt="check box"
                />
              </td>
              <td className="hidden md:table-cell items-center">10 Nov 2021</td>
              <td>Hammer</td>
              <td className="hidden lg:table-cell items-center">
                This is a Screw to do work with
              </td>
              <td>
                <div className="flex items-center">
                  <h5 className="hidden md:flex">Alright</h5>
                  <img src={Eclipse} className="mx-2 items-center" />
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-center">
                  <h5 className="font-bold">122</h5>/<h5>230</h5>
                </div>
              </td>
              <td className="hidden lg:table-cell text-right">$10</td>
              <td className="text-right tracking-[-0.01em] mx-1">$1220.00</td>
            </tr>
            <tr className="w-full text-base text-[#3E3F48] font-normal h-[64px] hover:bg-[#EFFBF0]">
              <td>
                <img
                  src={Box}
                  className="hidden md:flex mx-2"
                  alt="check box"
                />
              </td>
              <td className="hidden md:table-cell items-center">6 Nov 2021</td>
              <td>Hammer</td>
              <td className="hidden lg:table-cell items-center">
                Wood plan will be used to do woodworks, duh
              </td>
              <td>
                <div className="flex items-center">
                  <h5 className="hidden md:flex">In Progress</h5>
                  <img src={Orange} className="mx-2 items-center" />
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-center">
                  <h5 className="font-bold">100</h5>/<h5>300</h5>
                </div>
              </td>
              <td className="hidden lg:table-cell text-right">$1.5</td>
              <td className="text-right tracking-[-0.01em] mx-1">$150.00</td>
            </tr>
            <tr className="w-full text-base text-[#3E3F48] font-normal h-[64px] hover:bg-[#EFFBF0]">
              <td>
                <img
                  src={Box}
                  className="hidden md:flex mx-2"
                  alt="check box"
                />
              </td>
              <td className="hidden md:table-cell items-center">28 Oct 2021</td>
              <td>Hammer</td>
              <td className="hidden lg:table-cell items-center"> - </td>
              <td>
                <div className="flex items-center">
                  <h5 className="hidden md:flex">Out of Stock</h5>
                  <img src={Red} className="mx-2 items-center" />
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-center">
                  <h5 className="font-bold">0</h5>/<h5>200</h5>
                </div>
              </td>
              <td className="hidden lg:table-cell text-right">$10</td>
              <td className="text-right tracking-[-0.01em] mx-1">$0.00</td>
            </tr>
            <tr className="w-full text-base text-[#3E3F48] font-normal h-[64px] hover:bg-[#EFFBF0]">
              <td>
                <img
                  src={Box}
                  className="hidden md:flex mx-2"
                  alt="check box"
                />
              </td>
              <td className="hidden md:table-cell items-center">22 Oct 2021</td>
              <td>Hammer</td>
              <td className="hidden lg:table-cell items-center"> - </td>
              <td>
                <div className="flex items-center">
                  <h5 className="hidden md:flex">Out of Stock</h5>
                  <img src={Red} className="mx-2 items-center" />
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-center">
                  <h5 className="font-bold">0</h5>/<h5>200</h5>
                </div>
              </td>
              <td className="hidden lg:table-cell text-right">$10</td>
              <td className="text-right mx-1 tracking-[-0.01em]">$0.00</td>
            </tr>
            <tr className="w-full text-base text-[#3E3F48] font-normal h-[64px] hover:bg-[#EFFBF0]">
              <td>
                <img
                  src={Box}
                  className="hidden md:flex mx-2"
                  alt="check box"
                />
              </td>
              <td className="hidden md:table-cell items-center">16 Oct 2021</td>
              <td>Hammer</td>
              <td className="hidden lg:table-cell items-center"> - </td>
              <td>
                <div className="flex items-center">
                  <h5 className="hidden md:flex">Out of Stock</h5>
                  <img src={Red} className="mx-2 items-center" />
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-center">
                  <h5 className="font-bold">0</h5>/<h5>200</h5>
                </div>
              </td>
              <td className="hidden lg:table-cell text-right ">$10</td>
              <td className="text-right mx-1 tracking-[-0.01em]">$0.00</td>
            </tr>
            <tr className="w-full text-base text-[#3E3F48] font-normal h-[64px] hover:bg-[#EFFBF0]">
              <td>
                <img
                  src={Box}
                  className="hidden md:flex mx-2"
                  alt="check box"
                />
              </td>
              <td className="hidden md:table-cell items-center">9 Oct 2021</td>
              <td>Hammer</td>
              <td className="hidden lg:table-cell items-center">
                This is a hammer to do work with{" "}
              </td>
              <td>
                <div className="flex items-center">
                  <h5 className="hidden md:flex">Alright</h5>
                  <img src={Eclipse} className="mx-2 items-center" />
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-center">
                  <h5 className="font-bold">200</h5>/<h5>300</h5>
                </div>
              </td>
              <td className="hidden lg:table-cell text-right">$10</td>
              <td className="text-right tracking-[-0.01em] mx-1">$2000.00</td>
            </tr>
            <tr className="w-full text-base text-[#3E3F48] font-normal h-[64px] hover:bg-[#EFFBF0]">
              <td>
                <img
                  src={Box}
                  className="hidden md:flex mx-2"
                  alt="check box"
                />
              </td>
              <td className="hidden md:table-cell items-center">5 Oct 2021</td>
              <td>Hammer</td>
              <td className="hidden lg:table-cell">
                This is a hammer to do work with{" "}
              </td>
              <td>
                <div className="flex items-center">
                  <h5 className="hidden md:flex">Alright</h5>
                  <img src={Eclipse} className="mx-2 items-center" />
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-center">
                  <h5 className="font-bold">200</h5>/<h5>300</h5>
                </div>
              </td>
              <td className="hidden lg:table-cell text-right">$10</td>
              <td className="text-right tracking-[-0.01em] mx-1">$2000.00</td>
            </tr>
            <tr className="w-full text-base text-[#3E3F48] font-normal h-[64px] hover:bg-[#EFFBF0]">
              <td>
                <img
                  src={Box}
                  className="hidden md:flex mx-2"
                  alt="check box"
                />
              </td>
              <td className="hidden md:table-cell items-center">1 Oct 2021</td>
              <td>Hammer</td>
              <td className="hidden lg:table-cell">
                This is a hammer to do work with
              </td>
              <td>
                <div className="flex items-center">
                  <h5 className="hidden md:flex">Alright</h5>
                  <img src={Eclipse} className="mx-2 items-center" />
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-center">
                  <h5 className="font-bold">200</h5>/<h5>300</h5>
                </div>
              </td>
              <td className="hidden lg:table-cell text-right">$10</td>
              <td className="text-right tracking-[-0.01em]  mx-1">$2000.00</td>
            </tr>
            <tr className="w-full text-base text-[#3E3F48] font-normal h-[64px] hover:bg-[#EFFBF0]">
              <td>
                <img
                  src={Box}
                  className="hidden md:flex mx-2"
                  alt="check box"
                />
              </td>
              <td className="hidden md:table-cell items-center">23 Sep 2021</td>
              <td>Hammer</td>
              <td className="hidden lg:table-cell">
                This is a hammer to do work with
              </td>
              <td>
                <div className="flex items-center">
                  <h5 className="hidden md:flex">Alright</h5>
                  <img src={Eclipse} className="mx-2 items-center" />
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-center">
                  <h5 className="font-bold">200</h5>/<h5>300</h5>
                </div>
              </td>
              <td className="hidden lg:table-cell text-right">$10</td>
              <td className="text-right tracking-[-0.01em] mx-1">$2000.00</td>
            </tr>
          </tbody>
        </table>
        <div className="hidden  md:flex fixed justify-between lg:left-[276px] md:left-[130px] w-[200px] h-[32px] bottom-[60px] border border-solid border-[#B2B2B6] mx-2 rounded">
          <button className="mx-2">10 Items per page </button>
          <img className="mx-2" src={Angle} width="13.75px" />
        </div>
        <div className="flex fixed right-[168px] lg:right-[152px] md:right-[168px] w-[200px] h-[32px] bottom-[60px] border border-solid border-[#B2B2B6]  rounded">
          <button className="mx-2">Page 1 of 5</button>
          <img className="mx-2" src={Angle} width="13.75px" />
        </div>
        <div className="flex fixed items-center justify-between  right-[150px] lg:right-[96px] md:right-[112px] w-[40px] h-[32px] bottom-[60px] border border-solid border-[#B2B2B6] py-[4px] pr-[9px] pl-[7px] rounded">
          <img src={Left} />
        </div>
        <div className="flex fixed items-center justify-between right-[94px]  lg:right-[40px] md:right-[56px] w-[40px] h-[32px] bottom-[60px] border border-solid border-[#B2B2B6] py-[4px] pr-[9px] pl-[7px] rounded">
          <img src={Right} />
        </div>
      </div>
    </>
  );
};

export default Hero;
