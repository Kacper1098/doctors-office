import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './visit.css'

export default function VisitAdded (props) {
    return (
        <div id="root-visit">
            <Card className="visit-added-card">
                <Card.Body>
                    <Card.Text> Pomyślnie dodano wizytę. </Card.Text>
                    <Button variant="primary" type="submit" id="visit-button">
                        OK
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}