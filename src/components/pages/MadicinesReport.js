import React, { PureComponent, Component } from 'react';
import axios from 'axios';
import './pharmacy.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable'


const Exercises = props => (
    <tr>
        <td>{props.madicines.cname}</td>
    <td>{props.madicines.cemail}</td>
    <td>{props.madicines.caddress}</td>
    <td>{props.madicines.nic.substring(0,12)}</td>
    <td>{props.madicines.gender}</td>
    <td>{props.madicines.mobileno.substring(0,15)}</td>
    </tr>
)

export default class pdfGenerator extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { exercises: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/madicines/')
            .then(response => {
                this.setState({ exercises: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    exercisesDetailsList() {
        return this.state.exercises.map(currentexercises => {
            return <Exercises exercises={currentexercises} deleteExercises={this.deleteExercises} key={currentexercises._id} />;
        })
    }

    jsPdfGenerator = () => {
        var doc = new jsPDF('p', 'pt');

        doc.autoTable({ html: '#exercisesDetailsTable' })

        doc.save("Customer_Report.pdf");


    }

 
    render() {
        return (
            <div className='viewExercisesPage'>
                <br />
                <div className='container' >
                    <h3 className="PharmacyexercisesDetails">CUSTOMERS DETAILS</h3>
                    <table className="table" id="exercisesDetailsTable">
                        <thead className="thead-light">
                            <tr>
                            <th>Customer Name</th> 
                        <th>Email</th> 
                        <th>Address</th> 
                        <th>NIC</th> 
                        <th>Gender</th> 
                        <th>MobileNo</th> 
                        <th>Actions</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.exercisesDetailsList()}
                        </tbody>
                    </table>

                    <button onClick={this.jsPdfGenerator} className="generateRepoBtn">GENERATE REPORT</button>
                </div>
            </div>
        )
    }
}