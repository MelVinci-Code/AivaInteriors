
import React from "react";
import Button from "./Button";
import { motion } from "motion/react";
import { SlideUp } from "../animation/animate";

function Hero() {
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 grid-cols-1 md:min-h-[450px] gap-10">
        <div className="flex flex-col justify-center gap-5 md:pr-8 lg:pr-14 text-center md:text-left pt-20 md:pt-0 px-10">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            animate="animate"
            className="text-3xl font-bold"
          >
            AIVA LUXURY INTERIOR DESIGNS
          </motion.h1>
          <motion.p
            variants={SlideUp(0.5)}
            initial="initial"
            animate="animate"
            className="text-sm text-gray-500"
          >
            Bring your dream to life with one-on-one design help & hand picked
            products tailored to your style, space and budget.
          </motion.p>
          <div className="space-x-4">
            <Button
              val={0.8}
              type="primary"
              additionalClass="uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
            >
              Get started
            </Button>
            <Button val={1.1} type="primary" additionalClass="uppercase">
              Contact us
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            src="/hero.png"
            alt="hero image"
            className="w-[80%] md:w-[300px] object-cover md:scale-125"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
