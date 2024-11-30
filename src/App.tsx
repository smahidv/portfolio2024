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
import FidgetSpinner from "../src/assets/FidgetSpinner.png";
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
					<div id="home" className="relative">
						<header className="relative">
							<div className="relative bg-hero bg-no-repeat  w-screen  bg-[length:100vw_140px] h-[140px] xs:bg-[length:100vw_200px] xs:h-[200px] md:bg-[length:100vw_280px] md:h-[280px]   lg:bg-[length:100vw_450px] lg:h-[450px]">
								<Navigation />
								<FadeOut />
							</div>
							<div className="mx-auto w-[92vw] max-w-[377px]  md:max-w-[1124px] md:mt-[245px] lg:mt-[200px] mt-[128px] mb-[36px] md:mb-[83px] lg:mb-[109px] xl:mb-[90px] ">
								<div className="flex justify-between ">
									<div className="text-center font-black">
										<div className="text-2xl md:text-4xl lg:text-5xl">
											+ <AnimatedCounter from={0} to={10} />
										</div>
										<div className="text-[0.55rem] md:text-base lg:text-lg  uppercase max-w-[150px]">
											completed <br /> projects
										</div>
									</div>
									<div className="text-center font-black">
										<div className="text-2xl md:text-4xl lg:text-5xl">
											+ <AnimatedCounter from={0} to={3} />
										</div>
										<div className="text-[0.55rem] md:text-base lg:text-lg   uppercase max-w-[150px]">
											years <br /> experience
										</div>
									</div>
									<div className="text-center font-black">
										<div className="text-2xl md:text-4xl lg:text-5xl">
											+ <AnimatedCounter from={0} to={4} />
										</div>
										<div className="text-[0.55rem] md:text-base lg:text-lg  uppercase max-w-[150px]">
											programming <br /> languages
										</div>
									</div>
								</div>
							</div>
							<div className=" mb-[43px] md:mb-[83px] lg:mb-[109px] xl:mb-[90px] ">
								<InfiniteSkills />
							</div>
							<Star className="absolute w-[18px] md:w-[36px] lg:w-[50px] top-[30%] left-[2.5%] " />
							<Star className="absolute w-[15px] md:w-[26px] lg:w-[45px]  top-[26%] right-[4.2%] xs:top-[35%] md:top-[26%] lg:top-[33%] " />
							<Star className="absolute w-[10px] md:w-[22px] lg:w-[30px] bottom-[30.5%] right-[35%]" />
							<Star className="absolute w-[10px] md:w-[22px] lg:w-[30px] bottom-[30.5%] right-[35%]" />
							<Star className="absolute w-[10px]  md:w-[22px] lg:w-[30px] bottom-[14%] right-[68%] sm:right-[60%] md:right-[68%] xl:right-[64%]" />
						</header>
						<main>
							{/* ********************************* about me ********************************************* */}
							<div
								id="aboutMe"
								className="mx-auto w-[92vw] max-w-[1124px] relative "
							>
								<AnimatedTitle title="about me" />
								<div className="flex flex-col lg:flex-row gap-4">
									<div className="lg:basis-[50%] bg-gradient-to-t p-6 shadow-2xl from-primary to-primaryLight rounded-[2.5em] flex items-center">
										<div>
											<motion.div
												{...fadeOut}
												className="text-sm text-left lg:text-left text-white font-medium"
											>
												Hi, <span className="font-bold">I'm Oumaima</span>, a
												passionate software engineer with{" "}
												<span className="font-bold">
													over 4 years of experience
												</span>{" "}
												in frontend development. I specialize in crafting
												visually appealing, high-performance websites with a
												strong focus on{" "}
												<span className="font-bold">
													responsiveness, accessibility, and user experience.
												</span>
												<br />I build{" "}
												<span className="font-bold">clean, maintainable</span>{" "}
												code that ensures projects are scalable, easy to work
												on, and ready for the future.
											</motion.div>

											<div
												translate="no"
												className="grid grid-cols-2 mt-4 gap-3 "
											>
												{skills.map((item, i) => (
													<motion.div
														variants={translate}
														initial="initial"
														whileInView="enter"
														custom={i}
														key={i}
														className=" py-[6px] px-6 border-white border   rounded-full font-bold text-center text-[0.5rem] xs:text-[0.7rem] sm:text-sm capitalize text-white "
													>
														{item}
													</motion.div>
												))}
											</div>
										</div>
									</div>
									<div className="lg:basis-[50%] space-y-4">
										<div className=" px-6 py-4 pb-6  bg-skillsBG  bg-center bg-[length:100%_100%]  bg-no-repeat ">
											<div className="text-white text-center text-lg capitalize font-semibold mb-2">
												frontend skills
											</div>
											<div className="grid grid-cols-5 gap-x-3 gap-y-1 py-2  md:gap-3   ">
												{frontend.map((item, i) => {
													const span =
														(i + 1) % 4 < 2
															? "bg-primaryLight col-span-3"
															: " bg-white col-span-2";
													return (
														<motion.div
															variants={translate}
															initial="initial"
															whileInView="enter"
															custom={i}
															key={i}
															translate="no"
															className={`py-[3px] md:py-2    rounded-full font-bold text-center text-xs text-secondary md:text-sm  ${span}`}
														>
															{item}
														</motion.div>
													);
												})}
											</div>
										</div>

										<div className=" px-6 py-4 pb-6  bg-skillsBG bg-center bg-[length:100%_100%]  bg-no-repeat ">
											<div className="text-white text-center text-lg capitalize font-semibold mb-2">
												backend skills
											</div>
											<div className="grid grid-cols-5 gap-x-3 gap-y-1 py-2 md:gap-3 ">
												{backend.map((item, i) => {
													const span =
														(i + 1) % 4 < 2
															? "bg-primaryLight col-span-3"
															: " bg-white col-span-2";
													return (
														<motion.div
															variants={translate}
															initial="initial"
															whileInView="enter"
															custom={i}
															key={i}
															translate="no"
															className={`py-[3px] md:py-2 text-xs md:text-sm  rounded-full font-bold text-center  text-secondary   ${span}`}
														>
															{item}
														</motion.div>
													);
												})}
											</div>
										</div>
									</div>
								</div>
								{/*about me  stars */}
								<Star className="absolute w-[20px] md:w-[26px] lg:w-[45px]  -top-[3%] left-[7.5%] sm:-top-[3.5%] sm:left-[4.2%] lg:left-[56%]  lg:top-[3.5%] " />
								<Star className="absolute w-[14px] md:w-[22px] lg:w-[30px] top-[2%] right-[12%] sm:w-[20px] sm:right-[7%] sm:-top-[1%] " />
								<Star className="absolute w-[10px]  md:w-[22px] lg:w-[30px] -bottom-[6%] left-[37%]  lg:-bottom-[15%]" />
							</div>
							{/* *********************************education********************************************* */}
							<div className="mx-auto w-[92vw] max-w-[1124px] md:mt-48 mt-24">
								<AnimatedTitle title="education" />
								<div className="relative bg-educationBG  bg-[length:100%_400px] h-[400px] md:bg-[length:100%_650px] md:h-[650px] bg-no-repeat">
									<div className="absolute -top-12 md:-top-[5.5rem] right-3.5 md:right-8">
										<img
											src={characterEdu}
											className=" w-[140px] md:w-[280px] h-auto"
											alt="character"
										/>
										<img
											src={infiniteBorder}
											className="rotate-name w-[120px] md:w-[240px] h-auto absolute bottom-[20%] left-1/2"
											style={{ translate: "-50%" }}
											alt="rounded brand"
										/>
									</div>
									<div className="flex pt-32 md:pt-56 w-[80%] max-w-[400px] md:max-w-[500px] mx-auto h-full">
										<div className="flex  w-full h-[60%] gap-3 md:gap-5">
											<div className="min-w-[64px] md:min-w-[90px] text-white text-[0.55rem] md:text-base font-medium flex flex-col justify-between">
												<div>2020-2024</div>
												<div>2013-2018</div>
											</div>
											<div className="h-full w-[1px] relative bg-white before:rounded-full before:absolute  before:bg-white before:size-3 before:-translate-x-1/2 before:bottom-0 after:absolute after:bg-white  after:rounded-full after:size-3 after:-translate-x-1/2 after:top-0   "></div>
											<div className="text-[0.55rem] md:text-lg font-medium flex flex-col justify-between">
												<motion.div
													{...fadeOut}
													className="md:-translate-y-[5%]"
												>
													<div className="font-bold uppercase">
														Moroccan school of engineering science
													</div>
													<div className="capitalize">
														certified state engineer, computer engineering
													</div>
												</motion.div>
												<motion.div
													{...fadeOut}
													className="translate-y-[50%] md:translate-y-[65%]"
												>
													<div className="font-bold uppercase">
														el ouatki kawkabi
													</div>
													<div className="capitalize">
														high school degree, physical science
													</div>
												</motion.div>
											</div>
										</div>
									</div>
									{/* *********************************education pink stars********************************************* */}
									<Star className="absolute w-[14px] right-[5%] -top-[25%] " />
									<Star className="absolute w-[26px] left-[15%] top-0 " />
									{/* *********************************education white stars********************************************* */}
									<Star
										isWhite
										className="absolute w-[10px] lg:w-[20px] left-[40%] top-[14%] lg:top-[22%] "
									/>
									<Star
										isWhite
										className="absolute w-[10px] lg:w-[20px] right-[5%] top-[25%] lg:top-[36%] lg:right-[9%] "
									/>
									<Star
										isWhite
										className="absolute w-[15px] lg:w-[30px] left-[9%] bottom-[47%] lg:left-[18%] "
									/>
									<Star
										isWhite
										className="absolute w-[15px] lg:w-[30px] right-[40%] bottom-[10%] lg:right-[30%] "
									/>
								</div>
							</div>
							<div className="-translate-y-[18px] md:-translate-y-[28px] -rotate-[2.4deg]  bg-primary ">
								<InfiniteSkills />
							</div>
							{/* *********************************projects********************************************* */}
							<div
								id="projects"
								className="my-24 mx-auto w-[92vw] max-w-[1124px] relative"
							>
								<Star className="absolute w-[25px] -top-[5%] right-[16%] lg:-top-[13%] " />
								<Star className="absolute w-[18px] top-0 right-1/2 " />
								<Star className="absolute w-[20px] right-[18%] -bottom-[4%] " />
								<Star className="absolute w-[20px] left-[15%] -bottom-[5%] lg:-bottom-[9%] " />
								<AnimatedTitle title="projects" />
								<Projects />
							</div>
							{/* *********************************partners********************************************* */}
							<div className="mx-auto w-[92vw] max-w-[1124px]  relative my-24">
								<AnimatedTitle title="our partners" />
								<div className="flex justify-center">
									<motion.img
										{...fadeOut}
										src={partner}
										className="w-[300px] md:w-[400px] lg:w-[650px]"
										alt="partner"
									/>
								</div>
								<Star className="absolute w-[14px] lg:w-[20px] left-[15%] -bottom-[25%] " />
							</div>
							{/* *********************************contact********************************************* */}
							<div
								id="contact"
								className="relative mt-24 mb-16 mx-auto w-[92vw] max-w-[1124px] "
							>
								<AnimatedTitle title="get in touch" />
								<ContactUs />
							</div>
						</main>
						<footer className="text-sm md:text-md mb-6 mx-auto w-[92vw] max-w-[1124px] grid justify-center justify-items-center gap-y-1">
							<div className="relative w-[80px] mb-6">
								<img
									src={infiniteBorder}
									className="rotate-name w-[80px]"
									alt="smahi dev"
								/>
								<img
									src={FidgetSpinner}
									className="w-[14px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
									alt="Fidget spinner"
								/>
							</div>
							<div className="capitalize text-secondary font-semibold">
								developed by{" "}
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/smahidv/"
									className="font-bold text-secondary hover:text-primary transition-colors duration-600"
								>
									smahiDev
								</a>
							</div>
							<div className="capitalize text-secondary font-semibold">
								designed by{" "}
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.behance.net/yassirlakssir"
									className="font-bold text-secondary hover:text-primary transition-colors duration-600"
								>
									Yassir Lakssir
								</a>
							</div>
							<div className="capitalize text-secondary font-semibold flex flex-col md:flex-row justify-center items-center gap-2">
								© smahiDev - 2024. Built with
								<img
									src={react}
									alt="react icon"
									className="w-[20px] rounded-sm "
								/>
								open sourced
								<img src={git} alt="react icon" className="w-[20px]" />
								and deployed on
								<img src={vercel} alt="react icon" className="w-[80px] " />
							</div>
							<NavigationFooter />
						</footer>
						<Toast />
					</div>
					</SplashScreenManager>
			</BrowserRouter>
		</SuccesContextProvider>
	);
}

export default App;
