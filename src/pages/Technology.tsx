import React, { useState } from "react";
import data from "../../../starter-code/data.json";
import PageWrapper from "../components/PageWrapper";
import TechnologySlider from "../components/TechnologySlider";

interface TechnologyItem {
  name: string;
  description: string;
  images: { portrait: string; landscape: string };
}

const Technology: React.FC = () => {
  const tech: TechnologyItem[] = data.technology;
  const [active, setActive] = useState(0);

  return (
    <PageWrapper background="technology" title="Space Launch 101" number="03">
      <TechnologySlider
        active={active}
        setActive={setActive}
        count={tech.length}
      />
    </PageWrapper>
  );
};

export default Technology;
