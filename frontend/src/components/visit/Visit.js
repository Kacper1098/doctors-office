import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import {Form, Button} from 'react-bootstrap'
import './visit.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as moment from 'moment'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router';

export default class Visit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            facilities: [
                {name: 'Placowka', address: 'Adres', street: 'Ulica', postalCode: '11-111', phoneNumber: '111222333'}
            ],
            doctors: [
                {firstName: 'Jerzy', lastName: 'Dudek', pwz: 4451342},
                {firstName: 'Agata', lastName: 'Stempel', pwz: 3331341},
            ],
            schedules: [{doctor: '12313', schedule: ['15:00-15:30','15:30-16:00']},],
            schedule: ['15:00-15:30','15:30-16:00'],
            date: '',
            facility: '',
            doctorDisabled: true,
            hourDisabled: true,
            doctor: '',
            name: '',
            surname: '',
            pesel: '',
            address: '',
            street: '',
            postalCode: '',
            hour: '',
            phone: '',
        }
    }
    componentDidMount() {
        fetch('facility/')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                facilities: data,
                facility: data[0].id
            })
        })
        .catch(error=>{
            console.log(error);
        });
    }

    handleDateChange = date => {

        this.setState({
          date: date
        });
        this.getDoctorsFromApi();
    };

    getDoctorsFromApi = () => {
        setTimeout(()=>{
            if (this.state.date && this.state.facility) {
            fetch('doctor/facility/'+this.state.facility+'?date=' + moment(this.state.date).format("yyyy-MM-DD"))
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let doctors = [];
                let schedules = [];
                let schedule = {};
                data.map(doctor=> {
                    doctors.push(doctor.doctor);
                    schedule = {doctor: doctor.doctor.pwz, schedule: doctor.availableHours}
                    schedules.push(schedule);
                })
                this.setState({
                    doctorDisabled: false,
                    doctors: doctors,
                    schedules: schedules,
                    hourDisabled: true,
                })
                this.refs.doctorRef.value = '';
                this.refs.hourRef.value = '';
                })
                .catch(error=>{
                    console.log(error);
                }); 
            }
        }, 100);
    }

    handleFacilitySelect = event => {
        this.setState({
            facility: event.target.value
        })
        this.getDoctorsFromApi();
    }

    handleDoctorSelect = event => {
        let scheduleToSet = [];
        this.state.schedules.forEach(schedule => {
            if (schedule.doctor == event.target.value){
                scheduleToSet = schedule.schedule;
            }
            
        }) 
        this.setState({
            doctor: event.target.value,
            schedule: scheduleToSet,
            hourDisabled: false
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value.trim()
        })
    }

    handleHourChange = event => {
        this.setState({
            hour: event.target.value.split('-')[0]
        })
        console.log(this.state.hour)
    }
    handleSubmit = event => {
        
        let data = {
            doctorId: this.state.doctor,
            facilityId: this.state.facility,
            patient: {
                firstName: this.state.name,
                lastName: this.state.surname,
                phoneNumber: this.state.phone,
                postalCode: this.state.postalCode,
                street: this.state.street,
                city: this.state.address,
                identityNumber: this.state.pesel,
            },
            
            dateTime: moment(moment(this.state.date).format("yyyy-MM-DD") + " " + this.state.hour).add(2, 'hours'),
        }

        fetch('visit/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.location.href = "visitAdded";
        }); 
        event.preventDefault();
    }

    render() {
        return (
            <div id="root-visit">
                <Card className="visit-card">
                    <Card.Body>
                        <Card.Title>Nowa wizyta</Card.Title>
                        <Card.Text>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formFacilitySelect">
                                <Form.Label>Wybierz placówkę</Form.Label>
                                <Form.Control as="select" onChange={this.handleFacilitySelect}>
                                    {this.state.facilities.map(facility => {
                                        return <option key={facility.id} value={facility.id}>{facility.name} - {facility.street} {facility.postalCode}
                                                        , {facility.address} tel.{facility.phoneNumber}</option>
                                    })}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Wybierz datę</Form.Label><br/>
                                <DatePicker required dateFormat="yyyy-MM-dd" selected={this.state.date} onChange={this.handleDateChange}/> 
                            </Form.Group>
                            <Form.Group controlId="formDoctorSelect">
                                <Form.Label>Wybierz lekarza</Form.Label>
                                <Form.Control ref="doctorRef" required as="select" onChange={this.handleDoctorSelect} disabled={this.state.doctorDisabled}>
                                    <option></option>
                                    {this.state.doctors.map(doctor => {
                                        return <option value={doctor.pwz}>{doctor.firstName} {doctor.lastName} ({doctor.pwz})</option>
                                    })}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formTimeSelect">
                                <Form.Label>Wybierz godzinę</Form.Label>
                                <Form.Control ref="hourRef" required as="select" disabled={this.state.hourDisabled} onChange={this.handleHourChange}>
                                    <option></option>
                                    {this.state.schedule.map(time => {
                                        return <option>{time}</option>
                                    })}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formName" >
                                <Form.Label>Imię</Form.Label>
                                <Form.Control required type="text" name="name" onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="formSurname" >
                                <Form.Label>Nazwisko</Form.Label>
                                <Form.Control required type="text" name="surname" onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formPesel">
                                <Form.Label>PESEL</Form.Label>
                                <Form.Control required type="text"  name="pesel" onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="formPhonel">
                                <Form.Label>Numer telefonu</Form.Label>
                                <Form.Control required type="text"  name="phone" onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="formAddress">
                                <Form.Label>Miasto</Form.Label>
                                <Form.Control required type="text"  name="address" onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="formStreet">
                                <Form.Label>Ulica</Form.Label>
                                <Form.Control required type="text"  name="street" onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="formPostal">
                                <Form.Label>Kod pocztowy</Form.Label>
                                <Form.Control required type="text"  name="postalCode" onChange={this.handleChange}/>
                            </Form.Group>

                            <Button variant="primary" type="submit" id="visit-button">
                                Umów wizytę
                            </Button>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

