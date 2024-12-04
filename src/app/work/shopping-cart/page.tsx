"use client";
import ImageSlider from "@/app/components/ImageSlider/ImageSlider";
import React, { useEffect, useState } from "react";
import fl from '@/../public/Assets/Filmy lens images/Home Page.png'
import ro from '@/../public/Assets/Route opt images/Screenshot 2024-09-29 121146.png'
import tm from '@/../public/Assets/Task Management images/home page.png'
import sc from '@/../public/Assets/Shopping Kart images/homepage.png'

import sideImg1 from "@/../public/Assets/Shopping Kart images/homepage.png";
import sideImg2 from "@/../public/Assets/Shopping Kart images/favpage.png";
import sideImg3 from "@/../public/Assets/Shopping Kart images/cartpage.png";
import sideImg4 from "@/../public/Assets/Shopping Kart images/payment1.png";
import sideImg5 from "@/../public/Assets/Shopping Kart images/payment2.png";
// import bg from "@/../public/Assets/moroccan-flower.png"
import Image from "next/image";
// import "./filmy-lens.css";
import Feature from "@/app/components/FeatureTab/FeatureTab";
import BackToWork from "@/app/components/BackToWork/BackToWork";
import OtherWorksCard from "@/app/components/OtherWorkscard/OtherWorksCard";
import { PT_Serif, Poppins } from "next/font/google";

const pt_serif = PT_Serif({weight:["400","700"], subsets:["latin"]})
const poppins = Poppins({weight:["300", "400"], subsets:["latin"]})

function shoppingCart() {
  const styling = {
    // backgroundImage: `url(${bg.src})`,
    // width: '100%',
    // height: '100%',
  };
  return (
    <div className="">
      <BackToWork />
      <ImageSlider>
        <Image src={sideImg5} alt="Image" height={350} width={700} />
        <Image src={sideImg4} alt="Image" height={350} width={700} />
        <Image src={sideImg3} alt="Image" height={350} width={700} />
        <Image src={sideImg2} alt="Image" height={350} width={700} />
        <Image src={sideImg1} alt="Image" height={350} width={700} />
      </ImageSlider>
      <div
        style={styling}
        className="project-outcome grid grid-rows-1 grid-cols-1 gap-10 w-[80%] text-justify ml-auto mr-auto mb-5"
      >
        <div className=" grid lg:grid-cols-2 gap-10">
          <div className="">
            <p className={`${pt_serif.className} font-bold text-2xl lg:col-start-1 lg:col-end-2 text-center mb-4 p-4 `}>
              Overview
            </p>
            <p className={`${poppins.className} leading-8`}>
              The Shopping Cart project is an e-commerce application built using
              React.js to simulate shopping experience. It allows users to
              browse products, search for items, add them to the cart, and
              proceed to checkout. The app uses Redux Toolkit for global state
              management, ensuring a smooth user experience. I focused on
              implementing product listings, cart functionality, and a dummy
              payment gateway for a seamless checkout flow.
            </p>
          </div>
          <div>
            <p className={`${pt_serif.className} font-bold text-2xl col-start-1 col-end-auto g:col-start-2 lg:col-end-3 text-center mb-4 p-4 `}>
              Features
            </p>
            <div className="leading-8">
              <Feature>
                🛍️ Explore a wide range of products with detailed descriptions.{" "}
              </Feature>
              <Feature>
                🔎 Quickly find products using a real-time search bar.
              </Feature>
              <Feature>
                ➕ Easily add items to the cart with a single click.{" "}
              </Feature>
              <Feature>
                🛒 View, update, or remove items directly from the shopping
                cart.{" "}
              </Feature>
              <Feature>
                💳 Complete purchases through a simulated payment gateway.
              </Feature>
              <Feature>
                💰 Automatically updates the total cost as items are added or
                removed.
              </Feature>
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-3">
          <p className={`${pt_serif.className} font-bold text-2xl text-center mb-4 p-4`}>Learnings</p>
          <div className={`${poppins.className} w-max leading-8 text-justify ml-auto mr-auto`}>
            <p className="font-semibold">State Management: </p>
            <p className="indent-8 mb-2">
              {" "}
              Worked with Redux Toolkit for handling complex global state and
              managing data flow across components.
            </p>
            <p className="font-semibold">Data Handling: </p>
            <p className="indent-8 mb-2">
              {" "}
              Implemented logic for adding, removing, and updating items in the
              cart dynamically.
            </p>
            <p className="font-semibold">Payment Flow Simulation: </p>
            <p className="indent-8 mb-2">
              {" "}
              Gained experience in setting up a basic checkout process and
              simulating a payment gateway for e-commerce functionality.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-[85%] ml-auto mr-auto mt-5">
        <h1 className={`${pt_serif.className} font-bold text-2xl`}>Other Works</h1>
        <div className="flex gap-5 p-5 justify-around   ">
          <OtherWorksCard
            src={fl}
            title="Filmy Lens"
            key="filmyLens"
            link="filmy-lens"
          />
          <OtherWorksCard
            src={tm}
            title="Task Management"
            key="taskManagement"
            link="task-management"
          />
          <OtherWorksCard
            src={ro}
            title="Route Optimization"
            key="routeOpt"
            link="route-opt"
          />
        </div>
      </div>
    </div>
  );
}

export default shoppingCart;
