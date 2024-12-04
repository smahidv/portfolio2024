import { projectsList } from "../constants";
import videoURL from "../assets/demo.mp4";
import { motion } from "framer-motion";
import whiteStar from "../assets/whiteStar.png";
import blackStar from "../assets/blackStar.png";

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
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
			className="grid   lg:grid-cols-2 gap-8     "
		>
			{projectsList.map((project, index) => (
				<div
					key={index}
					className="  pt-6 pb-4 pl-4  xs:pl-6 sm:pt-10 sm:pb-6  rounded-2xl lg:rounded-[50px] "
					style={{ backgroundColor: project.color }}
				>
					<div className="flex gap-x-4 mobi:max-w-[380px] mobi:mx-auto sm:max-w-[480px] ">
						{project.languages.map((language, i) => (
							<div
								key={i}
								className="border-white rounded-lg text-[0.6em] mobi:text-[0.8rem]  border-[1.5px] sm:border-2 text-white font-medium px-3 py-1/2 sm:py-1"
							>
								{language}
							</div>
						))}
					</div>

					<div className="relative   flex  mobi:max-w-[380px] mobi:mx-auto sm:max-w-[480px]">
						<div className="basis-[50%] ">
							<div className="text-secondary font-black text-xs mobi:text-base lg:text-xl uppercase my-4  xl:my-6 ">
								{project.title}
							</div>
							<div className="text-[0.5rem] mobi:text-[0.6rem] font-medium sm:text-xs mb-4 xs:mb-12 xl:mb-10 max-w-[22ch] xs:max-w-[25ch] mobi:max-w-[30ch]">
								{project.description}
							</div>
						<div className="max-w-[120px] mobi:max-w-[130px] sm:max-w-[190px]  space-y-2">
							<a
								id="downloadBtn"
								onClick={!project.live ? downloadVideoFile : undefined}
								href={project.live}
								target="_blank"
								rel="noopener noreferrer"
								className="w-full container cursor-pointer bg-secondary rounded-lg p-2  flex justify-between lg:gap-4 items-center shadow-sm"
							>
								<img
									src={whiteStar}
									className="w-[8px] sm:w-[14px]  scale"
									alt="star"
								/>
								<div className="uppercase text-center  font-semibold  text-white text-[0.4rem] mobi:text-[0.55rem] sm:text-[0.7rem]  ">
									{project.live ? "View project" : "download demo"}
								</div>
								<img
									src={whiteStar}
									className="w-[8px] sm:w-[14px]  scale"
									alt="star"
								/>
							</a>
							<a
								href={project.code}
								target="_blank"
								rel="noopener noreferrer"
								className="w-full  container bg-white rounded-lg p-2  flex justify-between lg:gap-4 items-center shadow-sm"
							>
								<img
									src={blackStar}
									className="w-[8px] sm:w-[14px]  scale"
									alt="star"
								/>
								<div className="uppercase  font-semibold  text-secondary text-[0.4rem] mobi:text-[0.55rem] sm:text-[0.7rem] ">
									View code
								</div>
								<img
									src={blackStar}
									className="w-[8px] sm:w-[14px]  scale"
									alt="star"
								/>
							</a>
						</div>
						</div>
						<img
							src={project.image}
							alt={project.title}
							className="-bottom-4 lg:top-2   w-[180px] xs:w-[185px] mobi:w-[210px] sm:w-[270px] lg:w-[240px]  xl:w-[285px] absolute  right-0"
						/>
					</div>
				</div>
			))}
		</motion.div>
	);
}
