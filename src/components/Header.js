import React from 'react'
import Button from './Button.js'
import PropTypes from 'prop-types'
const Header = ({test}) => {
    const onClick = () => {
        console.log('Jai cliquer')
    }

    return (
        <header className='header' >
        <h1>Add new {test}</h1>
        <Button color='green' text='Add' onClick={onClick} />
        {/* <Button color='blue' text='Hey'/>
        <Button color='red' text='Mamamya'/>
        <Button /> */}
        </header>
    )
}
Header.prototype= {
    test : PropTypes.string,
}
export default Header
