import { useState, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { menuItems } from "../constants";

export default function Navigation() {
	const [indicatorStyles, setIndicatorStyles] = useState<{
		width: number | null;
		left: number | null;
		scale: number | null;
	}>({
		width: null,
		left: null,
		scale: null,
	});
	const navRef = useRef<HTMLUListElement>(null);
	const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const link = e.currentTarget;
		const rect = link.getBoundingClientRect();

		if (navRef.current) {
			const navRect = navRef.current.getBoundingClientRect();
			setIndicatorStyles({
				width: rect.width,
				left: rect.left - navRect.left,
				scale: 1,
			});
		}
	};

	const handleMouseLeave = () => {
		setIndicatorStyles({ width: 0, left: indicatorStyles.left, scale: 0 });
	};

	return (
		<nav className="hidden sm:block relative mt-10 bg-skillsBG bg-no-repeat bg-cover bg-center rounded-full">
			<ul ref={navRef} className="flex p-3">
				{menuItems.map((item, index) => (
					<li key={index}>
						<Link
							smooth
							to={item.to}
							className="p-3 relative z-20 rounded-full text-white hover:text-black capitalize font-[500]"
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
			<span
				className="absolute h-[calc(100%-12px)] top-1.5 bg-gray-300/80 transition-transform duration-400 ease-out rounded-full z-10"
				style={{
					width: `${indicatorStyles.width}px`,
					transform: `translateX(${indicatorStyles.left}px) 
                    scale(${indicatorStyles.scale})`,
				}}
			></span>
		</nav>
	);
}
