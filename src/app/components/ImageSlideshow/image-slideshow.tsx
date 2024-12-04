"use client";

import React, { useEffect, useState } from "react";
import "./image-slideshow.css";
import mainImg1 from "@/../public/Assets/Filmy lens images/Home Page.png"
import mainImg2 from "@/../public/Assets/Route opt images/Screenshot 2024-09-29 121146.png";
import mainImg3 from "@/../public/Assets/Shopping Kart images/homepage.png";
import mainImg4 from "@/../public/Assets/Task Management images/home page.png";
import Image from "next/image";

interface CarouselImages {
  id: number;
  src: any;
}

const ImageCarousel = () => {
  const carouselImages: CarouselImages[] = [
    { id: 1, src: mainImg1 },
    { id: 2, src: mainImg2 },
    { id: 3, src: mainImg3 },
    { id: 4, src: mainImg4 },
  ];

  const [imageIndex, setImageIndex] = useState<number>(0);
  const [displayText, setDisplayText] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      className="carousel"
      src={carouselImages[imageIndex].src}
      alt="Image"
      fill
      style={{ borderRadius: "20px" }}
    />
  );
};

export default ImageCarousel;
