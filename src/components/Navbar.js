import React from 'react'

const Navbar = () => {

    const style = {
        background: 'rgb(240,240,240)',
        color: 'black'
    }
    return (
        <div className="navbar" style={style}>
            <h1>My react hook</h1>
            <ul>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
            </ul>
        </div>
    )
}

export default Navbar
