import React from "react";
import { formBtn1, pageClass } from "../Components/Utils/CustomClasses";
import { Icon } from '@iconify/react';


export default function Qualification() {
    return(
    <div className={`${pageClass}`}>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-6 text-justify max-h-[63rem]">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#49515a] font-bold mb-2">
            Skills
          </h2>
          <div>
            <div className="mb-[30px]">
                <h3 className="text-sm md:text-lg font-semibold text-[#778492]">Java</h3>
                <div className="h-[15px] bg-[#e8e8e8]">
                    <div className="h-[15px] bg-base-color w-[96%]" data-level="96%"></div>
                </div>
            </div>
            <div className="mb-[30px]">
                <h3 className="text-sm md:text-lg font-semibold text-[#778492]">HTML</h3>
                <div className="h-[15px] bg-[#e8e8e8]">
                    <div className="h-[15px] bg-base-color w-[98%]" data-level="98%"></div>
                </div>
            </div>
            <div className="mb-[30px]">
                <h3 className="text-sm md:text-lg font-semibold text-[#778492]">CSS</h3>
                <div className="h-[15px] bg-[#e8e8e8]">
                    <div className="h-[15px] bg-base-color w-[90%]" data-level="90%"></div>
                </div>
            </div>
            <div className="mb-[30px]">
                <h3 className="text-sm md:text-lg font-semibold text-[#778492]">Javascript</h3>
                <div className="h-[15px] bg-[#e8e8e8]">
                    <div className="h-[15px] bg-base-color w-[96%]" data-level="96%"></div>
                </div>
            </div>
            <div className="mb-[30px]">
                <h3 className="text-sm md:text-lg font-semibold text-[#778492]">Tailwind CSS</h3>
                <div className="h-[15px] bg-[#e8e8e8]">
                    <div className="h-[15px] bg-base-color w-[88%]" data-level="88%"></div>
                </div>
            </div>
            <div className="mb-[30px]">
                <h3 className="text-sm md:text-lg font-semibold text-[#778492]">ReactJS</h3>
                <div className="h-[15px] bg-[#e8e8e8]">
                    <div className="h-[15px] bg-base-color w-[85%]" data-level="85%"></div>
                </div>
            </div>
            <div className="mb-[30px]">
                <h3 className="text-sm md:text-lg font-semibold text-[#778492]">NodeJS</h3>
                <div className="h-[15px] bg-[#e8e8e8]">
                    <div className="h-[15px] bg-base-color w-[66%]" data-level="66%"></div>
                </div>
            </div>
            <div className="mb-[30px]">
                <h3 className="text-sm md:text-lg font-semibold text-[#778492]">ExpressJS</h3>
                <div className="h-[15px] bg-[#e8e8e8]">
                    <div className="h-[15px] bg-base-color w-[70%]" data-level="70%"></div>
                </div>
            </div>
            <div className="mb-[30px]">
                <h3 className="text-sm md:text-lg font-semibold text-[#778492]">MongoDB</h3>
                <div className="h-[15px] bg-[#e8e8e8]">
                    <div className="h-[15px] bg-base-color w-[60%]" data-level="60%"></div>
                </div>
            </div>
            <div className="mb-[30px]">
                <h3 className="text-sm md:text-lg font-semibold text-[#778492]">MySQL</h3>
                <div className="h-[15px] bg-[#e8e8e8]">
                    <div className="h-[15px] bg-base-color w-[67%]" data-level="67"></div>
                </div>
            </div>
            <div>
                <h3 className="text-sm md:text-lg font-semibold text-[#778492]">SQL</h3>
                <div className="h-[15px] bg-[#e8e8e8]">
                    <div className="h-[15px] bg-base-color w-[87%]" data-level="87"></div>
                </div>
            </div>
          </div>
        </div>
        <div>
            <div className="bg-white rounded-2xl shadow-md p-6 mb-[30px]">
                <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#49515a] mb-4 font-bold">Education</h2>
                </div>
                <div className="mb-3 flex item-center gap-2">
                    <Icon icon="icon-park-outline:degree-hat" className="w-5 h-5 sm:w-7 sm:h-6" color="#49515a"/>
                    <div>
                        <h3 className="text-sm md:text-lg">Barretto High School</h3>
                        <p className="text-sm md:text-lg">SSC</p>
                    </div>
                </div>
                <div className="mb-3 flex item-center gap-2">
                    <Icon icon="icon-park-outline:degree-hat" className="w-5 h-5 sm:w-7 sm:h-6" color="#49515a"/>
                    <div>
                        <h3 className="text-sm md:text-lg">Maharastra College of Arts Science and Commerce</h3>
                        <p className="text-sm md:text-lg">HSC - Science</p>
                    </div>
                </div>
                <div className="mb-3 flex item-center gap-2">
                    <Icon icon="icon-park-outline:degree-hat" className="w-5 h-5 sm:w-7 sm:h-6" color="#49515a"/>
                    <div>
                        <h3 className="text-sm md:text-lg">MH Saboo Siddik College of Engineering</h3>
                        <p className="text-sm md:text-lg">BE - IT</p>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 mb-[30px]">
                <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#49515a] mb-4 font-bold">Academic Project</h2>
                </div>
                <div className="mb-3 flex items-center gap-2">
                    <Icon icon="uiw:document" className="w-5 h-5 sm:w-7 sm:h-6" color="#49515a"/>
                    <p className="text-sm md:text-lg">Customer review analysis</p>
                </div>
                <div className="mb-3 flex items-center gap-2">
                    <Icon icon="uiw:document" className="w-5 h-5 sm:w-7 sm:h-6" color="#49515a"/>
                    <p className="text-sm md:text-lg">Old Car Price Prediction</p>
                </div>
                <div className="mb-3 flex items-center gap-2">
                    <Icon icon="uiw:document" className="w-5 h-5 sm:w-7 sm:h-6" color="#49515a"/>
                    <p className="text-sm md:text-lg">Car Service Booking System</p>
                </div>
                <div className="mb-3 flex items-center gap-2">
                    <Icon icon="uiw:document" className="w-5 h-5 sm:w-7 sm:h-6" color="#49515a"/>
                    <p className="text-sm md:text-lg">Blog Web App</p>
                </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 mb-[30px]">
                <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#49515a] mb-4 font-bold">Certification</h2>
                </div>
                <div className="mb-3 flex items-center gap-2">
                    <Icon icon="bx:certification" className="w-5 h-5 sm:w-7 sm:h-6" color="#49515a" />
                    <p className="text-black text-sm md:text-lg">SQL:-<span className="text-[#999] text-sm md:text-lg">Great Learning</span></p>
                    <a
                        href="https://drive.google.com/file/d/1v08nxhsNj78Hp0LUvkrcJGFLZ4OqzzX4/view?usp=sharing"
                        className="no-underline text-base-color hover:no-underline text-sm md:text-lg hover:text-base-color flex gap-2"
                    >
                        Link
                        <Icon icon="uil:external-link-alt" className="w-5 h-5 sm:w-7 sm:h-6" color="#49515a" />
                  </a>
                </div>
                <div className="mb-3 flex items-center gap-2">
                    <Icon icon="bx:certification" className="w-5 h-5 sm:w-7 sm:h-6" color="#49515a" />
                    <p className="text-black text-sm md:text-lg">MySQL Basic:-<span className="text-[#999] text-sm md:text-lg">Great Learning</span></p>
                    <a
                        href="https://drive.google.com/file/d/1qXkh1489bsXlNtqKrhQm8a6Z63qz_0Ep/view?usp=sharing"
                        className="no-underline text-base-color hover:no-underline text-sm md:text-lg hover:text-base-color flex gap-2"
                    >
                    Link
                    <Icon icon="uil:external-link-alt" className="w-5 h-5 sm:w-7 sm:h-6" color="#49515a" />
                  </a>
                </div>
                <div className="mb-3 flex items-center gap-2">
                    <Icon icon="bx:certification" className="w-5 h-5 sm:w-7 sm:h-6" color="#49515a" />
                    <p className="text-black text-sm md:text-lg">Cloud Foundations:- <span className="text-[#999] text-sm md:text-lg">AWS Academy</span></p>
                    <a
                        href="https://drive.google.com/file/d/1Oxx0g6OGVdJmRyWheEJjbuwzPjAOufX_/view"
                        className="no-underline text-base-color hover:no-underline text-sm md:text-lg hover:text-base-color flex gap-2"
                    >
                    Link
                    <Icon icon="uil:external-link-alt" className="w-5 h-5 sm:w-7 sm:h-6" color="#49515a" />
                  </a>
                </div>
                <div className="mb-3 flex items-center gap-2">
                    <Icon icon="bx:certification" className="w-5 h-5 sm:w-7 sm:h-6" color="#49515a" />
                    <p className="text-black text-sm md:text-lg">Introduction to Cloud Semester 1:- <span className="text-[#999] text-sm md:text-lg">AWS Academy</span></p>
                    <a
                        href="https://drive.google.com/file/d/1mS39IQ3619Dxc3iVB4LHApPbxscqJ3WA/view"
                        className="no-underline text-base-color hover:no-underline text-sm md:text-lg hover:text-base-color flex gap-2"
                    >
                    Link
                    <Icon icon="uil:external-link-alt" className="w-5 h-5 sm:w-7 sm:h-6" color="#49515a" />
                  </a>
                </div>
                <div className="mb-3 flex items-center gap-2">
                    <Icon icon="bx:certification" className="w-5 h-5 sm:w-7 sm:h-6" color="#49515a" />
                    <p className="text-black text-sm md:text-lg">Full Stack Developer:-<span className="text-[#999] text-sm md:text-lg">Aptitech Education</span></p>
                    <a
                        href="https://drive.google.com/file/d/1f-bW4XZt48Dd_jo-HrF0E1-3Nwm0Hifc/view"
                        className="no-underline text-base-color hover:no-underline text-sm md:text-lg hover:text-base-color flex gap-2"
                    >
                    Link
                    <Icon icon="uil:external-link-alt" className="w-5 h-5 sm:w-7 sm:h-6" color="#49515a" />
                  </a>
                </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 mb-[30px]">
                <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#49515a] mb-4 font-bold">Languages</h2>
                </div>
                <div className="flex items-center gap-2 mb-3">
                    <p className="text-sm md:text-lg">English</p>
                </div>
                <div className="flex items-center gap-2 mb-3">
                    <p className="text-sm md:text-lg break-all">Hindi</p>
                </div>
            </div>
        </div>
      </section>
        </div>
    )
}