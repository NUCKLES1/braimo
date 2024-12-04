import React from "react";
import mbg from "../../public/bgover.png";
import Image from "next/image";
import logo from "../../public/logo.png";
import google from "../../public/google.png";
import facebook from "../../public/facebook.png";
import apple from "../../public/apple.png";
import Link from "next/link";

const index = () => {
  return (
    <div className="w-full h-screen">
      <div>
        <Image src={mbg} alt="" className="h-auto overflow-hidden" />
      </div>
      <div className="w-[90%] h-full absolute top-[0%]">
        <div className="w-[40%] h-44">
          <Image src={logo} alt="" className="w-40" />
        </div>
        <div className="w-[75%] flex justify-between  h-[80vh] mt-[-10vh] ml-[20%]">
          <div className="w-[40%] mt-[30%]">
            <p className="text-white font-bold text-[30px]">
              Building the Future...
            </p>
            <p className="text-gray-300 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="w-[50%] h-[112.6vh] rounded-tl-3xl rounded-tr-3xl bg-white">
            <div className="w-[80%] mt-10 ml-[10%]">
              <p className="text-gray-400 text-[14px]">WELCOME BACK</p>
              <p className="font-bold text-[24px]">Log In to your Account</p>
              <div className="w-full mt-8">
                <form className="form" action="">
                  <div className="input-field">
                    <input
                      required=""
                      autoComplete="off"
                      type="email"
                      name="email"
                      id="email"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field">
                    <input
                      required=""
                      autoComplete="off"
                      type="password"
                      name="text"
                      id="password"
                    />
                    <label htmlFor="username">Password</label>
                  </div>
                </form>
              </div>
              <div className="mt-4 w-full flex">
                <ul className="flex w-full justify-between">
                  <li>
                    <input type="checkbox" id="" value="" className="h-4 w-4" />{" "}
                    Remember me
                  </li>
                  <li>Forgot password?</li>
                </ul>
              </div>
              <div className="w-full mt-4">
                <button className="bg-[#212121] text-white rounded-xl w-full py-4 text-[12px]">
                  <Link href="/otp">GET STARTED</Link>
                </button>
                <div className="mt-4 flex">
                  <div className="border h-0 border-gray-400 mt-3 w-[45%]"></div>
                  <p className="px-2">Or</p>
                  <div className="border h-0 border-gray-400 mt-3 w-[45%]"></div>
                </div>
                <button className=" border-2 border-gray-300 rounded-xl w-full py-4 text-[12px] mt-2 text-gray-400">
                  <Image src={google} alt="" className="ml-6" />
                  <p className="mt-[-1rem]">Sign up with Google</p>
                </button>
                <button className="mt-3 border-2 border-gray-300 rounded-xl w-full py-4 text-[12px] text-gray-400">
                  <Image src={facebook} alt="" className="ml-6" />
                  <p className="mt-[-1rem]">Sign up with Facebook</p>
                </button>
                <button className="mt-3 border-2 border-gray-300 rounded-xl w-full py-4 text-[12px] text-gray-400">
                  <Image src={apple} alt="" className="ml-7" />
                  <p className="mt-[-1rem]">Sign up with Apple</p>
                </button>
              </div>
              <div className="w-full text-center mt-6">
                <p className="text-black">
                  New User?
                  <Link href="signup" className="font-bold underline">
                    {" "}
                    SIGN UP HERE
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
