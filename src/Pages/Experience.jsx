import React from "react";
import { pageClass } from "../Components/Utils/CustomClasses";


export default function Experience() {
  return (
    <div className={`${pageClass}`}>
      <div className="flex flex-col gap-6 items-center justify-center pb-8">
        <div className="bg-white rounded-2xl shadow-md w-full max-w-6xl p-4 sm:p-6 md:p-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#49515a] font-bold mb-4">
            Work Experience
          </h2>
          <div>
            {/* TechieBears */}
            <div className="mb-6">
              <h3 className="text-xs sm:text-sm md:text-base text-[#404040] font-semibold">
                Software Engineer -{" "}
                <span className="text-[#999]">TechieBears Pvt Ltd</span>
                <span className="text-[#999] ml-2 text-xs sm:text-sm md:text-base">
                  Nov 2024 - Present
                </span>
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-justify mt-2">
                Developed, implemented and tested website for many different clients based on requirements. Communicated with the client, analyzed user requirements and translate client needs into web application. Worked on emerging technologies like ReactJS, Tailwind CSS, NodeJS and Mongodb. Collaborated with backend developers and other team members to deliver the project successfully.
              </p>
              <p className="mt-1 text-xs sm:text-sm md:text-base text-[#778492]">
                Skills - ReactJS Tailwind CSS NodeJS MongoDB
              </p>
            </div>
            {/* Desi Dhaba */}
            <div className="mb-6">
              <h3 className="text-xs sm:text-sm md:text-base text-[#404040] font-semibold">
                Freelance Web Developer -{" "}
                <span className="text-[#999] text-xs sm:text-sm md:text-base">Desi Dhaba</span>
                <span className="text-[#999] ml-2 text-xs sm:text-sm md:text-base">
                  Aug 2024 - Oct 2024
                </span>
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#778892] mt-2">
                Link -{" "}
                <a
                  href="https://desidhaba.onrender.com/"
                  className="no-underline text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://desidhaba.onrender.com/
                </a>
              </p>
              <p className="text-xs sm:text-sm md:text-base text-justify mt-2">
                Developed a website using HTML, CSS, JavaScript, ReactJS. Designed and implemented a responsive website to enhance user experience.
              </p>
              <p className="mt-1 text-xs sm:text-sm md:text-base text-[#778492]">
                Skills : HTML, CSS, JavaScript, React.js
              </p>
            </div>
            {/* Aptitech Education */}
            <div>
              <h3 className="text-xs sm:text-sm md:text-base text-[#404040] font-semibold">
                Full Stack Developer Intern -{" "}
                <span className="text-[#999] text-xs sm:text-sm md:text-base">Aptitech Education</span>
                <span className="text-[#999] ml-2 text-xs sm:text-sm md:text-base">
                  July 2023 – December 2023
                </span>
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-justify mt-2">
                Designed, developed and implemented Ecommerce web application based on requirements. Designed a user-friendly product listing page, detailed product view and add to cart functionality for convenient and efficient shopping.
              </p>
              <p className="mt-1 text-xs sm:text-sm md:text-base text-[#778492]">
                Skills : HTML CSS JavaScript React.js Node.js MongoDB RESTful API
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}