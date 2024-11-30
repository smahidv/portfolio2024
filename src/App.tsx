import "./App.css";
import InfiniteSkills from "./components/InfiniteSkills";
import Navigation from "./components/Navigation";
import NavigationFooter from "./components/NavigationFooter";
import Projects from "./components/Projects";
import { skills, frontend, backend } from "./constants";
import { BrowserRouter } from "react-router-dom";
import characterEdu from "../src/assets/characterEdu.png";
import partner from "../src/assets/partner.png";
import infiniteBorder from "../src/assets/infiniteBorder.png";
import git from "../src/assets/git.png";
import react from "../src/assets/react.png";
import vercel from "../src/assets/vercel.png";
import ContactUs from "./components/ContactUs";
import { SuccesContextProvider } from "./hooks/SuccesContext";
import Toast from "./components/Toast";
import AnimatedCounter from "./components/AnimatedCounter";
import AnimatedTitle from "./components/AnimatedTitle";
import { useEffect, } from "react";
import Lenis from "lenis";
import FadeOut from "./components/FadeOut";
import { motion } from "framer-motion";
import { fadeOut, translate } from "./animate";
import Star from "./components/Star";
import SplashScreenManager from "./utils/SplashScreenManager";

function App() {
	
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);

			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);


	return (
		<SuccesContextProvider>
			<BrowserRouter>
				<SplashScreenManager>
				<div></div>
					</SplashScreenManager>
			</BrowserRouter>
		</SuccesContextProvider>
	);
}

export default App;
