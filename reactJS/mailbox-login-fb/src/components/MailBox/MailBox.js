import React from "react";
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MailBox = (props) => {
    return (
    <Row className="m-3">
        <Col className="col-3">
            <Row className="m-3">
            <a class="btn btn-primary" href="/composeMail" role="button">Compose</a>
            </Row>
            <Row>
                <Col>
                    <div>Inbox</div>
                    <div>2 SEC</div>
                    <div>DELTE MAILCH</div>
                    <div>SEE NMAIL</div>
                    <div>custom hook</div>
                </Col>
            </Row>
        </Col>
        <Col>
            <div>Content</div>
        </Col>
    </Row>
    );
};
export default MailBox;