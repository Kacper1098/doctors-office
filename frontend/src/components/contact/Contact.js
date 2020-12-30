import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./contact.css"
import {Table} from "react-bootstrap";

export default class Contact extends Component {
    render() {
        return(
            <div id={"contactCardDiv"}>
                <Card>
                    <Card.Body>
                        <Card.Title>Dane kontaktowe</Card.Title>
                        <h6>Chcesz się z nami skontaktować? </h6>
                        <h6>Możesz to zrobić na kilka sposobów: napisać do nas, zadzwonić, wysłać faks lub przyjść.</h6>
                    </Card.Body>
                    <Card.Body id={"companyDetails"}>
                        <Table>
                            <tbody>
                                <tr key={"companyRow"}>
                                    <td style={{width: "30%"}}>
                                        <b>KS MED sp. z o.o.</b>
                                        <br/>
                                        <br/>
                                        ul. Lanciego 8/37
                                        <br/>
                                        00-522 Warszawa
                                        <br/>
                                        województwo mazowieckie
                                    </td>
                                </tr>
                                <tr key={"companyRow1"}>
                                    <td style={{width: "30%"}}>
                                        <h4>Informacje dodatkowe</h4>
                                        <br/>
                                        Pracujemy w godzinach: 8:00-16:00
                                        <br/>
                                        Email: ks_med@gmail.com
                                        <br/>
                                        <br/>
                                        <b>Infolinia dla klientów</b>
                                        <br/>
                                        +48 675 275 251
                                        <br/>
                                        Czynna w dni robocze w godzinach 8:30-16:30
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
