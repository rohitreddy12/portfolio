import { motion } from "framer-motion";
import React, { Children, ReactNode } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({weight:["300","400"], subsets:["latin"]})

interface Props {
  children: ReactNode;
}
function Feature(props: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
      }}
      initial={{ transform: "translateX(100px)" }}
      whileInView={{ transform: "translateX(0px)" }}
      viewport={{ once: true}}
      className={`${poppins.className} p-2 bg-yellow-100 rounded-xl text-center max-w-[80%] ml-auto mr-auto mb-2 mt-2 `}
    >
      {props.children}
    </motion.div>
  );
}

export default Feature;
