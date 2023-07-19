import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import { FormGroup } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from "react"


const Signin = () => {

    const Navigate = useNavigate()
    const URL = `${process.env.REACT_APP_BACKEND_URI}/profile/login`

    const [signinInput, setSigninInput] = useState({
        emailAddress:'',
        password:'',
    })

    //hangles the change in text inputs
    const handleChange = (e) => {
        const value = e.target.value;
        setSigninInput({
            ...signinInput,
            [e.target.name]: value
        });
    }

    //handles the submit action
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(URL,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(signinInput)
        })
        const data = await response.json()
        console.log('checking data', data)
        Navigate(`/profile/${data._id}`)
    }

    return (
        <div>
            <div>
                <h1>Sign in</h1>
            </div>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} xs={7} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="emailAddress" onChange={handleChange} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Row className="mb-3">
                    <p> Don't have an account yet? <a href="/Signup" >Sign Up</a> </p>
                </Row>
                </Form>
        </div>
    );
}

export default Signin



