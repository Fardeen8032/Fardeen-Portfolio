import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { SuperAdminSidebarApi } from './SideBarApi';
import SideBarMenu from './SideBarMenu';
import Fardeen from '../../assets/Images/Fardeen.jpg';
import NavSettings from '../Navbar/NavSettings';
import "../Sidebar/SideBar.css";

export default function SideBar({ children }) {
    const [mobileSidebar, setMobileSidebar] = useState(false);
    const [isActiveLink, setIsActiveLink] = useState(false);


    return (
        <>

            <div className="">
                {mobileSidebar && <div className="fixed top-0 bottom-0 left-0 right-0 z-50 w-full h-screen" onClick={() => setMobileSidebar(!mobileSidebar)} />}
                <div className='' >
                    <div className={`${isActiveLink ? "w-[4.5rem]" : "w-[17rem]"} bg-white h-full  duration-700 lg:block  transition-all ease-in-out top-0 left-0 fixed shadow-lg ${mobileSidebar ? "block z-[90]" : "hidden"}`}>
                        {/* {!mobileSidebar && <div className="absolute z-10 top-14 -right-4">
                            <button onClick={() => setIsActiveLink(!isActiveLink)} className='bg-[#f3f3f3] hover:bg-sky-400 group p-2 rounded-full shadow-md transition-all duration-300'>
                                <DirectLeft className={`group-hover:text-white transition-all duration-500 ${isActiveLink && "rotate-180"}`} size={22} color='#007BFF' />
                            </button>
                        </div>} */}
                        {/* <div className="dashboard-box d-flex align-items-center justify-content-center py-4 border-bottom" >
                            <div className="">
                                <h4 className='mb-0 base-font-bold text-base-color fs-3 font-italic' style={{ cursor: "pointer" }} >TechieBears</h4>
                            </div>
                        </div> */}

                        <div className="d-flex justify-content-center align-items-center gap-3 flex-column mt-[15px]">
                            {/*<div className={isActiveLink ? "px-3 py-1 transition-all duration-700" : "px-5 py-3 transition-all duration-700"}>
                                <img src={logoImagesURL} className={isActiveLink ? " object-contain w-16 h-auto transition-all duration-700 rounded-md" : 'object-contain w-[180px] h-auto transition-all duration-700 rounded-md'} />
                            </div>*/}
                            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center overflow-hidden">
                                <img
                                src={Fardeen}
                                alt="Profile"
                                className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>

                        <div className="d-flex flex-column gap-2 overflow-scroll sidebarScroll sidebar-tabs">


                                    <>
                                        {SuperAdminSidebarApi()?.map((curElm, i) => {
                                            if (curElm.childs) {
                                                return (
                                                    <SideBarMenu key={i} curElm={curElm} />
                                                );
                                            }
                                            return (
                                                <NavLink
                                                    to={curElm.link}
                                                    key={i}
                                                    className="sidebar-link"
                                                >
                                                    <span className="d-flex gap-2 align-items-center">
                                                        <span className="">
                                                            {curElm.icon}
                                                        </span>
                                                        <h5 className="mb-0 title-font-700 fs-5 base-font-muli fw-bold">
                                                            {curElm.title}
                                                        </h5>
                                                    </span>
                                                </NavLink>
                                            );
                                        })}
                                    </>



                        </div>
                    </div>
                </div>
                <div className={isActiveLink ? "navbar-section-active transition-all duration-700 right-5 " : "navbar-section transition-all duration-700"} >
                    {/* ====================== Navbar start ===================== */}
                    <NavSettings  setMobileSidebar={setMobileSidebar} mobileSidebar={mobileSidebar} />
                    {/* ====================== sidebar end ===================== */}
                    <main className="pb-5" >
                        {/* ====================== Routes start ===================== */}
                        {children}
                        {/* ======================Routes start ===================== */}
                    </main>
                </div>
            </div>
        </>
    )
}
