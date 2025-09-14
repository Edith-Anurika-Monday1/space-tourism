import React from "react";

interface CrewSliderProps {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}

const CrewSlider: React.FC<CrewSliderProps> = ({ active, setActive, count }) => {
  return (
    <div className="flex gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`w-4 h-4 rounded-full ${
            i === active ? "bg-white" : "bg-gray-500"
          }`}
        />
      ))}
    </div>
  );
};

export default CrewSlider;
