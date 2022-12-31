import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "../src/Pages/Home/Home"
import Auth from "../src/Pages/Auth/Auth"
import Questions from "./Pages/Questions/Questions"
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
const Allroutes = () => {
  return (
    <div>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
        <Route path = '/Auth' element = {<Auth/>}/>
        <Route path = '/Questions' element = {<Questions/>}/>
        <Route path = '/AskQuestion' element = {<AskQuestion/>}/>
        <Route path = '/Questions/:_id' element ={<DisplayQuestion/>}/>
    </Routes>
    
    </div>
  )
}

export default Allroutes