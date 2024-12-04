import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import { GiWorld } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoMenu } from "react-icons/io5";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { IoBed } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-full h-48 bg-[#D50630]">
      <div className="w-[90%] h-auto justify-between flex ml-[5%]">
        <div className="w-40%">
          <Image src={logo} alt="" className="w-40" />
        </div>

        <div className="w-40% flex h-auto justify-end pt-14">
          <p className="text-[24px] cursor-pointer pl-15 text-white">
            <GiWorld />
          </p>
          <p className="text-[24px] cursor-pointer ml-5 text-white">
          <FaHeart />
          </p>
          <p className="text-[24px] cursor-pointer ml-5 text-white">
          <HiMiniUserCircle />
          </p>

          <p className="ml-3 hover:underline cursor-pointer text-white">log in</p>

          <p className="text-[34px] mt-[-4px] cursor-pointer ml-5 text-white">
          <IoMenu />
          </p>
        </div>
      </div>

      {/*Buttons */}

      <div className="w-[18%] justify-between flex ml-[9%]">
        <button className="px-8 py-2 rounded-xl text-white bg-[#FFB200]">
         <BiSolidPlaneAlt className="mb-[-20px] ml-[-18px]"/> Flight
        </button>
        <button className="px-8 py-2 rounded-xl text-white bg-[#D50630] border border-white">
        <IoBed className="mb-[-22px] ml-[-18px]"/>Hotels
        </button>
      </div>

      {/*Buttons ends */}
    </div>
  );
};

export default Navbar;
