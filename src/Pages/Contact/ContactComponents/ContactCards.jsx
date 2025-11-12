import React from "react";
import { FaEnvelope } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";

const ContactCards = () => {
  return (
    <div>
      <div className="text-center xl:w-3/8 w-1/2 mx-auto">
        <h2 className="text-[26px] font-manrope text-secondary font-bold">
          <span>Get In</span>
          <span className="text-primary ml-1.5 font-black">Touch</span>
        </h2>
        <p className="text-[15px] font-light font-poppins text-accent tracking-[0.32px] mt-2.5 mb-10">
          Please select a topic below related to you inquiry. If you don't fint
          what you need, fill out our contact form.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="font-light text-center flex flex-col items-center bg-[#f8f8fb] p-6 border border-[#eeeeee]">
          <div className="bg-secondary p-5 mb-4 rounded-md">
            <FaEnvelope className="text-[25px] text-white" />
          </div>
          <h3 className="text-[20px] font-manrope text-secondary font-semibold">
            Mail & Website
          </h3>
          <p className="flex items-center gap-2.5 my-2">
            <FaEnvelope />
            <span> mail.example@gmail.com</span>
          </p>
          <p className="flex items-center gap-2.5">
            <FaGlobeAmericas />
            <span> www.yourdomain.com</span>
          </p>
        </div>
        <div className="font-light text-center flex flex-col items-center bg-[#f8f8fb] p-6 border border-[#eeeeee]">
        <div className="bg-secondary p-5 mb-4 rounded-md">
            <FaEnvelope className="text-[25px] text-white"/>
        </div>
        <h3 className="text-[20px] font-manrope text-secondary font-semibold">
          Mail & Website
        </h3>
        <p className="flex items-center gap-2.5 my-2">
          <FaEnvelope />
          <span> mail.example@gmail.com</span>
        </p>
        <p className="flex items-center gap-2.5">
          <FaGlobeAmericas />
          <span> www.yourdomain.com</span>
        </p>
      </div>
      <div className="font-light text-center flex flex-col items-center bg-[#f8f8fb] p-6 border border-[#eeeeee]">
        <div className="bg-secondary p-5 mb-4 rounded-md">
            <FaEnvelope className="text-[25px] text-white"/>
        </div>
        <h3 className="text-[20px] font-manrope text-secondary font-semibold">
          Mail & Website
        </h3>
        <p className="flex items-center gap-2.5 my-2">
          <FaEnvelope />
          <span> mail.example@gmail.com</span>
        </p>
        <p className="flex items-center gap-2.5">
          <FaGlobeAmericas />
          <span> www.yourdomain.com</span>
        </p>
      </div>
      </div>
    </div>
  );
};

export default ContactCards;
