import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
//import DisplayAnswer from './DisplayAnswer'
import QuestionsDetails from './QuestionsDetails'

function DisplayQuestion() {
  return (
    <div>
        
        <div className="home-container-1">
        <LeftSidebar/>
        <div className="home-container-2">
         
          <RightSidebar/>
          <br/>
        <br/>
        
        DisplayQuestion
        <QuestionsDetails/>
        {/* <DisplayAnswer/> */}
        </div>
        </div>
        </div>
  )
}

export default DisplayQuestion