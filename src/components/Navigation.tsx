import { useState } from "react";
import AnimNav from "./AnimNav";
import { motion, useScroll, useTransform } from "framer-motion";
import { balloon } from "../animate";
import { useMediaQuery } from "react-responsive";
import logo from "../assets/whiteLogo.png";

export default function Navigation() {
	const [open, setOpen] = useState(false);
	const { scrollYProgress } = useScroll();
	const moveUp = useTransform(scrollYProgress, [0,0.04],[0,-80] );
	const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

	function toggleMenu() {
		const isOpening = !open;
		setOpen(isOpening);
		if (isOpening) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY ="";

		}
	}

	return (
		<div className=" mx-auto w-[85vw] max-w-[1000px] pt-[30px]">
			<motion.div className="flex lg:gap-[30%] justify-between "
			style={{ y: isLargeScreen ?  moveUp : "0" }}
			>
				<motion.img
					variants={balloon}
					initial="initial"
					animate="enter"
					src={logo}
					className="w-[55px] sm:w-[75px] lg:w-[90px] h-auto"
					alt="logo"
				/>
				<AnimNav open={open} toggleMenu={toggleMenu} />
				<motion.div
					initial={{opacity: 0,x:100}}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						duration: 1, 
						ease: "easeOut",  
					}}
					className={`lg:hidden z-50 ${open ? "fixed right-[7.6vw]" : "relative "}`}
				>
					<button
						aria-label="toggleMenu"
						onClick={toggleMenu}
						className={`w-[30px] h-[20px]  flex justify-between flex-col 
							transition-transform duration-[330ms]
							 ${open && "-rotate-45"}`}
					>
						<div
							className={`rounded-[5px]  w-1/2 h-[3px] bg-white [transition:transform_330ms_cubic-bezier(0.54,_-0.81,_0.57,_0.57)] origin-right ${
								open && "-rotate-90 translate-y-[8.5px]"
							}`}
						></div>
						<div className="rounded-[5px] w-full  h-[3px] bg-white "></div>
						<div
							className={`rounded-[5px]  self-end w-1/2 h-[3px] bg-white [transition:transform_330ms_cubic-bezier(0.54,_-0.81,_0.57,_0.57)] origin-left ${
								open && "-rotate-90 -translate-y-[8.5px]"
							}`}
						></div>
					</button>
				</motion.div>

			</motion.div>
		</div>
	);
}
