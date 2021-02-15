import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {

    return (
        <button 
        className="btn" 
        onClick={onClick}
        style={{background:color}}>{text}</button>
    )
}
Button.defaultProps = {
    color :'steelblue',
    text : 'DEFAULT'
}
Button.prototype = {
    text : PropTypes.string,
    color : PropTypes.string,
    onClick: PropTypes.func.isRequired
}
export default Button
