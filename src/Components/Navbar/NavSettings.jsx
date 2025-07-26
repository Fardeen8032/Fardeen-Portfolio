import { XMarkIcon } from "@heroicons/react/16/solid";
import { HambergerMenu } from "iconsax-react";
import { useState } from "react";

export default function NavSettings({ mobileSidebar, setMobileSidebar, nLogout }) {
  const [openSlide] = useState(false);

  return (
    <div className="flex items-center justify-between pb-5 lg:ml-[230px] lg:pl-[90px] lg-10">
      <div
        className={`flex items-center justify-between md:justify-evenly fixed top-0 right-0 py-4 px-4 md:rounded-bl-[77px] ${openSlide ? "z-0" : "z-50"
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
        </div>
      </div>
  );
}
