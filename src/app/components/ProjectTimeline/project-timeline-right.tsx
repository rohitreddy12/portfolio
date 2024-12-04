import React, { ReactNode, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { TbCircleDashedNumber1 } from "react-icons/tb";  
import "./project-timeline.css";
import { motion } from "framer-motion";
import Link from "next/link";
import {Inter} from 'next/font/google'

interface TimelineProps {
  title: string;
  desc:string
  link:string
  imgSrc: StaticImageData;
  children: ReactNode
}

const inter = Inter({subsets:["latin"]})

const ProjectTimelineRight = (props: TimelineProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="project-timeline mb-4">
      <div className=" w-[400px] self-center">
        {
        show && 
        <motion.div  className="text-wrap">
            <p className={`${inter.className} project-title mb-[16px]`}>{props.title}</p>
            <motion.p className={`${inter.className} project-desc`} whileInView={{transform: "translateY(-10px)",}}>{props.desc}</motion.p>
        </motion.div>
        }
      </div>
      <div className="relative">
        <div className="project-timeline-bar h-[100%] mr-auto ml-auto "></div>
        <div className="relative bottom-[60%] text-3xl bg-white pt-4 pb-4 ">{props.children}</div>
      </div>
      
      <div className="w-[400px] h-[350px] relative">
        <Link href={`/work/${props.link}`}>
        <motion.div whileHover={{opacity:0.7}}>
          <Image
              className="project-image"
              src={props.imgSrc}
              fill
              alt="img"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            />
        </motion.div>       
        </Link>
        {/* {title && <span className="relative top-[20%] left-[25%] ">{props.title}</span>} */}
      </div>
    </div>
  );
};

export default ProjectTimelineRight;
