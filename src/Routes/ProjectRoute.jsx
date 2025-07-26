import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SideBar from '../Components/Sidebar/SideBar'
import Home from '../Pages/Home/Home'

export default function ProjectRoute() {

    return (
        <>

                    <SideBar>
                        <Routes>
                            <Route path="" element={<Home />} />


                        </Routes>
                    </SideBar>


        </>
    )
}
