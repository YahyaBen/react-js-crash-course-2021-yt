import React from 'react'
import Button from './Button.js'
import PropTypes from 'prop-types'
const Header = ({test}) => {
    const onClick = () => {
        console.log('Jai cliquer')
    }

    return (
        <header className='header' style={{color : 'red', background:'yellow'}}>
        <h1>Teste {test}</h1>
        <Button color='green' text='Hello' onClick={onClick} />
        <Button color='blue' text='Hey'/>
        <Button color='red' text='Mamamya'/>
        <Button />
        </header>
    )
}
Header.prototype= {
    test : PropTypes.string,
}
export default Header
