import React from "react";
import ExperienceTimeline from "./worksTimeline";

const Works = () => {
  return (
    <section className="my-20 lg:my-40 px-4 md:px-10">
      <div className="flex w-full items-center justify-center">
        <h2 className="text-center text-6xl font-medium text-c1 max-xl:text-5xl max-lg:text-4xl max-md:text-3xl">
          <span className="text-c2">My</span> Work Experience
        </h2>
      </div>

      <ExperienceTimeline />
    </section>
  );
};

export default Works;