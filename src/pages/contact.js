import React from "react";
import Layout from "../components/layout";
import { Form, FormGroup, FormControl, Button, FloatingLabel } from "react-bootstrap";
import ContactForm from "../components/contact_form";

const Contact = () => {

    return (
        <Layout>
            <ContactForm actionUrl="https://getform.io/f/d133e852-89b0-47c8-bd53-c9512aca97fd"/>
        </Layout>
    );
}

export default Contact;