import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PT_Serif } from 'next/font/google'

const pt_serif = PT_Serif({subsets:["latin"], weight:["400","700"]})

interface Props{
    src:StaticImageData,
    title:string
    link:string
}
function OtherWorksCard(props:Props) {
  return (
    <div className='w-[250px]'>
        <Link href={`/work/${props.link}`}><motion.div 
        whileHover={{scale:1.1}}
        initial={{ transform: "translateY(20px)" }}
        whileInView={{ transform: "translateX(0px)" }}>
        <Image src={props.src} alt={props.title} />
        </motion.div></Link>
        <p className={`${pt_serif.className} text-center`}>{props.title}</p>
    </div>
  )
}

export default OtherWorksCard