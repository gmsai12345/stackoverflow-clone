import React from 'react'
import "./LeftSidebar.css"
import {NavLink} from "react-router-dom"
import globe from "../../Assets/globe.png"
const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className="side-nav">
            <NavLink to = "/" className="side-nav-links"  activeClass = "active">
                <p>Home</p>
            </NavLink>
            <div className="side-nav-div">
                <div>
                    <p>PUBLIC</p>
                    <NavLink to = "/Questions" className="side-nav-links">
                       <img src = {globe} alt = "df"/>
                        <p>Questions</p>
                    </NavLink>
                    <NavLink to = "/" className="side-nav-links">
                        <p>Tags</p>

                    </NavLink>
                    <NavLink to = "/" className="side-nav-links">
                        <p>Users</p>

                    </NavLink>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default LeftSidebar