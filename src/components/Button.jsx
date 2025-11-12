
import React from "react";
import PropTypes from "prop-types";
import { SlideUp } from "../animation/animate";
import { motion } from "framer-motion";


function Button({ val,type, additionalClass, children }) {
  const style = `${
    type === "primary"
      ? "text-sm font-semibold lg:text-base py-2 px-4 border-1  border-black shadow-[5px_5px_0px_0px] hover:bg-black hover:text-white duration-300 hover:shadow-[5px_5px_0px_0px_#6c6c6c]"
      : ""
  } ${additionalClass}`;
  return <motion.button variants={SlideUp(val)}
              initial="initial"
              animate="animate" className={style}>{children}</motion.button>;
}

Button.propTypes = {
  val: PropTypes.number,
  type: PropTypes.string,
  additionalClass: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
