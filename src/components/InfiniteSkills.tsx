import { skills } from "../constants";
import WhiteStar from "../assets/whiteStar.png"


  export default function InfiniteSkills() {
  return (
    <div className="py-1 md:py-2 bg-primaryLight flex gap-6">
      {[...Array(6)].map((_, outerIndex) => (
        <div
          key={outerIndex}
          className="flex gap-6 flex-shrink-0 bg-primaryLight animate-infinite-scroll"
        >
          {skills.map((item, i) => (
            <div key={i} className="flex items-center gap-6">
              <img
                src={WhiteStar}
                className="w-[20px] h-auto"
                alt="star"
              />
             <div
                translate="no"
                className="font-bold text-xs text-secondary uppercase"
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
