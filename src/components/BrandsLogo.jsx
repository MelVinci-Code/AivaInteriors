import React from "react";
import PropTypes from "prop-types";
import { SlideLeft } from "../animation/animate";
import {motion } from "motion/react"


function BrandsLogo({ source, val }) {
  return <motion.img initial="initial" variants={SlideLeft(val)} whileInView={"animate"} src={source} alt="logo" className="w-[120px] " />;
}

export default BrandsLogo;

BrandsLogo.propTypes = {
  source: PropTypes.string.isRequired,
  val: PropTypes.number.isRequired,
};
