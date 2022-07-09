import React, {useEffect, useState} from 'react';
import Table from "react-bootstrap/Table";


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/user/list`)
            .then((response) => response.json())
            .then(users => setUsers(users));
    }, []);


    return (
        <Table className="mt-3" responsive="sm"  striped bordered hover size="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((user, index) => <tr>
                    <td>{index + 1}</td>
                    <td>{user?.userId}</td>
                    <td>{user?.name}</td>
                    <td>{user?.phone}</td>
                </tr>)
            }

            </tbody>
        </Table>
    );
};


export default Users;