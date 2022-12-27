import React from 'react'

const Avatar = ({children,backgroundColor,
    padding,
    borderRadius,
    fontSize,
    cursor,px,py,color}) => {
    const style = {
        backgroundColor,
        padding: `${py} ${px}`,
        color: color || `black`,
        borderRadius,
        fontSize,
        cursor: cursor || null,
        textDecoration: "null"

    }
  return (
    <div style={style}>{children}</div>
  )
}

export default Avatar