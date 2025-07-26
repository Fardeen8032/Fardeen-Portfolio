import React from "react";
import { formBtn1, pageClass } from "../../Components/Utils/CustomClasses";
import Fardeen from "../../assets/Images/Fardeen.jpg"
import Linkdin from "../../assets/Images/linkdin.jpg"
import Github from "../../assets/Images/Github.jpg"
import { Location, Message } from "iconsax-react";

export default function Home() {
    return(
        <div className={`${pageClass}`}>
          <div className="flex items-center justify-between pb-[60px]">
            <div className="bg-white  sm:flex items-center p-8 mx-auto w-full">
              {/* Profile Image & Progress */}
              <div className="flex flex-col items-center mr-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={Fardeen}
                      alt="Profile"
                      className="w-[100%] h-[100%] object-contain rounded-full"
                    />
                  </div>
                </div>
              </div>
              {/* Profile Details */}
              <div className="flex-1">
                <div className="sm:flex items-center justify-between">
                  <div className="">
                    <h2 className="text-2xl text-[#49515a] font-[38px] mt-2">Fardeen Nulwala</h2>
                    <p className="text-lg font-[700] text-[#778492]">Software Engineer</p>
                    <p className="font-[700] text-[#778492]">at Techiebears pvt ltd</p>
                  </div>
                  <div className="flex items-center">
                    <button className={formBtn1}>
                      <a
                        href="/fardeen_resume.pdf"
                        download="fardeen_resume"
                        className="no-underline text-inherit hover:no-underline hover:text-inherit"
                      >
                        Resume
                      </a>
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-8 mt-6">
                  <div className="flex items-center space-x-2">
                    <a href="https://www.linkedin.com/in/fardeen-nulwala3" target="_blank" rel="noopener noreferrer">
                      <img src={Linkdin} alt="LinkedIn" className="w-8 h-8" />
                    </a>
                    <a href="https://github.com/Fardeen8032/" target="_blank" rel="noopener noreferrer">
                      <img src={Github} alt="GitHub" className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <section className="grid  sm:grid-cols-2 space-x-12">
              <div className="bg-white p-[35px] text-justify">
                <h2 className="text-2xl text-[#49515a] font-[38px]">About Me</h2>
                <p>As a Software developer at Techiebears pvt ltd, I am highly driven and detail oriented, seeking a challenging role as a Full stack developer. My passion for applying theoretical concepts to practical scenarios motivates me to make a meaningful impact in the field. I am excited to contribute my knowledge and skills to real world projects and take on new challenges to grow both personally and professionally.
                </p>
              </div>
              <div className="bg-white p-[30px] max-h-[155px]">
                  <div>
                    <h2 className="text-[#49515a] text-2xl mb-[15px]">Contact Me</h2>
                  </div>
                  <div className="flex gap-x-2">
                    <Message size="22" color="#49515a"/>
                    <p className="text-base mb-[15px]">ferdeen12nulwala@gmail.com</p>
                  </div>
                  <div className="flex gap-x-2">
                    <Location size="22" color="#49515a"/>
                    <p className="text-base mb-[15px]">Mumbai, India.</p>
                  </div>
              </div>
            </section>
        </div>
    )
}