import React from 'react'
import "./RightSidebar.css"
import pen from "../../Assets/pen.png"
import blacklogo from "../../Assets/blacklogo.svg"
import comment from "../../Assets/comment.svg"

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The overflow blog</h4>
        <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
            <img src={pen} alt ="pen" width="18"></img>
        <p>Observablity is the key to the future <br/> of software engineers(and your DevOps career)</p>
        </div>
        <div className="right-sidebar-div-2">
            <img src={pen} alt ="pen" width="18"></img>
        <p>Podcast 374: How valuable is your screen <br/> name?</p>
        </div>
        </div>
        <br/>
        <h4>Featured on Meta</h4>
        <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
            <img src={comment} alt ="pen" width="18"></img>
        <p>Observablity is the key to the future <br/> of software engineers(and your DevOps career)</p>
        </div>
        <div className="right-sidebar-div-2">
            <img src={comment} alt ="pen" width="18"></img>
        <p>Podcast 374: How valuable is your screen <br/> name?</p>
        </div>
        <div className="right-sidebar-div-2">
            <img src={blacklogo} alt ="pen" width="18"></img>
        <p>Podcast 374: How valuable is your screen <br/> name?</p>
        </div>
        </div>
        <br/>
        <h4>The overflow blog</h4>
        <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
            <img src={pen} alt ="pen" width="18"></img>
        <p>Observablity is the key to the future <br/> of software engineers(and your DevOps career)</p>
        </div>
        <div className="right-sidebar-div-2">
            <img src={pen} alt ="pen" width="18"></img>
        <p>Podcast 374: How valuable is your screen <br/> name?</p>
        </div>
        </div>

    </div>
  )
}

export default Widget