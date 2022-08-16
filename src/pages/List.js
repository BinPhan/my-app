import classes from './List.module.css'
import UserDataService from '../services/user.service'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Home(params) {

    let [search, inputSearch] = useState('')

    let [data, setData] = useState([])

    function onChangeSearch(event) {
        inputSearch(event.target.value)
    }

    function sendSearch() {
        UserDataService.getAll(search).then(res => {
            setData([...res.data])
        })

    }

    function handleDelete(id) {
        UserDataService.delete(id).then(res => {
            UserDataService.getAll().then(res => {
                setData([...res.data])
            })
        })
    }

    useEffect(() => {
        UserDataService.getAll().then(res => {
            setData([...res.data])
        })
    }, [])


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
                        data.map(item => {
                            return (
                                <tr key={item.id}>
                                    <th>{item.username}</th>
                                    <th>{item.email}</th>
                                    <th>
                                        <Link to={"/edit/" + item.id}>
                                            <Button>Edit</Button>
                                        </Link>
                                    </th>
                                    <th>
                                        <Button onClick={() => handleDelete(item.id)}>Delete</Button>
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