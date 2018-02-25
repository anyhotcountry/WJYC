import React from "react";
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const VideoItem = (props) => (
    <Row>
        <Col md={7} mdPush={props.left ? 5 : 0} >
            <h2>{props.heading}</h2>
            <p className="lead">{props.children}</p>
        </Col>
        <Col md={5} mdPull={props.left ? 7 : 0} >
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title="Fidget Spinners" className="embed-responsive-item" src={props.src}></iframe>
            </div>
        </Col>
    </Row>
);

export default VideoItem;

