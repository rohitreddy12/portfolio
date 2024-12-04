"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import './navbar.css'
import { motion } from 'framer-motion'
import { Playfair_Display } from 'next/font/google'

const grandStander = Playfair_Display({weight:['500', '400'], subsets:['latin']})

const Navbar = () => {
    const pathname = usePathname()

    
  return (
    <div className='border-b-[1px] border-black'>
        <ul className='flex  justify-between pt-2 pb-2 mr-8 h-20 bg-white items-center font-normal text-xl'>
            <span className={`${grandStander.className} italic ml-8 text-3xl`}>Rohit Reddy</span>
            <div className='flex gap-10 '>
                <Link href='/' className={`${grandStander.className} p-2 ${pathname === '/' ? 'active' : ''}`}><motion.p id='navbarItem' className='font-semibold mb-2' whileHover={{scale:1.1}} whileTap={{scale:0.9}} >Home</motion.p></Link>
                <Link href='/work' className={`${grandStander.className} p-2 ${pathname.includes('/work') ? 'active' : ''}`} ><motion.p id='navbarItem' className='font-semibold' whileHover={{scale:1.1}} whileTap={{scale:0.9}}>Work</motion.p></Link>
                <Link href='/about' className={`${grandStander.className} p-2 ${pathname.includes('/about') ? 'active' : ''}`}><motion.p id='navbarItem'className='font-semibold' whileHover={{scale:1.1}} whileTap={{scale:0.9}}>About</motion.p></Link>
                <Link href='/contact' className={`${grandStander.className} font-normal p-2 ${pathname.includes('/contact') ? 'active' : ''}`}><motion.p id='navbarItem'className='font-semibold' whileHover={{scale:1.1}} whileTap={{scale:0.9}}>Contact</motion.p></Link>
            </div>
            
        </ul>
    </div>
  )
}

export default Navbar