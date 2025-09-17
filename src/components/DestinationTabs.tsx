import React, { useState } from "react";
import data from "../data/data.json";

interface Destination {
  name: string;
  images: { png: string };
  description: string;
  distance: string;
  travel: string;
}

const DestinationTabs: React.FC = () => {
  const destinations: Destination[] = data.destinations;
  const [current, setCurrent] = useState<Destination>(destinations[0]);

  return (
    <section className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
      {/* Image */}
      <img
        src={current.images.png}
        alt={current.name}
        className="w-64 h-64 lg:w-96 lg:h-96"
      />

      {/* Info */}
      <div className="max-w-md">
        <div className="flex justify-center lg:justify-start gap-6 uppercase mb-6">
          {destinations.map((dest) => (
            <button
              key={dest.name}
              onClick={() => setCurrent(dest)}
              className={`tracking-widest ${
                current.name === dest.name
                  ? "border-b-2 border-white"
                  : "text-light hover:text-white"
              }`}
            >
              {dest.name}
            </button>
          ))}
        </div>

        <h2 className="text-6xl font-bellefair uppercase mb-4">
          {current.name}
        </h2>
        <p className="text-light mb-8">{current.description}</p>

        <div className="flex justify-between border-t border-gray-500 pt-6">
          <div>
            <p className="text-sm uppercase text-light">Avg. Distance</p>
            <p className="text-2xl font-bellefair">{current.distance}</p>
          </div>
          <div>
            <p className="text-sm uppercase text-light">Est. Travel Time</p>
            <p className="text-2xl font-bellefair">{current.travel}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationTabs;
