import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import UserDataService from '../services/user.service'
import { useNavigate } from 'react-router-dom';

function New(params) {

    let navigate = useNavigate();

    let [user, changeUser] = useState({
        email: '',
        username: ''
    })

    function formChangeHandler(key, value) {
        let newUser = user
        newUser[key] = value
        changeUser({ ...newUser })
    }

    function handleSubmit() {
        UserDataService.create(user).then(data => {
            navigate('/')
        })

    }

    return (
        <Form className='m-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(event) => formChangeHandler('email', event.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={(event) => formChangeHandler('username', event.target.value)} type="text" placeholder="Username" />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    )
}

export default New