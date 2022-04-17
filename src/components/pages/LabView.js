import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Lab = props => (
  <tr>
    <td>{props.lab.patientname}</td>
    <td>{props.lab.gender}</td>
    <td>{props.lab.testdate}</td>
    <td>{props.lab.mobilenumber}</td>
    <td>{props.lab.testtype}</td>
    
    <td>
      <Link to={"/editLab/" + props.lab._id}>VIEW</Link> &nbsp;&nbsp;| &nbsp;&nbsp; <a href="#" id="buttonlab" onClick={() => { props.deleteLab(props.lab._id) }}>DELETE</a>
    </td>
  </tr>
)

export default class LabView extends Component {
  constructor(props) {
    super(props);

    this.deleteLab = this.deleteLab.bind(this);

    this.state = { lab: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/lab/')
      .then(response => {
        this.setState({ lab: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteLab(id) {
    axios.delete('http://localhost:5000/lab/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      lab: this.state.lab.filter(el => el._id !== id)
    })
    alert("Delete Patient Details?")
  }
  

  LabView() {
    return this.state.lab.map(currentlab => {
      return <Lab lab={currentlab} deleteLab={this.deleteLab} key={currentlab._id} />;
    })
  }

  render() {
    return (
      <div className="LabView">
        <h3 className="viewlabTital">Lab Details</h3><br/><br/>
        <table className="table" className="container">
          <thead className="thead-light">
            <tr>
              <th>Patient Name</th>
              <th>Gender</th>
              <th>Test Date</th>
              <th>Mobile Number</th>
              <th>Test Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.LabView()}
          </tbody>
        </table>
      </div>
    )
  }
}