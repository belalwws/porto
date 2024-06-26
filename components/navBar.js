"use client";
import React from "react";
import "../components/navbar.css";
import dev from "../components/dev.json";
import Lottie from "lottie-react";
const Navbar = () => (
  <div className="wave-header bg-gray-800">
    <div class="custom-shape-divider-bottom-1719426920">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>{" "}
    <header
      id="header"
      className="bg-gray-800 text-white p-4 flex justify-between items-center container mx-auto px-12"
    >
      <div className="flex items-center ">
        {/* <img
        src="https://source.unsplash.com/random/50x50"
        alt="Logo"
        className="h-8 w-8 mr-2"
      /> */}
        <span className="font-bold text-lg  cursor-pointer">BAK-TECH</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-yellow-400">
              About US
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Portofolio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Contact us
            </a>
          </li>
        </ul>
      </nav>
    </header>
    {/* mini hero section */}
    <div className="hero-section container mx-auto ">
      <div className="paragraph text-white">
        <h1>we are BAK-TECH</h1>
        <b>
          a web develobment company that service and bulding a websites for you
          we will be very happy to take ypur money in our wallet to by air
          conditioner or somthing new
        </b>
        <div>
          <a href="#" className="hover:text-yellow-400">
            Contact us
            <hr className=" border-blue-600 size-8  " />
          </a>
          <a href="#" className="hover:text-yellow-400">
            Contact us
            <hr className=" border-red-600 size-8" />
          </a>
        </div>
      </div>
      <div
        style={{ width: "50%", marginLeft: "50px" }}
        className="cool-animation text-white "
      >
        <Lottie animationData={dev} />
      </div>
    </div>
  </div>
);

export default Navbar;
