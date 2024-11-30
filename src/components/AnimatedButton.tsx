import { stagger, useAnimate } from "framer-motion";
import blackStar from "../assets/blackStar.png";

const randomNumberBetween = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
type SparkleAnimation = [	
	string,
	{
		x?: number;
		y?: number;
		scale?: number;
		opacity?: number;
	},
	{
		duration?: number;
		at?: string;
	}
];
const text = "Get In Touch";
export default function AnimatedButton() {
	const [scope, animate] = useAnimate();
	const onButtonClick = async () => {
		const sparkles = Array.from({ length: 20 });
		const sparklesAnimation: SparkleAnimation[] = sparkles.map((_, index) => [
			`.sparkle-${index}`,
			{
				x: randomNumberBetween(-100, 100),
				y: randomNumberBetween(-100, 100),
				scale: randomNumberBetween(0.5, 1.5),
				opacity: 1,
			},
			{
				duration: 0.4,
				at: "<",
			},
		]);

		const sparklesFadeOut: SparkleAnimation[] = sparkles.map((_, index) => [
			`.sparkle-${index}`,
			{
				opacity: 0,
				scale: 0,
			},
			{
				duration: 0.3,
				at: "<",
			},
		]);

		const sparklesReset: SparkleAnimation[] = sparkles.map((_, index) => [
			`.sparkle-${index}`,
			{
				x: 0,
				y: 0,
			},
			{
				duration: 0.000001,
			},
		]);

		await new Promise<void>((resolve) => {
			animate([
				...sparklesReset,
				[
					".animate-letter",
					{ y: -24 },
					{ duration: 0.2, delay: stagger(0.02) },
				],
				[".anim", { scale: 0.8 }, { duration: 0.1, at: "<" }],
				[".anim", { scale: 1 }, { duration: 0.1 }],
				...sparklesAnimation,
				[".animate-letter", { y: 0 }, { duration: 0.000001 }],
				...sparklesFadeOut,
			]);
			setTimeout(resolve, 450);
		});

		const contactSection = document.getElementById("contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div ref={scope}>
			<button
				translate="no"
				onClick={onButtonClick}
				className="relative inline-block bg-secondary hover:bg-white hover:text-secondary hover:border hover:border-secondary shadow-2xl text-white  md:text-sm text-[0.4rem] xs:text-[0.52rem] font-semibold md:px-6 px-3 md:py-3 rounded-md"
			>
				<span className="sr-only">Get In Touch</span>
				<span className="block h-6 overflow-hidden" aria-hidden>
					{text.split("").map((char, index) => {
						const isSpace = char === " ";
						return (
							<span
								data-letter={char}
								key={index}
								className={` relative inline-block leading-6 h-6  ${
									!isSpace ? "animate-letter" : ""
								} after:absolute after:left-0 after:top-full after:h-full after:content-[attr(data-letter)]`}
							>
								{char === " " ? "\u00A0" : char}
							</span>
						);
					})}
				</span>
				<span
					aria-hidden
					className="pointer-events-none absolute inset-0 -z-10 block"
				>
					{Array.from({ length: 20 }).map((_, index) => (
						<img
							key={index}
							src={blackStar}
							alt=""
							className={`absolute left-1/2 top-1/2 opacity-0 w-[10px] sparkle-${index}`}
						/>
					))}
				</span>
			</button>
		</div>
	);
}
