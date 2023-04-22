import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header=({title,onAdd})=>{
    const onClick=(event)=>{
        console.log('click')
    }

    return (
        <header className="header">
            <h1 style={headingStyle}>Task Tracker {title}</h1>
            <Button colour="green" text="Add" onClick={onAdd}></Button>
        <Button colour="blue" text="Delete"></Button>
        </header>
    )
}

Header.defaultProps={
    title:"everyone",
}

Header.propTypes={
    title:PropTypes.string.isRequired,
}

const headingStyle={color:"black",backgroundColor:'white'}

export default Header