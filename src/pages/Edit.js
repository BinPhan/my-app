import { useNavigate, useParams } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import UserDataService from '../services/user.service'

function Edit(props) {

    let navigate = useNavigate();

    let [user, changeUser] = useState({
        email: '',
        username: ''
    })

    const { id: id } = useParams()

    function formChangeHandler(key, value) {

        let newUser = user
        newUser[key] = value
        changeUser({ ...newUser })

        console.log(user);
    }

    function handleSubmit() {
        UserDataService.update(id, user).then(data => {
            navigate('/')
        })
    }

    useEffect(() => {
        UserDataService.get(id).then(res => {
            console.log(res);
            changeUser(res.data)
        })
    }, [])

    return (
        <div>
            {/* Lmao {id} */}
            <Form className='m-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={user.email} onChange={(event) => formChangeHandler('email', event.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Username</Form.Label>
                    <Form.Control value={user.username} onChange={(event) => formChangeHandler('username', event.target.value)} type="text" placeholder="Username" />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Edit