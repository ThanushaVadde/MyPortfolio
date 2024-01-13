import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold"> Certifications </h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Infosys Certified Frontend Web Developer"
            subTitle="Infosys"
            result="Success"
            des=""
          />
          <ResumeCard
            title="Infosys Certified Angular Professional"
            subTitle="Infosys"
            result="Success"
            des=""
          />
          <ResumeCard
            title="Infosys Certified Global Agile Developer"
            subTitle="Infosys"
            result="Success"
            des=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
