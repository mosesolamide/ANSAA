import React, {createContext, useState, useEffect}from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./promotional/Layout"
import PromotionalActivities from "./promotional/PromotionalActivities"
import LayoutLandPage from "./LandingPage/LayoutLandPage"
import HomePage from "./LandingPage/HomePage"
import RegLogLayout from "./LoginReg/RegLogLayout"
import Register from "./LoginReg/Register"
import Login from "./LoginReg/Login"

export const Mycontext = createContext()

export default function App(){
const [ showModal,setShowModal ] = useState(false)

const [hideSideBar, setHideSideBar] = useState(
          JSON.parse(localStorage.getItem("sidebar")) || false
        )

        useEffect(() => {
          const handleResize = () => {
            if (window.innerWidth >= 768) {
              setHideSideBar(false)
              localStorage.setItem("sidebar", true)
            } else {
              setHideSideBar(true);
              localStorage.setItem("sidebar", false)
            }
          }

          window.addEventListener("resize", handleResize)
          handleResize()

          return () => {
            window.removeEventListener("resize", handleResize);
          }

        }, [])
  return (
    <Mycontext.Provider value={{showModal,setShowModal,hideSideBar,setHideSideBar}}>
      <BrowserRouter
          future={{
            v7_startTransition: true, // Opt into startTransition behavior
            v7_relativeSplatPath: true, // Adjust relative splat route handling
          }}
      >
        <Routes>
            <Route path="/" element={<LayoutLandPage />}>
              <Route index element={<HomePage />}/>
            </Route>
            {/* <Route path="/" element={<Layout />}> 
                <Route path="promotionalActivities" element={<PromotionalActivities />} />
            </Route> */}
            <Route path="/reg" element={<RegLogLayout />}>
                <Route index element={<Register />} />
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </Mycontext.Provider>
  )
}