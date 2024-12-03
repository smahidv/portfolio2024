import { motion } from "framer-motion";

type AnimatedTitleProps = {
  title: string,
  isEdu?:boolean
};

export default function AnimatedTitle({ title,isEdu }: AnimatedTitleProps) {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  return (
    
    <motion.div
      className={`text-secondary  md:text-2xl lg:text-3xl w-fit font-black uppercase text-xl  ${!isEdu ? "mb-6 md:mb-10 lg:mb-14" : ""}`}
        initial="initial"
       whileInView="hovered"      
    >
      <span className="sr-only">{title}</span>
      <span   
        className="block leading-4 md:leading-5 lg:leading-6 pointer-events-none  overflow-hidden "
        aria-hidden
      >
        {title.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              initial: {
                y: "-100%",
              },
              hovered: {
                y: 0,
              }
            }} 
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            data-letter={char}
            className="relative inline-block 
              after:absolute after:left-0 after:top-full leading-4 md:leading-5 lg:leading-6 
              after:h-full after:content-[attr(data-letter)] after:pointer-events-none "
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </motion.div>
  );
}
