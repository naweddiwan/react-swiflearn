import React from 'react'
import {Card} from 'react-bootstrap'
function Cards(props) {

    const name = props.name;

    return (
        <div>
            <Card className = "card" >
                <Card.Img variant="top" src="./play.png" />
                <Card.Body>
                <Card.Text>
                   See what <span style = {{color: "red"}}> {name}</span> thinks about our plans
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards
