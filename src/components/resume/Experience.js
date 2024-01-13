import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";
import ListExperienceFunc from './jobexperience';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Senior Systems Engineer"
            subTitle="INFOSYS - (2023 - Present)"
            result="HYD"
            des= {<ListExperienceFunc/>}
          />
          <ResumeCard
            title="Systems Engineer"
            subTitle="INFOSYS - (2021 - 2023)"
            result="HYD"
            des= ""
          />
          <ResumeCard
            title="Systems Engineer Trainee"
            subTitle="INFOSYS - (2021)"
            result="HYD"
            des= ""
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
