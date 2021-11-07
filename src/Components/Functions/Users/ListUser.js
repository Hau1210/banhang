import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Listuser extends Component {
    state = {
        listUsers: []
    }
    async componentDidMount() {
        let res = await axios.get('https://618140038bfae60017adfee2.mockapi.io/users')
        this.setState({
            listUsers: res.data
        })
    }
    render() {
        let { listUsers } = this.state;
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>password</th>
                            <th>address</th>
                            <th>phone</th>
                            <th>gender</th>
                            <th>roleid</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((item, index) => {
                                return (
                                    <tr>
                                        <td key={item.id}>{index + 1}</td>
                                        <td >{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.password}</td>
                                        <td>{item.address}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.roleid}</td>
                                        <td>
                                            <Button
                                                variant="primary"
                                                className="ml-3"
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="danger"
                                                className="ml-3"
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })}

                    </tbody>
                </Table>
            </div>
        );
    }

}

export default Listuser;
