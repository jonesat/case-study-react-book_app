import { SearchBar } from '../Components/screenElements';
import { useNavigate } from "react-router-dom";
import Search from '../Routes/Search'

// import '../styles/bootstrapp.css'
import styles from '../styles/bootstrapp.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import InputGroup from 'react-bootstrap/InputGroup';

export default function ContactUs(){
    return(
        <div className={styles.emailform}>
            <h1>Contact Us</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                    <Form.Text className="text-muted">We may sign you up for marketing materials or ignore you entiredly.</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="What would you like to say?"/>
                </Form.Group>
                <Button id="submit-button" type="submit"> Submit </Button>
            </Form>
        </div>
    )
}