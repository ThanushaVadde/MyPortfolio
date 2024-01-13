import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      /> 
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white"> Thanusha Vadde </h3>
        <p className="text-lg font-normal text-gray-400">
          FRONTEND WEB DEVELOPER
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Seeking a dynamic and challenging role as a Frontend Developer where my comprehensive knowledge of web
technologies, coupled with a solid 2+ years hands-on experience in crafting and customizing engaging web pages. 
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9515432525</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">thanushavadde9515@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft