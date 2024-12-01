import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import AnimatedButton from "./AnimatedButton";
import characterHeader from "../assets/character.png"
import { useMediaQuery } from "react-responsive";

export default function FadeOut() {
	const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8, y: 80 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			transition={{
				duration: 0.5,
				delay: isBigScreen ? 3 : 1,
				ease: "easeOut",
			}}
			className="relative top-[81px] xs:top-[141px] md:top-[222px] lg:top-[375px]"
		>
			<div className="bg-white/10 absolute pt-4 px-4 md:pt-8 md:px-8 lg:pt-10 lg:px-10 bottom-0 rounded-t-full  w-[200px]  h-[100px] xs:w-[250px] xs:h-[125px]  md:w-[490px] md:h-[240px] lg:w-[730px] lg:h-[360px] left-1/2 -translate-x-1/2  ">
				<div className="bg-white rounded-t-full size-full"></div>
			</div>
			<div className="bg-gradient-to-b shadow-2xl from-primaryLight to-primaryLighter z-20  absolute py-6 px-3 lg:pr-8 lg:pl-8 md:py-12 bottom-0 translate-y-[62%] lg:translate-y-[10%] left-1/2 -translate-x-1/2 w-[80%] max-w-[320px] md:max-w-[660px]   rounded-[23px]  md:rounded-[40px] ">
				<div className=" flex justify-between items-center">
					<div className="space-y-1">
						<div className="text-[0.6rem] leading-[12px]   md:text-xl lg:text-2xl  font-bold text-secondary capitalize">
							oumaima <br /> smahi
						</div>
						<div className="mobi:text-[0.5rem]  text-[0.4rem]  text-secondary  font-normal md:text-base  capitalize">
							full stack developer
						</div>
					</div>
					<AnimatedButton />
				</div>
				<div className="absolute rounded-full bg-gradient-to-b from-primaryLighter to-white  size-[118px] xs:size-[135px]   md:size-[280px] bottom-[7px] lg:bottom-[10%]  left-1/2 -translate-x-1/2"></div>
				<div
					className="absolute z-40 bottom-0 left-1/2 -translate-x-1/2"
				>
					<img
						className="w-[125px] xs:w-[142px] md:w-[290px] h-auto"
						src={characterHeader}
						alt="girl smiling"
					/>
				</div>
			</div>
			<div className="bg-gradient-to-b from-primary to-primaryLight absolute left-1/2 -bottom-[90px] lg:-bottom-[100px] xl:-bottom-[211px] md:-bottom-[170px] -translate-x-1/2  max-w-[377px]  shadow-2xl   xl:-translate-y-24  rounded-[23px]  md:rounded-[40px]    md:max-w-[1124px] w-[92vw] mx-auto h-[90px] md:h-[170px] lg:h-[200px]">
				<div className="absolute bottom-2 xs:bottom-2 sm:bottom-[0.6rem] lg:bottom-[1.2rem] xl:bottom-6  left-1/2 -translate-x-1/2 whitespace-nowrap">
					<div className="text-white text-[0.9rem] md:text-2xl xl:text-3xl uppercase font-bold  ">
						<span>i'm a</span>{" "}
						<Typewriter
							words={[
								"software engineer",
								"frontend developer",
								"backend developer",
							]}
							loop={true}
							cursor
							cursorStyle="|"
							typeSpeed={150}
							deleteSpeed={50}
							delaySpeed={1000}
						/>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
