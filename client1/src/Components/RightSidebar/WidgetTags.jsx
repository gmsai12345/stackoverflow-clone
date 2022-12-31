import React from 'react'
import "./RightSidebar.css"

const WidgetTags = () => {
    const Tags = ["C","C++","Java","python","JavaScript","React","Angular"]
  return (
    <div>
        <div className="widget-tags">
            <h4 className="">
                Watched tags
            </h4>
            <div className="widget-tag-div">
                {
                    Tags.map((tag) => (
                        <p key={tag} style={{ color: "#0000EE "}}>{tag}</p>
                    ) )
                }
            </div>
        </div>
    </div>
  )
}

export default WidgetTags