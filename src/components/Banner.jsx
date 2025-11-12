import React from "react";
import Button from "./Button";

function Banner() {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center items-center">
            <img
              src="/banner.png"
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
          <div className="space-y-5 flex justify-center flex-col">
            <h1 className="md:text-4xl text-3xl font-bold font-serif">
              We believe that a team makes any project better
            </h1>
            <p className="text-gray-500 text-sm leading-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              nam est at perspiciatis ea sequi veniam libero quia soluta
              explicabo!
            </p>
            <div>
              <Button
                type="primary"
                additionalClass="bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Discover now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
