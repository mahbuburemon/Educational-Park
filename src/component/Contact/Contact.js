import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <Form className="container p-5 m-5">
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Occupation</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Your Number</Form.Label>
                    <Form.Control type="email" placeholder="Number" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>  Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-5" controlId="formGridAddress1">
                <Form.Label>Any Suggestion</Form.Label>
                <Form.Control placeholder="" />
            </Form.Group>






            <Button className="buy-btn" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Contact;