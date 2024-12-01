import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/whiteLogo.png";

interface SplashScreenProps {
	finishLoading: () => void;
}
export default function IntroScreen({ finishLoading }: SplashScreenProps) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsMounted(true);
			finishLoading();
		}, 1000);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<motion.div
			initial={{ opacity: 1 }}
			animate={{ opacity: [1, 1, 0.5, 0] }}
			transition={{ duration: 2, ease: "linear" }}
			className="bg-secondary w-screen h-screen flex justify-center items-center"
		>
			{!isMounted && <img src={logo} alt="logo" />}
		</motion.div>
	);
}
