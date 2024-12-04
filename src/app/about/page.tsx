import Image from "next/image";
import React from "react";
import zclogo from "@/../public/Assets/Zapcom-Logo-300x60.png";
import { PT_Serif } from "next/font/google";
import ScrollingComponent from "../components/ScrollingSkills/scrolling-skills";

const pt_serif = PT_Serif({ weight: ["400", "700"], subsets: ["latin"] });

function About() {
  return (
    <div className="p-10 flex flex-col gap-14">
      <section className="w-[50%]">
        <p className={`${pt_serif.className} text-2xl font-bold`}>
          Work Experience
        </p>
        <div className="flex flex-row items-center pl-3">
          <p className="font-medium">Intern at </p>
          <div className=" mt-2">
            <Image src={zclogo} alt="zapcom logo" height={20} />
          </div>
          <p className="font-medium">(April, 24 - October, 24)</p>
        </div>
        <div className="pl-3 text-justify mt-2">
          <p className="italic mb-2">
            Gained hands-on experience in modern frontend technologies like
            React.js, Redux, and TypeScript, while improving UI implementation
            skills.
          </p>
          <p className="italic mb-2">
            Developed a keen eye for detail and usability, focusing on creating
            responsive and visually appealing interfaces.
          </p>
          <p className="italic mb-2">
            Collaboratively implemented UI screens for Route Opt,an internal
            project of Zapcom, translating Figma designs into functional React
            components.
          </p>
        </div>
      </section>
      <div className=""><ScrollingComponent /></div>
    </div>
  );
}
export default About;
