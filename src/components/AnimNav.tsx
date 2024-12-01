import { HashLink as Link } from "react-router-hash-link";
import { menuItems } from "../constants";
import { AnimatePresence, motion } from "framer-motion";
import { balloonSlide, menuSlide, reset, slide, trampoline } from "../animate";
import { useEffect, useState } from "react";
import Curve from "./Curve";

interface AnimNavType {
	open: boolean;
	toggleMenu: () => void;
}

export default function AnimNav({ open, toggleMenu }: AnimNavType) {

	const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
	const currentHash = window.location.hash;
	console.log(currentHash);
	

	useEffect(() => {
		const handleResize = () => setIsLgScreen(window.innerWidth >= 1024);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);


	return (
		<AnimatePresence>
			{(open || isLgScreen) && (
				<motion.nav
					variants={isLgScreen ? reset : menuSlide}
					initial="initial"
					animate="enter"
					exit="exit"
					className={`lg:flex-grow fixed inset-0 pt-[160px] lg:py-0 px-6 lg:px-0  z-20  lg:block lg:min-h-fit lg:w-fit lg:static lg:shadow-none ${
						open && !isLgScreen
							? "shadow-[0_0_0_9999px_#000000b0] h-screen w-screen   bg-secondary  "
							: "hidden"
					} z-50  lg:bg-transparent text-white  `}
				>
					<div className="lg:hidden mb-10  border-b-[0.5px] border-gray-400 pb-4 text-gray-400 uppercase text-xs">
						Navigation
					</div>
					<ul className="flex flex-col lg:flex-row  lg:gap-12  ">
						{menuItems.map((item, i) => (
							<motion.li
								key={i}
								custom={i}
								variants={
									isLgScreen
										? menuItems.length - 1 === i
											? balloonSlide 
											: trampoline 
										: slide 
								}
								initial="initial"
								animate="enter"
								exit="exit"
								className={`${menuItems.length - 1 === i && "lg:ml-auto lg:bg-gradient-to-tr lg:from-primary lg:to-primaryLight  lg:px-3 lg:py-0.5 lg:rounded-sm  "}`}
							>
								<Link
									onClick={toggleMenu}
									smooth
									to={item.to}
									className={`text-[2.4rem] lg:text-base capitalize font-[500] ${menuItems.length - 1 === i && "lg:font-bold lg:text-sm  "} ${isLgScreen && currentHash === item.to ? "text-primaryLight/90 hover:text-primaryLight " : "text-white/90 hover:text-white"}`}
								>
									{item.name}
								</Link>
							</motion.li>
						))}
					</ul>
					{!isLgScreen && <Curve/>}
				</motion.nav>
			)}
		</AnimatePresence>
	);
}
