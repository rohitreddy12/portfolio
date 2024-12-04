import React from "react";
import "./scrolling-skills.css";
import jslogo from "@/../public/Assets/Logos/JavaScript-logo.png";
import rlogo from "@/../public/Assets/Logos/React-icon.svg.png";
import redlogo from "@/../public/Assets/Logos/redux logo.png";
import nextlogo from "@/../public/Assets/Logos/nextjs.1024x617.png";
import nodelogo from "@/../public/Assets/Logos/node_icon_196185.png";
import nestlogo from "@/../public/Assets/Logos/nestjs_logo_icon_169927.png";
import blogo from "@/../public/Assets/Logos/bootstrap_plain_wordmark_logo_icon_146620.png";
import tlogo from "@/../public/Assets/Logos/tailwindcss_logo_icon_170649.png";
import Image from "next/image";

const ScrollingComponent = () => {
  return (
    <div className="scrolling-container p-5">
      <div className="scrolling-wrapper">
        <div className="scrolling-item">
          <Image src={jslogo} alt="jslogo" />
        </div>
        <div className="scrolling-item">
          <Image src={rlogo} alt="jslogo" width={100} />
        </div>
        <div className="scrolling-item">
          <Image src={redlogo} alt="jslogo" width={100} />
        </div>
        <div className="scrolling-item">
          <Image src={nextlogo} alt="jslogo" width={100} />
        </div>
        <div className="scrolling-item">
          <Image src={nodelogo} alt="jslogo" width={100} />
        </div>
        <div className="scrolling-item">
          <Image src={nestlogo} alt="jslogo" width={100} />
        </div>
        <div className="scrolling-item">
          <Image src={blogo} alt="jslogo" width={100} />
        </div>
        <div className="scrolling-item">
          <Image src={tlogo} alt="jslogo" width={100} />
        </div>
        {/* Repeat items to create continuous scroll effect */}
        <div className="scrolling-item">
          <Image src={jslogo} alt="jslogo" />
        </div>
        <div className="scrolling-item">
          <Image src={rlogo} alt="jslogo" width={100} />
        </div>
        <div className="scrolling-item">
          <Image src={redlogo} alt="jslogo" width={100} />
        </div>
        <div className="scrolling-item">
          <Image src={nextlogo} alt="jslogo" width={100} />
        </div>
        <div className="scrolling-item">
          <Image src={nodelogo} alt="jslogo" width={100} />
        </div>
        <div className="scrolling-item">
          <Image src={nestlogo} alt="jslogo" width={100} />
        </div>
        <div className="scrolling-item">
          <Image src={blogo} alt="jslogo" width={100} />
        </div>
        <div className="scrolling-item">
          <Image src={tlogo} alt="jslogo" width={100} />
        </div>
      </div>
    </div>
  );
};

export default ScrollingComponent;
