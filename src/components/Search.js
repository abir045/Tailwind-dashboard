import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="flex">
      <label className="flex fixed   top-3  bg-[#F2F2F3] rounded-lg w-[392px]">
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
    </div>
  );
};

export default Search;

//
//
