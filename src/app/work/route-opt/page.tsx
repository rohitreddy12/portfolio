"use client";
import ImageSlider from "@/app/components/ImageSlider/ImageSlider";
import React, { useEffect, useState } from "react";
import sideImg1 from "@/../public/Assets/Route opt images/Screenshot 2024-09-29 121057.png";
import sideImg2 from "@/../public/Assets/Route opt images/Screenshot 2024-09-29 121146.png";
import sideImg3 from "@/../public/Assets/Route opt images/Screenshot 2024-09-29 121631.png";
// import bg from "@/../public/Assets/moroccan-flower.png"
import fl from '@/../public/Assets/Filmy lens images/Home Page.png'
import ro from '@/../public/Assets/Route opt images/Screenshot 2024-09-29 121146.png'
import tm from '@/../public/Assets/Task Management images/home page.png'
import sc from '@/../public/Assets/Shopping Kart images/homepage.png'
import Image from "next/image";
// import "./filmy-lens.css";
import Feature from "@/app/components/FeatureTab/FeatureTab";
import BackToWork from "@/app/components/BackToWork/BackToWork";
import OtherWorksCard from "@/app/components/OtherWorkscard/OtherWorksCard";
import { PT_Serif, Poppins } from "next/font/google";

const pt_serif = PT_Serif({weight:["400","700"], subsets:["latin"]})
const poppins = Poppins({weight:["300", "400"], subsets:["latin"]})

function routeOpt() {
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
        <div className="">
          <div className="">
            <p className={`${pt_serif.className} font-bold text-2xl lg:col-start-1 lg:col-end-2 text-center mb-4 p-4`}>
              Overview
            </p>
            <p className={`${poppins.className} leading-8`}>
              The Route Optimization project, conceptualized by Zapminds, aims
              to optimize logistics and delivery routes to improve efficiency
              and reduce operational costs. I collaborated with the team to
              develop the front-end using React Vite, implementing screens based
              on Figma designs provided by the team.
            </p>
          </div>
          {/* <div>
            <p className="font-bold text-2xl col-start-1 col-end-auto g:col-start-2 lg:col-end-3 text-center mb-4 p-4 ">
              Features
            </p>
            <div className="leading-8">
              <Feature>🔒 Easy sign-up for personalized experiences. </Feature>
              <Feature>
                🔍 Effortlessly find films by title, genre,etc.{" "}
              </Feature>
              <Feature>
                🎬 Access in-depth information, including ratings, cast,etc.{" "}
              </Feature>
              <Feature>
                ⭐ Curate your personal collection of must-watch movies.
              </Feature>
              <Feature>
                🎞️ Discover films through a vibrant array of genres.
              </Feature>
              <Feature>
                💻 Enjoy a flawless viewing experience on any device,
                anywhere.📱
              </Feature>
            </div>
          </div> */}
        </div>
        <div className="col-start-1 col-end-3">
          <p className={`${pt_serif.className} font-bold text-2xl text-center mb-4 p-4`}>Learnings</p>
          <div className="w-max leading-8 text-justify ml-auto mr-auto">
            <p className={`${poppins.className} font-semibold`}>React Vite: </p>
            <p className={`${poppins.className} indent-8 mb-2`}>
              {" "}
              Enhanced my skills in using React Vite to build and optimize
              front-end components for faster load times.
            </p>
            <p className={`${poppins.className} font-semibold`}>Component-based Architecture:</p>
            <p className={`${poppins.className} indent-8 mb-2`}>
              {" "}
              Strengthened my knowledge of building modular and reusable
              components to ensure clean and maintainable code.
            </p>
            <p className={`${poppins.className} font-semibold`}>Team Collaboration:</p>
            <p className={`${poppins.className} indent-8 mb-2`}>
              {" "}
              Learned to effectively communicate with designers and developers
              to implement project requirements.
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
            src={sc}
            title="Shopping Cart"
            key="shoppingCart"
            link="shopping-cart"
          />
          <OtherWorksCard
            src={tm}
            title="Task Management"
            key="taskMan"
            link="task-management"
          />
        </div>
      </div>
    </div>
  );
}

export default routeOpt;
