import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2003 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Electrical & Electronics Engineering."
            subTitle=" JNTU Anantapur(2017 - 2021)"
            result="8.55/10"
            des="Graduated with 8.55 CGPA in B.Tech is a source of pride, it's just one facet of my multifaceted journey."
          />
          <ResumeCard
            title="Intermediate - MPC"
            subTitle="Narayana Junior College (2015 - 2017)"
            result="96.6/100"
            des="Completed my Intermediate with 96.6%"
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Sri Vasavi High School (2014 - 2015)"
            result="9.3/10"
            des="Completed my schooling with 9.3 CGPA earned alongside amazing classmates and supportive teachers."
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
}

export default Education