import React from 'react'
import { FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/thanusha-vadde-6610bb290/' target="_blank" rel="noreferrer">
                <FaLinkedinIn />  
              </a>   
              
            </span>
            <span className="bannerIcon">
              <a href='https://github.com/ThanushaVadde' target="_blank" rel="noreferrer">
                <FaGithub />
              </a>    
            </span>
            
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media