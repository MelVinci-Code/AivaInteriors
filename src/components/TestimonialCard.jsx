import React from "react";
import PropTypes from "prop-types";
import { IoMdStar } from "react-icons/io";
function TestimonialCard({ img, name, designation, children }) {
  return (
    <div className="text-white border-[1px] border-gray-500 p-5 group hover:bg-white hover:text-black">
      <div className="flex  flex-row items-center gap-3 ">
        <img src={img} alt="" className="w-[60px] rounded-full" />
        <div>
          <p className="text-sm font-bold group-hover:text-black">{name}</p>
          <p className="text-gray-400 text-xs group-hover:text-black">
            {designation}
          </p>
          <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
      <div className="mt-5 border-t-2 border-gray-500/40 pt-5">
        <div className="text-sm text-gray-300 group-hover:text-black duration-300">
          {children}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;

TestimonialCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  designation: PropTypes.string,
  children: PropTypes.node,
};
