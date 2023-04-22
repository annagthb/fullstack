import React from 'react'
import PropTypes from 'prop-types'


const Button=({colour,text, onClick})=>
{
    return (
        <btn onClick={onClick}
        className="btn"
        style={{backgroundColor:colour}}>{text}</btn>
    )
}

Button.defaultProps={
    title:"everyone",
    color:"steelblue"
}

Button.propTypes={
    title:PropTypes.string.isRequired,
    color:PropTypes.string,
    onClick:PropTypes.func
}

export default Button