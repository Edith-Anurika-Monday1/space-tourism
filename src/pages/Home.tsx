import React from "react";
import PageWrapper from "../components/PageWrapper";

const Home: React.FC = () => {
  return (
    <PageWrapper background="home">
      <section className="flex flex-col items-center justify-center text-center px-4 md:px-12 lg:px-24">
        {/* Intro text */}
        <h2 className="text-lg md:text-xl uppercase tracking-widest text-gray-400">
          So, you want to travel to
        </h2>

        {/* Main heading */}
        <h1 className="text-7xl md:text-9xl uppercase my-6 font-bellefair">
          Space
        </h1>

        {/* Description */}
        <p className="max-w-xl text-base md:text-lg text-gray-300 leading-relaxed">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>

        {/* Explore button */}
        <div className="mt-12">
          <button className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-white text-black text-2xl md:text-3xl uppercase tracking-wide hover:shadow-[0_0_0_40px_rgba(255,255,255,0.2)] transition-all">
            Explore
          </button>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
