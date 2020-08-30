import React from 'react'
import { Navbar } from 'react-bootstrap'
import Logo from '../../Images/stealth-logo.png'

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
    },
    spanStyle: {
        backgroundColor: "#FFFFFF"
    }
}

const Header = () => (
        <Navbar bg='dark'>
            <Navbar.Brand style={headerStyle.brandStyle}>
                <span style={headerStyle.spanStyle} className="mx-2">
                    <img src={Logo}
                        className="pb-1"
                        width="50"
                        height="50"
                        alt="Temp Logo" />
                </span>
                Stealth Mode Technologies
            </Navbar.Brand>
        </Navbar>
)

export default Header