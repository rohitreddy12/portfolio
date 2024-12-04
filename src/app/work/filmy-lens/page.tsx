"use client";
import ImageSlider from "@/app/components/ImageSlider/ImageSlider";
import React, { useEffect, useState } from "react";
import sideImg1 from "@/../public/Assets/Filmy lens images/Home Page.png";
import sideImg2 from "@/../public/Assets/Filmy lens images/filmy lens recording - frame at 0m33s.jpg";
import sideImg3 from "@/../public/Assets/Filmy lens images/filmy lens recording - frame at 0m37s.jpg";
import sideImg4 from "@/../public/Assets/Filmy lens images/filmy lens recording - frame at 1m16s.jpg";
import sideImg5 from "@/../public/Assets/Filmy lens images/filmy lens recording - frame at 0m21s.jpg";
import sideImg6 from "@/../public/Assets/Filmy lens images/filmy lens recording - frame at 0m17s.jpg";

// import bg from "@/../public/Assets/moroccan-flower.png"
import Image from "next/image";
import fl from '@/../public/Assets/Filmy lens images/Home Page.png'
import ro from '@/../public/Assets/Route opt images/Screenshot 2024-09-29 121146.png'
import tm from '@/../public/Assets/Task Management images/home page.png'
import sc from '@/../public/Assets/Shopping Kart images/homepage.png'
import './filmy-lens.css'
import Feature from "@/app/components/FeatureTab/FeatureTab";
import BackToWork from "@/app/components/BackToWork/BackToWork";
import OtherWorksCard from "@/app/components/OtherWorkscard/OtherWorksCard";
import { PT_Serif, Poppins } from "next/font/google";

const pt_serif = PT_Serif({weight:["400","700"], subsets:["latin"]})
const poppins = Poppins({weight:["300", "400"], subsets:["latin"]})

function movieSearch() {
  const styling={
    // backgroundImage: `url(${bg.src})`,
    // width: '100%',
    // height: '100%',
  }
  return (
    <div className="">
      <BackToWork />
      <ImageSlider>
        <Image src={sideImg4} alt="Image" height={350} width={700} />
        <Image src={sideImg3} alt="Image" height={350} width={700} />
        <Image src={sideImg2} alt="Image" height={350} width={700} />
        <Image src={sideImg6} alt="Image" height={350} width={700} />
        <Image src={sideImg5} alt="Image" height={350} width={700} />
        <Image src={sideImg1} alt="Image" height={350} width={700} />
      </ImageSlider>
      <div style={styling} className="project-outcome grid grid-rows-1 grid-cols-1 gap-10 w-[80%] text-justify ml-auto mr-auto mb-5">
        <div className=" grid lg:grid-cols-2 gap-10">
          <div className="">
            <p className={`${pt_serif.className} font-bold text-2xl lg:col-start-1 lg:col-end-2 text-center mb-4 p-4 `}>
              Overview
            </p>
            <p className={`${poppins.className} leading-8`}>
              Filmy Lens is a dynamic movie search application developed using
              React.js. The platform allows users to sign up and sign in to
              explore a vast database of movies, where they can search for their
              favorites, view detailed information, and manage their personal
              watchlist. With an intuitive user interface and responsive design,
              Filmy Lens enhances the movie discovery experience by categorizing
              films based on genres and allowing users to save their preferred
              titles to a favorites list. 
            </p>
          </div>
          <div>
            <p className={`${pt_serif.className} font-bold text-2xl col-start-1 col-end-auto g:col-start-2 lg:col-end-3 text-center mb-4 p-4 `}>
              Features
            </p>
            <div className="leading-8">
              <Feature>🔒 Easy sign-up for personalized experiences. </Feature>
              <Feature>🔍 Effortlessly find films by title, genre,etc. </Feature>
              <Feature>🎬 Access in-depth information, including ratings, cast,etc. </Feature>
              <Feature>⭐ Curate your personal collection of must-watch movies.</Feature>
              <Feature>🎞️ Discover films through a vibrant array of genres.</Feature>
              <Feature>💻 Enjoy a flawless viewing experience on any device, anywhere.📱</Feature>
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-3">
          <p className={`${pt_serif.className} font-bold text-2xl text-center mb-4 p-4`}>Learnings</p>
          <div className="w-max leading-8 text-justify ml-auto mr-auto">
            <p className={`${poppins.className} font-semibold`}>React and Redux: </p><p className={`${poppins.className} indent-8`}> Built a dynamic UI and managed state efficiently for movie searches and favorites.</p>
            <p className={`${poppins.className} font-semibold`}>API Integration:</p><p className={`${poppins.className} indent-8`}> Integrated third-party APIs to fetch real-time movie data and validate user credentials.</p>
            <p className={`${poppins.className} font-semibold`}>Responsive Design:</p><p className={`${poppins.className} indent-8`}> Applied Bootstrap to create responsive components for better user experience.</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-[85%] ml-auto mr-auto mt-5">
        <h1 className={`${pt_serif.className} font-bold text-2xl`}>Other Works</h1>
        <div className="flex gap-5 p-5 justify-around   ">
          <OtherWorksCard src={ro} title="Route Opt" key="routeOpt" link="route-opt" />
          <OtherWorksCard src={sc} title="Shopping Cart" key="shoppingCart" link="shopping-cart" />
          <OtherWorksCard src={tm} title="Task Management" key="taskMan" link="task-management" />
        </div>
      </div>
    </div>
  );
}

export default movieSearch;
