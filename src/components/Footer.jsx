import React from "react";
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";

function Footer() {
  return (
    <footer>
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 font-semibold">
            <a className="flex items-center space-x-3" href="#">
              <img src="/logo.png" alt="" className="w-5" />
              <p className="text-xl font-semibold">Aiva</p>
            </a>
            <p>Greater Noida, Uttar Pradesh, India</p>
            <p>@ 2025 MVC. All rights reserved</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About us</h1>
              <ul className="text-sm space-y-3">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Designer</a>
                </li>
                <li>
                  <a href="#">Craftmanship</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-3">
                <li>
                  <a href="#">FAQ&apos;S</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Care Guide</a>
                </li>
                <li>
                  <a href="#">Guaranty</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="#">+91 123456789</a>
              </li>
              <li className="flex items-center space-x-3">
                <LuMessageSquare />
                <a href="mailto:ukaibemelvin@gmail.com">Email</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-sm font-semibold border-t-2 border-black/50 pt-5 mt-8">
          &copy; 2025 MVC. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
