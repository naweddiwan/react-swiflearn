import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import {Carousel} from '3d-react-carousal';
import Cards from './Cards';



function Home() {
    const slides =[
                    <Cards name = "Leena Barua" />,
                    <Cards name = "Jim Hofman"/>,
                    <Cards name = "Terry Black"/>,
                    <Cards name = "Sarah Hamilton"/>,
                    <Cards name = "Jayesh Kumar"/>,
                    <Cards name = "Soumya Dev"/>,
                ]; 
    return (
        <div>
            <Navbar  expand="lg"  className = "nav">

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className = "nav1">

                        <Nav.Link  href = "#home"> Upcoming <img src="./dot.svg" alt = "stream-logo" width = "15px" height="15px"/> <br></br> <span className = "text"> Live Consultation </span></Nav.Link>
                        <Nav.Link  className = "text" href = "#home"> <br></br> Buy Plans </Nav.Link>
                        <Nav.Link  className = "text" href = "#home"> <br></br> View Plans </Nav.Link>
                
                    </Nav>
                    <Button  className = 'login'>Log In</Button>

                </Navbar.Collapse>
            </Navbar>

            <h1 className = "heading"> Concept Videos</h1>
            <h3 className = "subheading"> Select a number</h3>

            <Carousel slides = {slides} autoplay = {true} interval = {2000} />

            <h1 className = "heading" >Live Classes</h1>
            <h3 className = "subheading"> Select a number</h3>

            <Nav className = "bottom">
                    <Nav.Link className = 'foot'  href = "#home"> 5 </Nav.Link>
                    <Nav.Link className = 'foot'  href = "#home"> 6 </Nav.Link>
                    <Nav.Link className = 'foot'  href = "#home"> 7 </Nav.Link>
                    <Nav.Link className = 'foot'  href = "#home"> 8 </Nav.Link>
                    <Nav.Link className = 'foot'  href = "#home"> 9 </Nav.Link>
            </Nav>
           
        </div>
    )
}

export default Home
