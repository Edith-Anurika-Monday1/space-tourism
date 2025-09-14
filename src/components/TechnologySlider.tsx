import React from "react";
import data from "../../../starter-code/data.json";

interface TechnologyItem {
  name: string;
  description: string;
  images: { portrait: string; landscape: string };
}

interface TechnologySliderProps {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}

const TechnologySlider: React.FC<TechnologySliderProps> = ({ active, setActive }) => {
  const tech: TechnologyItem[] = data.technology;
  const current = tech[active];

  return (
    <section className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
      {/* Slider Numbers */}
      <div className="flex lg:flex-col gap-6">
        {tech.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-12 h-12 rounded-full border ${
              i === active ? "bg-white text-black" : "border-gray-400 text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Info */}
      <div className="max-w-md">
        <h3 className="uppercase text-light text-sm">The terminology...</h3>
        <h2 className="text-4xl font-bellefair uppercase my-4">{current.name}</h2>
        <p className="text-light">{current.description}</p>
      </div>

      {/* Image */}
      <picture>
        <source media="(min-width:1024px)" srcSet={current.images.portrait} />
        <img
          src={current.images.landscape}
          alt={current.name}
          className="w-full lg:w-[500px] h-auto"
        />
      </picture>
    </section>
  );
};

export default TechnologySlider;
