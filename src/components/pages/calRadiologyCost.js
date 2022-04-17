import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import './radiology.css';

import "react-datepicker/dist/react-datepicker.css";


export default class calRadiologyCost extends Component {
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        this.onChangePatientName = this.onChangePatientName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTestingName = this.onChangeTestingName.bind(this);
        this.onChangeScanCost = this.onChangeScanCost.bind(this);
        this.onChangeNoOfScans = this.onChangeNoOfScans.bind(this);
        this.onChangeTotalCost = this.onChangeTotalCost.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            _id: '',
            patientname: '',
            date: new Date(),
            testingname: '',
            scancost: '',
            noOfScans: '',
            totalCost: '',
        }
    }

    onChangeID(e) {
        this.setState({
            _id: e.target.value
        });
    }

    onChangePatientName(e) {
        this.setState({
            patientname: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onChangeTestingName(e) {
        this.setState({
            testingname: e.target.value
        });
    }

    onChangeScanCost(e) {
        this.setState({
            scanCost: e.target.value
        });
    }

    onChangeNoOfScans(e) {
        this.setState({
            noOfScans: e.target.value
        });
    }

    onChangeTotalCost(e) {
        this.setState({
            totalCost: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const cost = {
            _id: this.state._id,
            patientname: this.state.patientname,
            date: this.state.date,
            testingname: this.state.testingname,
            scanCost: this.state.scanCost,
            noOfScans: this.state.noOfScans,
            totalCost: this.state.totalCost
        }

        console.log(cost);

        axios.post('http://localhost:5000/cost/add', cost)
            .then(res => console.log(res.data));

        alert("Successfully genarate report!");
        window.location = '/manageRadiologyPatient';
    }


    render() {
        return (

            <div className="calRadiologyCostPage">
                <br />
                <button className="viewAllCostBtn"><Link to="/viewRadiologyCost">View All Cost Details</Link></button>
                <br />
                <form onSubmit={this.onSubmit} className="container" id="calcForm">
                    <h3 className="calcCostTitle">PATIENT COST CALCULATION</h3>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                        <br />
                    </div>
                    <div className="form-group">
                        <label>Patient ID: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state._id}
                            onChange={this.onChangeID}
                        />
                    </div>
                    <div className="form-group">
                        <label>PatientName: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.patientname}
                            onChange={this.onChangePatientName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Testing Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.testingname}
                            onChange={this.onChangeTestingName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Cost Per Scan: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.scanCost}
                            onChange={this.onChangeScanCost}
                        />
                    </div>
                    <div className="form-group">
                        <label>Number Of Scans: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.noOfScans}
                            onChange={this.onChangeNoOfScans}
                        />
                    </div>

                    <label>Total RadiologyCost: </label>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            value={(this.state.scanCost * this.state.noOfScans)}
                            onClick={this.getTotal}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Add to Database" className="btn btn-primary" onClick={this.getTotal} />
                        <br />

                    </div>
                </form>




                <br />
            </div>

        )

    }

}
