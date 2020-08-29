import React from 'react'
import { Navbar } from 'react-bootstrap'
import Logo from '../../Images/logo192.png'

const headerStyle = {
    brandStyle: {
        fontSize: '25px',
        fontWeight: '700',
        fontFamily: "'Montserrat', sans-serif",
        color: "white"
    },
    linkStyle: {
        fontSize: '25px',
        fontWeight: '500'
    }
}

const Header = () => (
        <Navbar bg='dark'>
            <Navbar.Brand style={headerStyle.brandStyle}>
                <img src={Logo}
                     className="mx-2 align-top"
                     width="25"
                     height="25"
                     alt="Temp Logo" />
                Bia Capital Management
            </Navbar.Brand>
        </Navbar>
)

export default Header