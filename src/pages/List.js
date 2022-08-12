import classes from './List.module.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Home(params) {

    const fakeData = [
        { id: "1", username: "1", email: "2" },
        { id: "2", username: "1", email: "2" },
        { id: "3", username: "1", email: "2" },
        { id: "4", username: "1", email: "2" },
        { id: "5", username: "1", email: "2" },
        { id: "6", username: "1", email: "2" },
        { id: "7", username: "1", email: "2" },
        { id: "8", username: "1", email: "2" },
    ]

    let [search, inputSearch] = useState('')

    function onChangeSearch(event) {
        inputSearch(event.target.value)
    }

    function sendSearch() {
        console.log(search);
    }

    return (
        <div className='m-3'>
            <Form className='row'>
                <Form.Group className="mb-3 col-11" controlId="formBasicEmail">
                    <Form.Control onChange={onChangeSearch} type="text" placeholder="Search" />
                </Form.Group>

                <Button className='col-1 mb-3' variant="primary" onClick={sendSearch}>
                    Search
                </Button>
            </Form>


            <table>

                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {
                        fakeData.map(item => {
                            return (
                                <tr key={item.id}>
                                    <th>{item.username}</th>
                                    <th>{item.email}</th>
                                    <th>
                                        <Link to={"/edit/" + item.id}>
                                            <Button>Edit</Button>
                                        </Link>
                                    </th>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Home