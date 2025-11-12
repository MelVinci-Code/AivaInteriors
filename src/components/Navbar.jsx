import React from "react";

import Button from "./Button";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-4 flex justify-between items-center"
      >
        <a className="flex items-center gap-2" href="#">
          <img src="/logo.png" alt="logo" className="w-10" />
          <span className="text-2xl font-bold">Aiva</span>
        </a>
        <ul className="hidden sm:flex">
          <NavLink>About</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Project</NavLink>
          <NavLink>Contact</NavLink>
        </ul>
        <div className="">
          <Button type="primary">Try for free</Button>
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
