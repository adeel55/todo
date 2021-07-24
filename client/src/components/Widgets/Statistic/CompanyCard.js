import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const CompanyCard = ({ params }) => {
    return (
        <Card className="comp-card">
            <Card.Body>
                <Row className="align-items-center">
                    <Col className="col">
                        <h6 className="m-b-20">{params.title}</h6>
                        <h3 className={params.class}>{params.primaryText}</h3>
                        <p className="m-b-0">{params.secondaryText}</p>
                    </Col>
                    <Col sm="auto">
                        <i className={params.icon + ' badge-light-' + params.variant}/>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CompanyCard;
