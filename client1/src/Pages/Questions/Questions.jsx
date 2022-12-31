import React from 'react'
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar"
import RightSidebar from "../../Components/RightSidebar/RightSidebar"
import HomeMainbar from "../../Components/HomeMainbar/HomeMainbar"
import "../../App.css"


const Home = () => {
  return (
   
    <div>
       
      <div className="home-container-1">
        <LeftSidebar/>
        <div className="home-container-2">
          <HomeMainbar/>
          <RightSidebar/>
        </div>
      
       
    </div>
    </div>
  )
}

export default Home