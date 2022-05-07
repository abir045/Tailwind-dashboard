import React from "react";
import Dash from "../assets/dashboard.svg";
import IV from "../assets/inventory.svg";
import Doc from "../assets/documents.svg";
import Settings from "../assets/settings.svg";

const Sidebar = () => {
  return (
    <>
      {/* side bar menu */}
      <div className="flex flex-col fixed top-[88px] left-[24px]">
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
      </div>
      {/* responsive sidebar */}
      <div
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
      </div>
    </>
  );
};

export default Sidebar;
