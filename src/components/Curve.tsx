import {  motion } from "framer-motion";
import { curve } from "../animate";

export default function Curve() {

	return (
		<svg className="absolute top-0 left-[-99px] w-[100px] h-full fill-secondary stroke-none ">
			<motion.path  variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
		</svg>
	);
}
