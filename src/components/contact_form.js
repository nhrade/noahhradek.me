import React from "react";
import { Form, FormGroup, FormControl, Button, FloatingLabel } from "react-bootstrap";

const ContactForm = (props) => {
    return (
        <form action={props.actionUrl} method="POST">
            <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3">
                    <Form.Control required type="email" name="formEmail" placeholder="Enter email" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
                <Form.Control required type="text" name="formName" placeholder="Enter name" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingMessage" label="Message" className="mb-3">
                <Form.Control required as="textarea" name="formMessage" placeholder="Enter message" style={{ height: '10rem' }} />
            </FloatingLabel>
            <Button variant="primary" type="submit">
                Submit
            </Button>
    </form>
    )
}


export default ContactForm;