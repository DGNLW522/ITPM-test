import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../FinanceManagement/financeManage.css';

const Expenses = props => (
    <tr>
        <td>{props.expenses._id}</td>
        <td>{props.expenses.type}</td>
        <td>{props.expenses.department}</td>
        <td>{props.expenses.Value}</td>

        <td>
            <Link className='linkedit' to={"/edit-expenses.component/" + props.expenses._id}>edit</Link> | <a className='linkdelete' href="#" onClick={() => { props.deleteExpense(props.expenses._id) }}>delete</a>
        </td>
    </tr>
)

export default class ExpensesList extends Component {
    constructor(props) {
        super(props);

        this.deleteExpense = this.deleteExpense.bind(this);

        this.state = { expenses: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/expenses/')
            .then(response => {
                this.setState({ expenses: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteExpense(id) {
        axios.delete('http://localhost:5000/expenses/' + id)
            .then(res => console.log(res.data));

        this.setState({
            expenses: this.state.expenses.filter(sml => sml._id !== id)
        })
    }

    ExpensesList() {
        return this.state.expenses.map(currentexpense => {
            return <Expenses expenses={currentexpense} deleteExpense={this.deleteExpense} key={currentexpense._id} />;
        })
    }


    render() {
        return (
            <div className='viewExp'>
                <h3>Expenses Details</h3>
                <table className="table" className="container">
                    <thead className="thead-light" >
                        <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Department</th>
                            <th>Value</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.ExpensesList()}
                    </tbody>
                </table>
            </div>
        )
    }
}