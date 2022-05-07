import React from "react";
import { GoTriangleDown } from "react-icons/go";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineBell,
} from "react-icons/ai";

import Ellipse from "../assets/Ellipse.png";
import V2 from "../assets/Vector@2x.png";
import Dash from "../assets/dashboard.svg";
import IV from "../assets/inventory.svg";
import Doc from "../assets/documents.svg";
import Settings from "../assets/settings.svg";
import Search from "./Search";
import Sidebar from "./Sidebar";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center  h-16 w-full  px-4 text-black bg-[#FFFFFF]">
        <div className="flex justify-start left-6 p-2 top-3">
          <h1 className="w-full text-sm items-end text-[#3E3F48] font-medium ">
            Starbucks
          </h1>
          <div className="w-full p-1">
            <GoTriangleDown size={15} />
          </div>
        </div>
        <div className="hidden md:flex fixed  md:left-[134px] lg:left-[262px] w-[392px] ">
          <Search />
        </div>

        <div className="flex">
          <img className="mx-4" src={V2} alt="bell" />
          {/* <AiOutlineBell className="w-[24px] h-[24px]" /> */}

          <img className="mx-4 " src={Ellipse} alt="avatar" />

          <h1 className="w-full inline text-sm font-medium  text-[#3E3F48] mx-4 py-2">
            John Doe
          </h1>
          <div className="w-[10px]  py-3">
            <GoTriangleDown size={15} />
          </div>
        </div>
      </div>

      {/* side bar menu */}
      {/* <div className="flex-col mt-8">
        <div className="hidden md:flex py-2 pl-4">
          <img src={Dash} alt="dashboard logo" />
          <h1 className="hidden lg:flex text-[14px] leading-[1.063rem] tracking-wide text-[#6B6C72] font-medium mx-2">
            Dashboard
          </h1>
        </div>
        <div className="hidden md:flex bg-[#FFFFFF] md:w-[41px] my-2 px-2 mx-2 py-2 lg:w-[188px] rounded shadow-[0px_3px 1px_rgba(20, 40, 82, 0.08)_0px_24px_24px_rgba(20, 40, 82, 0.04)]">
          <img src={IV} alt="inventory logo" />

          <h1 className="hidden lg:flex text-[14px] leading-[1.063rem] tracking-wide text-[#6B6C72] font-medium mx-2">
            Inventory
          </h1>
        </div>
        <div className="hidden md:flex py-2 pl-4">
          <img src={Doc} alt="documents logo" />
          <h1 className="hidden lg:flex text-[14px] leading-[1.063rem] tracking-wide text-[#6B6C72] font-medium mx-2">
            Documents
          </h1>
        </div>
        <div className="hidden md:flex py-2 pl-4">
          <img src={Settings} alt="settings logo" />
          <h1 className="hidden lg:flex text-[14px] leading-[1.063rem] tracking-wide text-[#6B6C72] font-medium mx-2">
            Settings
          </h1>
        </div>
      </div> */}
      {/* responsive sidebar */}
      {/* <div
        className="flex flex-row w-full p-4 shadow-[0px_-4px_2px_rgba(0,0,0,0.09)]
 bg-[#FFFFFF] fixed bottom-0 md:hidden"
      >
        <div className="rounded mx-auto">
          <img src={Dash} alt="dashboard logo" />
        </div>
        <div className="rounded mx-auto">
          <img src={IV} alt="inventory logo" />
        </div>

        <div className="rounded mx-auto">
          <img src={Doc} alt="documents logo" />
        </div>

        <div className="rounded mx-auto">
          <img src={Settings} alt="settings logo" />
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
