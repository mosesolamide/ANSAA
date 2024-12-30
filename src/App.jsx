import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./promotional/Layout"
import PromotionalActivities from "./promotional/promotionalActivities"

export default function App(){
  return (
    <BrowserRouter
        future={{
          v7_startTransition: true, // Opt into startTransition behavior
          v7_relativeSplatPath: true, // Adjust relative splat route handling
        }}
    >
      <Routes>
          <Route path="/" element={<Layout />}> 
              <Route path="promotionalActivities" element={<PromotionalActivities />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}