import React from "react";
import Button from "./Button";

function BannerTwo() {
  return (
    <div>
      <div className="container py-14">
        <div className="md:grid hidden grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-5 flex justify-center flex-col">
            <h1 className="md:text-4xl text-3xl font-bold font-serif">
              Simple way to make styling living room easier
            </h1>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              nam est at perspiciatis ea sequi veniam libero quia soluta
              explicabo!
            </p>
            <div className="flex gap-3">
              <div className="max-w-[95px] space-y-2">
                <p className="text-3xl font-serif font-bold">15</p>
                <p className="text-gray-500 ">Years of experience </p>
              </div>
              <div className="max-w-[95px] space-y-2">
                <p className="text-3xl font-serif font-bold">350</p>
                <p className="text-gray-500 ">Happy Clients</p>
              </div>
              <div className="max-w-[95px] space-y-2">
                <p className="text-3xl font-serif font-bold">25</p>
                <p className="text-gray-500 "> Award Gained</p>
              </div>
            </div>
            <div>
              <Button
                type="primary"
                additionalClass="bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="/banner2.png"
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
        </div>
        <div className="grid md:hidden grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center items-center">
            <img
              src="/banner2.png"
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
          <div className="space-y-5 flex justify-center flex-col">
            <h1 className="md:text-4xl text-3xl font-bold font-serif">
              Simple way to make styling living room easier
            </h1>
            <p className="text-gray-500 text-sm leading-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              nam est at perspiciatis ea sequi veniam libero quia soluta
              explicabo!
            </p>
            <div className="flex gap-3">
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-serif font-bold">15</p>
                <p className="text-gray-500 text-sm ">Years of experience </p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-serif font-bold">350</p>
                <p className="text-gray-500 text-sm ">Happy Clients</p>
              </div>
              <div className="max-w-[80px] space-y-2">
                <p className="text-3xl font-serif font-bold">25</p>
                <p className="text-gray-500 text-sm "> Award Gained</p>
              </div>
            </div>
            <div>
              <Button
                type="primary"
                additionalClass="bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerTwo;
