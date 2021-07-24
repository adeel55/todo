import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const SummaryCard = () => {
    return (
        <Card>
            <Card.Header>
                <h5>Summary</h5>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <h2 className="d-inline-block text-c-blue m-r-10">46</h2>
                        <div className="d-inline-block">
                            <p className="m-b-0"><i className="fa fa-caret-up m-r-10 text-c-green"/>100%</p>
                            <p className="text-muted">New Installation</p>
                        </div>
                    </Col>
                    <Col>
                        <h2 className="d-inline-block text-c-green m-r-10">897</h2>
                        <div className="d-inline-block">
                            <p className="m-b-0"><i className="fa fa-caret-down m-r-10 text-c-red"/>10%</p>
                            <p className="text-muted">Total Users</p>
                        </div>
                    </Col>
                    <Col>
                        <h2 className="d-inline-block text-c-red m-r-10">8456</h2>
                        <div className="d-inline-block">
                            <p className="m-b-0"><i className="fa fa-caret-up m-r-10 text-c-green"/>87%</p>
                            <p className="text-muted">Total Views</p>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default SummaryCard;
