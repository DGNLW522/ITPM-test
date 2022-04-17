import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./pharmacy.css"

const Madicines = props => (
    <tr>
        <td>{props.madicines.cname}</td>
    <td>{props.madicines.cemail}</td>
    <td>{props.madicines.caddress}</td>
    <td>{props.madicines.nic.substring(0,12)}</td>
    <td>{props.madicines.gender}</td>
    <td>{props.madicines.mobileno.substring(0,15)}</td>

        <td>
            <Link to={"/editcustomer/" + props.madicines._id}>edit</Link> | <a href="customer-list" onClick={() => { props.deleteMadicines(props.madicines._id) }}>delete</a>
        </td>
    </tr>
)


export default class ViewMadicines extends Component {
    constructor(props) {
        super(props);

        this.deleteMadicines = this.deleteMadicines.bind(this);

        this.state = { madicines: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/madicines/')
            .then(response => {
                this.setState({ madicines: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteMadicines(id) {
        axios.delete('http://localhost:5000/madicines/' + id)
            .then(res => console.log(res.data));

        this.setState({
            madicines: this.state.madicines.filter(sml => sml._id !== id)
        })
        alert("Delete Customer Details?")
    }

    madicinesList() {
        return this.state.madicines.map(currentmadicines => {
            return <Madicines madicines={currentmadicines} deleteMadicines={this.deleteMadicines} key={currentmadicines._id} />;
        })
    }



    render() {
        return (
            <div className='viewMedicinePage'>
                <br />
                <div className='container' id="viewMedicineForm">
                <button className="searchMadicineBtn"><Link className="toAddPage" to="/searchCustomer" >Search Customer</Link></button> 
                <button className="searchMadicineBtn"><Link className="toAddPage" to="/create" >Add Customer</Link></button>   
                <button className="searchMadicineBtn"><Link className="toAddPage" to="/MadicinesReport" >Customers Report</Link></button>   
                    <h3 className="viewMedicineTitle">MEDICINES LIST</h3>
                    <br />
                    <table className="table">
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
                            {this.madicinesList()}
                        </tbody>
                    </table>
             
                    
                </div>
            </div>
        )
    }
}