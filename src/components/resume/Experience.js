import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

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
            des= "Developing dynamic and interactive UI components using ReactJS, Angular, HTML5, CSS3, and JavaScript. Deploying code using Jenkins and managing code repository in version control systems like Bitbucket for efficient code management. Integrating APIs and data sources using Postman to retrieve information."
          />
          <ResumeCard
            title="Systems Engineer"
            subTitle="INFOSYS - (2021 - 2023)"
            result="HYD"
            des= "Utilizing Solr for search functionality within applications. Monitoring application performance with Instana and implementing improvements based on insights. Leveraged Hippo CMS for content management and integration with the frontend. Implementing datalayer events on website to track user interactions and behavior."
          />
          <ResumeCard
            title="Systems Engineer Trainee"
            subTitle="INFOSYS - (2021)"
            result="HYD"
            des= "Utilizing SendGrid to create and execute targeted email campaigns for a variety of clients. Tracking project progress and managed tasks using Jira, ensuring on-time and high-quality deliverables. Working within an agile methodology, actively participating in sprints and daily stand-up meetings."
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
