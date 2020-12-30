import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import * as moment from 'moment';
import Table from "react-bootstrap/Table";

function VisitModal(props) {
    return(
        <div id="visitPreviewModal">
            <Modal
                show={props.show}
                onHide={props.onHide}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Podgląd wizyty
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="visit-div-details">
                       <Table striped bordered>
                           <tbody>
                           <tr key={"visitDateTimeRow"}>
                               <td style={{width: '50%'}}>Data i godzina: </td>
                               <td>{props.selectedVisit.dateTime.replace("T", " ").slice(0, props.selectedVisit.dateTime.length-3)}</td>
                           </tr>
                           </tbody>
                       </Table>
                    </div>
                    <div id="facility-div-details">
                        <h5>Placówka</h5>
                        <Table striped bordered>
                            <tbody>
                            <tr key={"facilityNameRow"}>
                                <td style={{width: '50%'}}>Imię: </td>
                                <td>{props.selectedVisit.facility != null ? props.selectedVisit.facility.name : ""}</td>
                            </tr>
                            <tr key={"facilityPhoneNumberRow"}>
                                <td>Miasto: </td>
                                <td>{props.selectedVisit.facility != null ? props.selectedVisit.facility.phoneNumber : ""}</td>
                            </tr>
                            <tr key={"facilityCityRow"}>
                                <td>Numer telefonu: </td>
                                <td>{props.selectedVisit.facility != null ? props.selectedVisit.facility.city : ""}</td>
                            </tr>
                            <tr key={"facilityStreetRow"}>
                                <td>Nazwisko: </td>
                                <td>{props.selectedVisit.facility != null ? props.selectedVisit.facility.street : ""}</td>
                            </tr>
                            <tr key={"facilityPostalCodeRow"}>
                                <td>Miasto: </td>
                                <td>{props.selectedVisit.facility != null ? props.selectedVisit.facility.postalCode : ""}</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div id="doctor-div-details">
                        <h5>Lekarz</h5>
                        <Table striped bordered>
                            <tbody>
                            <tr key={"doctorFirstNameRow"}>
                                <td style={{width: '50%'}}>Imię: </td>
                                <td>{props.selectedVisit.doctor != null ? props.selectedVisit.doctor.firstName : ""}</td>
                            </tr>
                            <tr key={"doctorLastNameRow"}>
                                <td>Nazwisko: </td>
                                <td>{props.selectedVisit.doctor != null ? props.selectedVisit.doctor.lastName : ""}</td>
                            </tr>
                            <tr key={"doctorPwzNumberRow"}>
                                <td>Numer telefonu: </td>
                                <td>{props.selectedVisit.doctor != null ? props.selectedVisit.doctor.pwz : ""}</td>
                            </tr>
                            <tr key={"doctorPhoneNumberRow"}>
                                <td>Miasto: </td>
                                <td>{props.selectedVisit.doctor != null ? props.selectedVisit.doctor.phoneNumber : ""}</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div id="patient-div-details">
                        <h5>Pacjent</h5>
                        <Table striped bordered>
                            <tbody>
                                <tr key={"patientFirstNameRow"}>
                                    <td style={{width: '50%'}}>Imię: </td>
                                    <td>{props.selectedVisit.patient != null ? props.selectedVisit.patient.firstName : ""}</td>
                                </tr>
                                <tr key={"patientLastNameRow"}>
                                    <td>Nazwisko: </td>
                                    <td>{props.selectedVisit.patient != null ? props.selectedVisit.patient.lastName : ""}</td>
                                </tr>
                                <tr key={"patientPhoneNumberRow"}>
                                    <td>Numer telefonu: </td>
                                    <td>{props.selectedVisit.patient != null ? props.selectedVisit.patient.phoneNumber : ""}</td>
                                </tr>
                                <tr key={"patientCityRow"}>
                                    <td>Miasto: </td>
                                    <td>{props.selectedVisit.patient != null ? props.selectedVisit.patient.city : ""}</td>
                                </tr>
                                <tr key={"patientStreetRow"}>
                                    <td>Ulica: </td>
                                    <td>{props.selectedVisit.patient != null ? props.selectedVisit.patient.street : ""}</td>
                                </tr>
                                <tr key={"patientPostalCodeRow"}>
                                    <td>Kod pocztowy: </td>
                                    <td>{props.selectedVisit.patient != null ? props.selectedVisit.patient.postalCode : ""}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Zamknij</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

function convertDate(date, format){
    return moment(date).format(format);
}

export default VisitModal;
