"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import Image from "next/image";
import ImageCarousel from "./components/ImageSlideshow/image-slideshow";
import bg from "@/../public/Assets/main-page-bg1.webp";
import {PT_Serif} from 'next/font/google'

import "./page.css";
import { useEffect, useState } from "react";
import Link from "next/link";

const pt_serif = PT_Serif({weight:["400","700"], subsets:["latin"]})

export default function Home() {


  return (
    <motion.div className="main w-[100%]" >
      <section className="first-section">
        <div className=" absolute left-[30%] top-[25%] right-[20%] z-20 text-white ">
          <h1 className={`${pt_serif.className}  md:text-4xl  lg:text-5xl mb-6`}>
            Showcasing my skills and projects.
          </h1>
          <p className={`${pt_serif.className} md:text-lg  lg:text-xl`}>
            Let's dive into what I have done through my internship.{" "}
          </p>
        </div>
        <div className=" bg-image relative top-0 w-[100%] h-[28rem]">
          <Image src={bg} alt="bgImg" fill placeholder="blur" />
        </div>
      </section>
      

      <div className="main-page pb-8" >
        <section className="second-section mt-8 pl-5 pr-5 pt-5">
          <div className="mb-5">
            <p className={`${pt_serif.className} text-3xl font-medium`}>Introduction</p>
            <p className={` text-xl font-light`}>
              This section tells a little about me.
            </p>
          </div>
          <div className="flex justify-around">
            <div className="relative w-[30%] h-[20rem] md:w-[36%] ">
              <ImageCarousel />
            </div>
            <div className="self-center w-[36%] ">
              <p className={`${pt_serif.className} font-medium text-2xl mb-5 `}>To Start With...</p>
              <p className={`${pt_serif.className} intro-para tracking-wider leading-6`}>
                Hi there! 👋 Over the past six months, I’ve had the chance to
                intern at Zapcom, where I focused on honing my frontend
                development skills. During this time, I worked on a range of
                basic but valuable projects that helped me grow as a developer.
                I’m excited to share what I’ve learned and accomplished during
                my internship.
              </p>
            </div>
          </div>
        </section>

        <motion.section whileHover={{backgroundColor:"orange",boxShadow:"5px 5px #64b5f6" }} initial={{transform:"rotate(-5deg)"}} whileInView={{transform:"rotate(0deg)"}} viewport={{once:true}}
          className="project-section flex lg:w-[65%] md:w-[75%] ml-auto mr-auto justify-around mt-20 bg-blue-300 pt-6 pb-6" 
        >
          <motion.div >
            <p className={`${pt_serif.className} font-medium text-xl`}>Ready to explore my projects?</p>
            <p className="text-lg font-light">
              Check out the work that I have done during my intership.
            </p>
          </motion.div>
          <div className="view-projects self-center">
            <Link href={"/work"} scroll={false}>
              <button color="black" className={`${pt_serif.className} bg-white rounded-xl p-2`}>View Projects</button>
            </Link>
          </div>
        </motion.section>
      

        {/* <section>
          <p>fweqgtara</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            reiciendis suscipit, ut error ipsa modi quia! A temporibus harum
            dicta nam sunt deserunt, rem, numquam obcaecati odio quasi ea iusto
            exercitationem doloribus consequatur incidunt officia tempore
            eveniet fugit, repellendus molestiae!
          </p>
        </section> */}
      </div>
    </motion.div>
  );
}
