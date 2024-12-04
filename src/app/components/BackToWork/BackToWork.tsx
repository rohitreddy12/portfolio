"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { TbArrowLeftToArc } from "react-icons/tb";

const BackToWork = () => {
    const [display, setdisplay] = useState<"none" | "block">("none")
  return (
    <div className="relative pl-10 top-4 gap-1 flex">
      <Link href={"/work"}>
        <motion.button
          className="back text-3xl"
          whileHover={{ opacity: 0.5 }}
        >
          <TbArrowLeftToArc />
        </motion.button>
      </Link>
      {/*   <p className="items-center" onMouseEnter={() => setdisplay("block")} onMouseLeave={() => setdisplay("none")} style={{display:display}}>Back to work</p> */}
    </div>
  );
};

export default BackToWork;
