import React, {Component} from "react";
import {Card, Form} from "react-bootstrap";
import './visitPreview.css'
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import {FaSearchPlus} from 'react-icons/fa'
import VisitModal from "./VisitModal";

class VisitPreview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visits : [],
            identityNumber: "",
            firstName: "",
            lastName: "",
            modalShow: false,
            selectedVisit: {}
        }
    }
    render() {
        return (
            <div id="visit-preview-component">
                <Card>
                    <Card.Body>
                        <Card.Title>Wyszukaj swoje wizyty</Card.Title>
                        <Form onSubmit={(e) => this.fetchVisits(e)}>
                            <Form.Row>
                                <div className={"inputs"}>
                                    <Form.Group as={Col} controlId="visitsSearchFormIdentityNo"
                                                className="visitSearchFormGroup">
                                        <Form.Label>Pesel</Form.Label>
                                        <Form.Control required name="identityNumber" type="text"
                                                      placeholder="Podaj pesel" onChange={this.handleOnChange}/>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="visitsSearchFormFirstName"
                                                className="visitSearchFormGroup">
                                        <Form.Label>Imię</Form.Label>
                                        <Form.Control required name="firstName" type="text" placeholder="Podaj imię"
                                                      onChange={this.handleOnChange}/>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="visitsSearchFormLastName"
                                                className="visitSearchFormGroup">
                                        <Form.Label>Nazwisko</Form.Label>
                                        <Form.Control required name="lastName" type="text" placeholder="Podaj nazwisko"
                                                      onChange={this.handleOnChange}/>
                                    </Form.Group>
                                </div>
                                <Button type="submit" variant="primary" id={"visitSearchFormSubmitButton"}>
                                    Wyszukaj
                                </Button>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                    <hr/>
                    <Table striped bordered hover>
                        {this.state.visits.length > 0 ?
                            <thead>
                            <tr>
                                <th>Numer wizyty</th>
                                <th>Nazwa placówki</th>
                                <th>Imię i nazwisko lekarza</th>
                                <th>Number PWZ lekarza</th>
                                <th>Data</th>
                                <th>Podgląd</th>
                            </tr>
                            </thead> : ""}
                        <tbody>
                        {this.renderTableData()}
                        </tbody>
                    </Table>
                </Card>
                {this.state.modalShow
                        ?
                        <VisitModal show={this.state.modalShow}
                                    onHide={() => this.setState(state=>{
                                        return {...state, modalShow: false}
                                    })}
                                    selectedVisit={this.state.selectedVisit}
                        />
                        :
                        ""}
            </div>
        );
    }
    renderTableData(){
        return this.state.visits.map((visit, index) => {
            return (
                <tr key={visit.id}>
                    <td>{index + 1}</td>
                    <td>{visit.facility.name}</td>
                    <td>{visit.doctor.firstName} {visit.doctor.lastName}</td>
                    <td>{visit.doctor.pwz}</td>
                    <td>{visit.dateTime.replace("T", " ").slice(0, visit.dateTime.length-3)}</td>
                    <td>
                        <a onClick={(e) => {this.visitPreview(e, visit)}} id="preview-icon">
                            <FaSearchPlus/>
                        </a>
                    </td>
                </tr>
            )
        });
    }

    handleOnChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    visitPreview(e, visit){
         this.setState(state=>{
            return {...state, modalShow: true, selectedVisit: visit}
         });
    }

    fetchVisits = (event) => {
        fetch(`visit?identityNumber=${this.state.identityNumber}&firstName=${this.state.firstName}&lastName=${this.state.lastName}`)
            .then(response => response.json())
            .then(data => this.setState( state => {
                return {...state, visits: data}
            }));

        event.preventDefault();
    }
}



export default VisitPreview;
