import React from "react";
import { formBtn1, pageClass } from "../../Components/Utils/CustomClasses";
import Fardeen from "../../assets/Images/Fardeen.jpg"
import Linkdin from "../../assets/Images/linkdin.jpg"
import Github from "../../assets/Images/Github.jpg"
import { Call, Location, Message } from "iconsax-react";

export default function Home() {
    return(
        <div className={`${pageClass}`}>
         <div className="flex flex-col gap-6 items-center justify-center pb-8">
        <div className="bg-white rounded-2xl shadow-md w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start p-6 md:p-8">
          {/* Profile Image & Progress */}
          <div className="flex flex-col items-center md:mr-8 mb-4 md:mb-0 w-full md:w-auto">
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center overflow-hidden border-4 border-gray-200">
                <img
                  src={Fardeen}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          {/* Profile Details */}
          <div className="flex-1 w-full">
            <div className="flex flex-col items-center text-center md:items-start md:text-left md:flex-row md:justify-between gap-2">
              <div className="flex flex-col justify-center w-full md:w-auto">
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#49515a] font-bold mt-2">
                  Fardeen Nulwala
                </h2>
                <p className="text-sm md:text-lg md:text-left font-semibold text-[#778492]">
                  Software Engineer
                </p>
                <span className="font-semibold text-[#b0b7c3] md:text-left text-sm md:text-lg">
                  at Techiebears pvt ltd
                </span>
              </div>
              <div className="flex items-center mt-2 md:mt-0 justify-center md:justify-start w-full md:w-auto">
                <button className={formBtn1}>
                  <a
                    href="/fardeen_resume.pdf"
                    download="fardeen_resume"
                    className="no-underline text-inherit hover:no-underline hover:text-inherit text-sm md:text-lg"
                  >
                    Resume
                  </a>
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/fardeen-nulwala3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Linkdin} alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/Fardeen8032/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="GitHub" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-6 text-justify">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#49515a] font-bold mb-2">
            About Me
          </h2>
          <p className="text-sm md:text-lg">
            Passionate Software Engineer with experience in building full-stack web applications using React.js, Node.js, MySQL, and MongoDB. Skilled in developing responsive, user-friendly, and scalable solutions.Currently working at Techiebears Pvt Ltd, delivering client-based projects with modern frontend technologies like React.js, Tailwind CSS, and Redux.Proficient in JavaScript, HTML, CSS, REST APIs, Git.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#49515a] mb-4 font-bold">Contact Me</h2>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Message size="22" color="#49515a" />
            <p className="text-sm md:text-lg break-all">ferdeen12nulwala@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Call size="22" color="#49515a"/>
            <p className="text-sm md:text-lg break-all">+91 9619048110</p>
          </div>
          <div className="flex items-center gap-2">
            <Location size="22" color="#49515a" />
            <p className="text-sm md:text-lg">Mumbai, India.</p>
          </div>
        </div>
      </section>
        </div>
    )
}