import { XMarkIcon } from "@heroicons/react/16/solid";
import { ArrowDown2, HambergerMenu } from "iconsax-react";
import userImg from "../../assets/Images/DefaultProfileLogo.png";
import Greetings from "../Settings/Greetings/Greetings";
import { useState } from "react";

export default function NavSettings({ mobileSidebar, setMobileSidebar, nLogout }) {
  const [openSlide] = useState(false);
  const [card, setCard] = useState(false);



  return (
    <div className="flex items-center justify-between  py-5 pt-24 lg:pt-5 pb-5 lg:ml-[230px] lg:pl-[90px] lg-10">
      <div className="sm: mt-[3.25rem] sm: ml-[5rem] lg:ml-2 md:ml-20">
        <Greetings />
      </div>
      <div
        className={`flex items-center justify-between md:justify-evenly bg-[#F5F5F5] fixed top-0 right-0 py-4 px-4 md:rounded-bl-[77px] ${openSlide ? "z-0" : "z-50"
          } md:px-3 pl-[36px] pr-[36px] w-full md:w-[23rem] lg:w-[30rem]`}
      >
        <button
          className="relative shadow-none lg:hidden mr-5"
          onClick={() => setMobileSidebar(!mobileSidebar)}
        >
          {mobileSidebar ? (
            <XMarkIcon color="#000" className="w-8 h-8" />
          ) : (
            <HambergerMenu size={30} color="#000" />
          )}
        </button>
        <div className="flex items-center justify-center gap-6">

          </div>

          <div className="flex items-center" onClick={() => setCard(!card)}>
            <div className="flex-shrink-0">
              <img
                className="object-cover w-11 h-11 rounded-full"
                src={userImg}
                alt="user"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = userImg;
                }}
              />
            </div>
            <div className="hidden w-full ml-3 space-y-1 lg:block">
              <h4 className="capitalize text-lg font-bold leading-none font-tb whitespace-nowrap text-slate-800">
                Fardeen Nulwala
              </h4>

            </div>
            <button
              className="hidden px-3 lg:block"
              onClick={() => setCard((prev) => !prev)}
            >
              <ArrowDown2
                size={22}
                color="#000"
                className={`transition-transform duration-300 ${card ? "rotate-180" : "rotate-0"
                  }`}
              />
            </button>
          </div>
        </div>
      </div>

  );
}
