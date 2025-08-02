import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SideBar from '../Components/Sidebar/SideBar'
import Home from '../Pages/Home/Home'
import Experience from '../Pages/Experience'
import Projects from '../Pages/Projects'
import Publication from '../Pages/Publication'
import Qualification from '../Pages/Qualification'

export default function ProjectRoute() {

    return (
        <>
            <SideBar>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/Experience" element={<Experience />} />
                    <Route path="/Qualification" element={<Qualification />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Publication" element={<Publication />} />
                </Routes>
            </SideBar>
        </>
    )
}
