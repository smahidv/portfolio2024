import React, { useState, useEffect } from "react";
import pinkstar from "../assets/star.png";
import { motion } from "framer-motion";
import WhiteStar from "../assets/whiteStar.png";

interface StarProps {
  className: string;
  isWhite?: boolean;
}

const Star: React.FC<StarProps> = ({ className, isWhite }) => {
  const [delay, setDelay] = useState(Math.random() * 10);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelay(Math.random() * 3); // Update delay after the current cycle
    }, (delay * 2 ) * 1000); // Full delay + duration

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
      <motion.img
        key={delay}
        src={isWhite ? WhiteStar : pinkstar}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          repeatDelay: delay, 
          repeat: Infinity,
          repeatType: "reverse",
        }}
        alt="shining star"
        className={className}
      />
  );
};

export default Star;
