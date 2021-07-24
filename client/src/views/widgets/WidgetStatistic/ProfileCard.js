import React from 'react';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Avatar4 from '../../../assets/images/user/avatar-4.jpg';

const ProfileCard = ({ params }) => {
    return (
        <Card className="user-card">
            <Card.Header>
                <h5>Profile</h5>
            </Card.Header>
            <Card.Body>
                <div className="usre-image">
                    <img src={Avatar4} className="img-radius" alt="User-Profile"/>
                </div>
                <h6 className="f-w-600 m-t-15 m-b-10">Alessa Robert</h6>
                <p className="text-muted">Active | Male | Born 23.05.1992</p>
                <hr/>
                <p className="text-muted m-t-15">Activity Level: 87%</p>
                <ListGroup as='ul' bsPrefix=' ' className="list-unstyled activity-leval">
                    <ListGroup.Item as='li' bsPrefix=' ' className="active"/>
                    <ListGroup.Item as='li' bsPrefix=' ' className="active"/>
                    <ListGroup.Item as='li' bsPrefix=' ' className="active"/>
                    <ListGroup.Item as='li' bsPrefix=' ' />
                    <ListGroup.Item as='li' bsPrefix=' ' />
                </ListGroup>
                <div className="bg-c-blue counter-block m-t-10 p-20">
                    <Row className="row">
                        <Col>
                            <i className="feather icon-message-square"/>
                            <p>1256</p>
                        </Col>
                        <Col>
                            <i className="feather icon-users"/>
                            <p>8562</p>
                        </Col>
                        <Col>
                            <i className="feather icon-briefcase"/>
                            <p>189</p>
                        </Col>
                    </Row>
                </div>
                <p className="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                <hr/>
                <Row className="justify-content-center user-social-link">
                    <Col sm="auto"><Link to='#'><i className="fab fa-facebook text-facebook"/></Link></Col>
                    <Col sm="auto"><Link to='#'><i className="fab fa-twitter text-twitter"/></Link></Col>
                    <Col sm="auto"><Link to='#'><i className="fab fa-dribbble text-dribbble"/></Link></Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard;
