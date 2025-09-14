import React from "react";
import PageWrapper from "../components/PageWrapper";
import DestinationTabs from "../components/DestinationTabs";

const Destination: React.FC = () => {
  return (
    <PageWrapper background="destination" title="Pick Your Destination" number="01">
      <DestinationTabs />
    </PageWrapper>
  );
};

export default Destination;
