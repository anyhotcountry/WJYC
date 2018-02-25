import React from "react";
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const PersonItem = (props) => (
    <Row>
        <Col md={10}>
            <h3>{props.heading} <small>{props.job}</small></h3>
            <p className="lead">{props.children}</p>
        </Col>
        <Col md={2}>
            <img className="img-responsive center-block" src={props.src} alt={props.heading} />
        </Col>
    </Row>
);

export default PersonItem;

