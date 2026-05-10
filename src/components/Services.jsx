import React from "react";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import ServiceCard from "./ServiceCard";
import {motion} from "motion/react"
import { SlideUp } from "../animation/animate";

function Services() {
  return (
    <div  className="container py-20 ">
      <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
        <motion.h1 variants={SlideUp(0.3)} initial="initial"  whileInView={"animate"} className=" text-3xl font-serif font-bold">What we provide</motion.h1>
        <motion.p variants={SlideUp(0.4)} initial="initial"  whileInView={"animate"} className="text-gray-500 text-sm">
          Bring your dream home to life with one-on-one design help & hand
          picked products
        </motion.p>
      </div>
      <div className="grid justify-center grid-cols-1 md:grid-cols-3 gap-5">
        <ServiceCard icon={<FaVectorSquare />} title="Luxury Facilities" />
        <ServiceCard icon={<BiSolidDollarCircle />} title="Affordable Price" />
        <ServiceCard icon={<FaPenToSquare />} title="Smooth Workflow" />
      </div>
    </div>
  );
}

export default Services;
