import React from 'react'
import { Image } from 'react-bootstrap'
import logo from '../../Images/TempLogo.jpeg'

const imgStyle = {
    border: "2px solid black",
    height: "200px"
}

const Logo = () => (
    <div className="container-fluid my-3">
        <Image  fluid roundedCircle
                src={logo}
                style={imgStyle}
                alt="Temporary Logo"/>
    </div>
)

export default Logo