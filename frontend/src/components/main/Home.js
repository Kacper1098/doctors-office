import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import './main.css'
import {Link} from "react-router-dom";
import {IoMdMedkit} from "react-icons/io";
import {AiOutlineUnorderedList} from "react-icons/ai";
import {MdPermContactCalendar} from "react-icons/md";

export default class Home extends Component {

    render() {

        return (
            <div className="main">
                <div className="card-container">
                    <Card className="main-card" style={{width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>Wizyta</Card.Title>
                            <Card.Text>
                                <br/>
                                <div className={"cardIcon"}>
                                    <IoMdMedkit size={78}/>
                                </div>
                                Umów się na wizytę do wybranej placówki i lekarza
                            </Card.Text>
                            <Button variant="primary" as={Link} to="/visit"><b>Umów wizytę.</b></Button>
                        </Card.Body>
                    </Card>
                    <Card className="main-card" style={{width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>Sprawdź swoje wizyty</Card.Title>
                            <Card.Text>
                                <br/>
                                <div className={"cardIcn"}>
                                    <AiOutlineUnorderedList size={73}/>
                                </div>
                                Wyszukaj wszystkie swoje umówione wizyty podając pesel, imię oraz nazwisko
                            </Card.Text>
                            <Button variant="primary" as={Link} to="/visitPreview">
                                <b>Sprawdź wizytę</b>
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card className="main-card" style={{width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>Kontakt</Card.Title>
                            <Card.Text>
                                <div className={"cardIcon"}>
                                    <MdPermContactCalendar size={78}/>
                                </div>
                               Skontaktuj się z nami po więcej informacji
                            </Card.Text>
                            <Button variant="primary" as={Link} to="/contact"><b>Kontakt</b></Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        )
    }
}
