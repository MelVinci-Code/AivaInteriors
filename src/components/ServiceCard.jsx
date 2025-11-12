import React from "react";
import PropTypes from "prop-types";
function ServiceCard({ icon, title }) {
  return (
    <div className="space-y-4 border-[1px] border-black/30 p-6 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300 group">
      <span className="inline-block border-[1px] text-xl rounded-full p-3 border-black group-hover:border-white ">
        {icon}
      </span>
      <p className="text-2xl font-bold font-serif">{title}</p>
      <p className="text-gray-400 text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
        dolor sit amet consectetur
      </p>
      <a
        href="#"
        className="inline-block border-b border-black group-hover:border-white"
      >
        Learn More
      </a>
    </div>
  );
}

export default ServiceCard;

ServiceCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
};
