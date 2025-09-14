import React, { useState } from "react";
import data from "../data/data.json";
import PageWrapper from "../components/PageWrapper";
import CrewSlider from "../components/CrewSlider";

interface CrewMember {
  name: string;
  role: string;
  bio: string;
  images: { png: string; webp: string };
}

const Crew: React.FC = () => {
  const crew: CrewMember[] = data.crew;
  const [active, setActive] = useState(0);
  const member = crew[active];

  return (
    <PageWrapper background="crew" title="Meet Your Crew" number="02">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Info */}
        <div className="text-center lg:text-left max-w-md">
          <h3 className="uppercase text-lg text-gray-400 tracking-widest">
            {member.role}
          </h3>
          <h2 className="uppercase text-4xl md:text-5xl font-bellefair my-4">
            {member.name}
          </h2>
          <p className="text-light leading-relaxed">{member.bio}</p>

          {/* Slider */}
          <div className="mt-8">
            <CrewSlider active={active} setActive={setActive} count={crew.length} />
          </div>
        </div>

        {/* Image */}
        <img
          src={member.images.png.replace("./assets", "/assets")}
          alt={member.name}
          className="w-60 lg:w-[400px] object-contain"
        />
      </div>
    </PageWrapper>
  );
};

export default Crew;
