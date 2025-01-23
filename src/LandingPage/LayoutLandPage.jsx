import React from "react"
import LandHeader from "./LandHeader"
import { Outlet } from "react-router-dom"

export default function LayoutLandPage (){
    return(
        <>
            <LandHeader />
            <main>
                <Outlet />
            </main>
        </>
    )
}
