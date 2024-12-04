"use client";
import Image from "next/image";
import React, { useState } from "react";
import mainImg1 from "@/../public/Assets/Filmy lens images/Home Page.png";
import mainImg2 from "@/../public/Assets/Route opt images/Screenshot 2024-09-29 121146.png";
import mainImg3 from "@/../public/Assets/Shopping Kart images/homepage.png";
import mainImg4 from "@/../public/Assets/Task Management images/home page.png";
import Link from "next/link";
import './work.css'
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { TbCircleDashedNumber1, TbCircleDashedNumber2, TbCircleDashedNumber3, TbCircleDashedNumber4 } from "react-icons/tb"; 
import ProjectTimelineRight from "../components/ProjectTimeline/project-timeline-right";
import ProjectTimelineLeft from "../components/ProjectTimeline/project-timeline-left";


export default function Work() {
  // const [first, setfirst] = useState('fkn next')
  return (
    <div className="p-4">
      <section className="work-intro text-center text-xl mt-3 ">
        <p>Let's take a peek at the frontend projects I tackled during my
        internship &#128187;.</p> 
        <p>These are the creations that brought my code to
        life &#127775;.</p>
        <p>Dive in and see how I transformed lines of code into
        vibrant, interactive experiences! &#128640; </p>
      </section>
      <section className="mt-10 flex flex-col">

        <div className=""><FaRegArrowAltCircleDown style={{margin:"8px auto",fontSize:"26px"}} /></div>
        <div className="project-timeline-bar h-40 ml-auto mr-auto p-0"></div>

        <ProjectTimelineLeft key='project1' imgSrc={mainImg2} title="Route Optimisation" link="route-opt" desc="A Zapminds idea to create a generic app for optimized routes.Some screens render the code that I have written."> <TbCircleDashedNumber1 />  </ProjectTimelineLeft>
        
        <ProjectTimelineRight key='project2' imgSrc={mainImg1} title="Filmy Lens" link="filmy-lens" desc="An application to explore movies, favourite them, find more about them and finding more of them! " > <TbCircleDashedNumber2 /> </ProjectTimelineRight>

        <ProjectTimelineLeft key='project3' imgSrc={mainImg4} title="Task Management" link="task-management" desc="Built to manage users and their tasks. " > <TbCircleDashedNumber3 /> </ProjectTimelineLeft>
        
        <ProjectTimelineRight key='project4' imgSrc={mainImg3} title="Shopping Kart" link="shopping-cart" desc="A minimal cart app allows user to shop products." > <TbCircleDashedNumber4 /> </ProjectTimelineRight>


      </section>     
    </div>
  );
}
