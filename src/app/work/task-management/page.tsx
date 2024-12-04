"use client";
import ImageSlider from "@/app/components/ImageSlider/ImageSlider";
import React, { useEffect, useState } from "react";
import sideImg1 from "@/../public/Assets/Task Management images/home page.png";
import sideImg2 from "@/../public/Assets/Task Management images/tasks 1.png";
import sideImg3 from "@/../public/Assets/Task Management images/tasks 2.png";
// import bg from "@/../public/Assets/moroccan-flower.png"
import Image from "next/image";
import fl from '@/../public/Assets/Filmy lens images/Home Page.png'
import ro from '@/../public/Assets/Route opt images/Screenshot 2024-09-29 121146.png'
import tm from '@/../public/Assets/Task Management images/home page.png'
import sc from '@/../public/Assets/Shopping Kart images/homepage.png'
// import "./filmy-lens.css";
import Feature from "@/app/components/FeatureTab/FeatureTab";
import BackToWork from "@/app/components/BackToWork/BackToWork";
import OtherWorksCard from "@/app/components/OtherWorkscard/OtherWorksCard";
import { PT_Serif, Poppins } from "next/font/google";

const pt_serif = PT_Serif({weight:["400","700"], subsets:["latin"]})
const poppins = Poppins({weight:["300", "400"], subsets:["latin"]})

function taskManagement() {
  const styling = {
    // backgroundImage: `url(${bg.src})`,
    // width: '100%',
    // height: '100%',
  };
  return (
    <div className="">
      <BackToWork />
      <ImageSlider>
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
              The Task Management project is a full-stack application designed
              to help users efficiently create, organize, and track their daily
              tasks. Built using React.js for the frontend and Nest.js for the
              backend, it offers features such as user authentication, task
              creation, and real-time search and filtering. I contributed by
              developing the frontend components and integrating them with the
              backend API. The project leverages a PostgreSQL database for
              storing user and task data, ensuring a scalable and robust
              solution for managing tasks.
            </p>
          </div>
          <div>
            <p className={`${pt_serif.className} font-bold text-2xl col-start-1 col-end-auto g:col-start-2 lg:col-end-3 text-center mb-4 p-4 `}>
              Features
            </p>
            <div className="leading-8">
              <Feature>
              👤 Create an account and add personalized tasks.{" "}
              </Feature>
              <Feature>🔐 Secure sign-up and login to manage personal tasks.</Feature>
              <Feature>✍️ Easily add, update, or delete tasks. </Feature>
              <Feature>
                🔍 Quickly locate tasks based on keywords or status.{" "}
              </Feature>
              <Feature>🗄️ Uses PostgreSQL for data storage and persistance.</Feature>
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-3">
          <p className="font-bold text-2xl text-center mb-4 p-4">Learnings</p>
          <div className="w-max leading-8 text-justify ml-auto mr-auto">
            <p className={`${poppins.className} font-semibold`}>Full-Stack Development: </p>
            <p className={`${poppins.className}indent-8 mb-2`}>
              {" "}
              Gained experience in integrating a React.js frontend with a Nest.js backend.
            </p>
            <p className={`${poppins.className} font-semibold`}>Database Management:</p>
            <p className={`${poppins.className}indent-8 mb-2`}>
              {" "}
              Implemented CRUD operations using PostgreSQL to manage user and task data efficiently.
            </p>
            <p className={`${poppins.className} font-semibold`}>Authentication Flow:</p>
            <p className={`${poppins.className}indent-8 mb-2`}>
              {" "}
              Strengthened understanding of user authentication and session management.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-[85%] ml-auto mr-auto mt-5">
        <h1 className={`${`{pt_se${pt_serif.className} if.className}`}font-bold text-2xl`}>Other Works</h1>
        <div className="flex gap-5 p-5 justify-around   ">
          <OtherWorksCard
            src={fl}
            title="Filmy Lens"
            key="filmyLens"
            link="filmy-lens"
          />
          <OtherWorksCard
            src={sc}
            title="Shopping Cart"
            key="shoppingCart"
            link="shopping-cart"
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

export default taskManagement;
