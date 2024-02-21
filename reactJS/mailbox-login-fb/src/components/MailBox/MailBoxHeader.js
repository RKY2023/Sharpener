import React from "react";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import EditorComponent from "./Editor";

const MailBoxHeader = (props) => {
    const submitHandler = (e) => {

    };

    return (
        <>
        <Container>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Row>
                        <Col className="col-1 text-center align-baseline">
                        <Form.Label className="mb-0">To:</Form.Label>
                        </Col>
                        <Col>
                        <Form.Control type="text" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col className="col-1 text-center align-baseline">
                        <Form.Label className="mb-0">Subject:</Form.Label>
                        </Col>
                        <Col>
                        <Form.Control type="text" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col className="col-1 text-center align-baseline">
                        <Form.Label className="mb-0">Body:</Form.Label>
                        </Col>
                        <Col>
                        <Form.Control type='textarea' />
                        </Col>
                    </Row>
                </Form.Group>
                <hr></hr>
                <div>
                    <div>
                        <Button type='submit'>Send</Button>
                    </div>
                    <div>
                        <EditorComponent />
                    </div>
                </div>
            </Form>
        </Container>
        </>
    );
};
export default MailBoxHeader;