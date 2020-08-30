import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Construction from '../../Images/construction.jpg'

const pStyle = {
    fontSize: "20px"
}

const Main = () => (
    <div>
        <Jumbotron>
            <h2><em>What we do</em></h2>
            <p style={pStyle}>
                We utilize the latest in cutting edge technologies along with many different data points to provide end to end data solutions for various different applications
            </p>
        </Jumbotron>

        <Jumbotron>
            <h2 className="mb-5"><em>Please excuse our apperance!</em></h2>
            <div className="container-fluid">
                <div className="row d-flex flex-row justify-content-center">
                    <img className="col-12 col-md-8 col-lg-6"
                         src={Construction}
                         alt="Website under construction"
                         height="300px" />
                </div>
            </div>
        </Jumbotron>
    </div>
)

export default Main