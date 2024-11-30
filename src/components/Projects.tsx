import { projectsList } from "../constants";
import videoURL from "../assets/demo.mp4";
import arrow from "../assets/arrow.png";
import { motion } from "framer-motion";
import { fadeOut } from "../animate";

export default function Projects() {
	const downloadVideoFile = () => {
		const element = document.createElement("a");
		element.href = videoURL; // Link to the video
		const fileName = `project-video-${new Date().toISOString()}.mp4`;
		element.download = fileName; // Name of the downloaded file
		document.body.appendChild(element); // Required for this to work in Firefox
		element.click();
		document.body.removeChild(element); // Clean up
	};

	return (
		<motion.div
		initial={{ opacity: 0,scale: 0.95 }}
		whileInView={{ opacity: 1,scale:1 }}
		transition={{ duration: 0.5 }}
		 className="grid   lg:grid-cols-2 gap-8  mt-12   ">
			{projectsList.map((project, index) => (
				<div
					key={index}
					className="pt-6 pb-4 pl-4  xs:pl-6 sm:pt-10 sm:pb-6  rounded-2xl lg:rounded-[50px] "
					style={{ backgroundColor: project.color }}
				>
					<div className="flex gap-x-4 mobi:max-w-[380px] mobi:mx-auto sm:max-w-[480px] ">
						{project.languages.map((language, i) => (
							<div
								key={i}
								className="border-white rounded-sm text-[0.6em] mobi:text-[0.8rem]  border-[1.5px] sm:border-2 text-white font-medium px-3 py-1/2 sm:py-1"
							>
								{language}
							</div>
						))}
					</div>
					
					<div className="flex relative   mobi:max-w-[380px] mobi:mx-auto sm:max-w-[480px]">
						<div className="basis-[50%] ">
						<div className="text-secondary font-black text-xs mobi:text-base lg:text-xl uppercase my-4  xl:my-6 ">
								{project.title}
							</div>
							<div className="text-[0.5rem] mobi:text-[0.6rem] font-medium sm:text-xs mb-4 xs:mb-6 sm:mb-16 lg:mb-12 max-w-[22ch] xs:max-w-[25ch] mobi:max-w-[30ch]">
								{project.description}
							</div>
							<a
								href={project.code}
								target="_blank"
								rel="noopener noreferrer"
								className="container bg-secondary rounded-sm w-fit px-2 py-1 sm:p-2  flex gap-2 lg:gap-4 items-center shadow-sm"
							>
								<img
									src="src/assets/Whitestar.png"
									className=" w-[14px] lg:w-[18px] scale"
									alt="star"
								/>
								<div className="uppercase  font-semibold  text-white text-[0.5rem] mobi:text-[0.66rem] sm:text-sm">
									View code
								</div>
								<img
									src="src/assets/Whitestar.png"
									className="w-[14px] lg:w-[18px] scale  "
									alt="star"
								/>
							</a>
							<div className="mt-2 xs:mt-4 xs:ml-6 ml-4 ">
								<div className=" flex gap-2">
									<div className="uppercase  font-semibold  text-secondary text-[0.5rem] mobi:text-[0.66rem] sm:text-sm">
										{project.live ? "View Project" : "download demo"}
									</div>
									<img
										src={arrow}
										className=" w-[14px] lg:w-[18px] "
										alt="arrow right"
									/>
								</div>
							</div>
						</div>
						{project.live ? (
							<a href={project.live} target="_blank" rel="noopener noreferrer">
								<img
									src={project.image}
									alt={project.title}
						     		className="-bottom-4 sm:-bottom-6   w-[180px] xs:w-[185px] mobi:w-[210px] sm:w-[290px] lg:w-[240px]  xl:w-[300px] absolute  right-0 hover:opacity-80 hover:scale-[1.03] cursor-pointer"
								/>
							</a>
						) : (
							<img
								id="downloadBtn"
								onClick={downloadVideoFile}
								src={project.image}
								alt={project.title}
								className="-bottom-4 sm:-bottom-6   w-[180px] xs:w-[185px] mobi:w-[210px] sm:w-[290px] lg:w-[240px]  xl:w-[300px] absolute  right-0 hover:opacity-80 hover:scale-[1.03] cursor-pointer"
							/>
						)}
					</div>
				</div>
			))}
		</motion.div>
	);
}
