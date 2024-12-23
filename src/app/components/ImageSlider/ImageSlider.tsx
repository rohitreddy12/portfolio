"use client"
import Image from 'next/image'
import React, { ReactElement, ReactNode, useEffect, useState } from 'react'
import './imageSlider.css'
import { PiCaretCircleLeftLight, PiCaretCircleRightLight } from "react-icons/pi";
// import sideImg1 from "@/app/Assets/main-page-bg.webp";
// import sideImg2 from "@/app/Assets/main-page-bg2.webp";
// import sideImg3 from "@/app/Assets/main-page-bg4.webp";
// import sideImg4 from "@/app/Assets/main-page-bg5.webp";
import { motion } from 'framer-motion'

interface Props{
    children:ReactNode
}

function ImageSlider(props:Props) {
    const length = React.Children.count(props.children)
    const imgArray = React.Children.toArray(props.children)

    const initialIndexArr = Array.from({length:length}, (v,index) => 5*(5-index))
    const initialTransformArr = Array.from({length:length}, (v,index) => (index)*1)
    const intialOpacityArr = Array.from({length:length}, (v,index) => 1-(0.3*index))

    const [zIndex, setzIndex] = useState<number[]>(initialIndexArr)
    const [transform, setTransform] = useState(initialTransformArr)
    const [opacity, setOpacity] = useState(intialOpacityArr)

    function shiftRight(arr:any){
        const newArr = [...arr]
        newArr.push(arr[0])
        newArr.shift()
        return newArr
    }

    function shiftLeft(arr:any){
        const newArr = [...arr]
        const item = newArr.pop()
        newArr.unshift(item)
        return newArr
    }

    const handlePrevImage = () => {
        const newIndex = shiftRight(zIndex)
        const newTransform = shiftRight(transform)
        const newOpacity = shiftRight(opacity)
        setzIndex(newIndex)   
        setTransform(newTransform)     
        setOpacity(newOpacity) 
    }

    const handleNextImage = () => {
        const newIndex = shiftLeft(zIndex)
        const newTransform = shiftLeft(transform)
        const newOpacity = shiftLeft(opacity)
        setzIndex(newIndex)
        setTransform(newTransform)
        setOpacity(newOpacity)
    }

  return (
    <div className='relative ml-auto mr-auto mt-5 mb-5 w-[700px] h-[500px] '>
        <button onClick={handlePrevImage}><PiCaretCircleLeftLight size={40} className='absolute top-[50%] left-0 z-50' /></button>
        {
            imgArray.map((image,index) => 
                <motion.div key={index} style={{
                    zIndex: zIndex[length-index-1],
                    transform: `rotate(${transform[length - index - 1]}deg) `,
                    opacity: opacity[length - index - 1]
                }} className={`absolute top-0 ` }>{image}
                </motion.div>
            )
        }
        <button onClick={handleNextImage}><PiCaretCircleRightLight size={40} className='absolute top-[50%] right-0 z-50'/></button>
    </div>
  )
}

export default ImageSlider