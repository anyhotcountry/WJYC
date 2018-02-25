import React from "react";
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const ImageItem = (props) => (
    <Row>
        <Col md={7} mdPush={props.left ? 5 : 0} >
            <h2>{props.heading}</h2>
            <p className="lead">{props.children}</p>
        </Col>
        <Col md={5} mdPull={props.left ? 7 : 0} >
            <img className="img-responsive center-block" src={props.src} alt={props.heading} />
        </Col>
    </Row>
);

export default ImageItem;

