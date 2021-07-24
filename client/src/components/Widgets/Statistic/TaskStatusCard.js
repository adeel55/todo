import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const TaskStatusCard = ({ params }) => {
    return (
        <Card>
            <Card.Header className="pb-3">
                <h5>{params.title}</h5>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <h2 className="m-0"><i className={params.icon + ' ' + params.class}/>{params.primaryTitle}</h2>
                    </Col>
                    <Col className="text-right">
                        <h5 className={'m-0 ' + params.class}>{params.primaryText}</h5>
                        <span className="d-block">{params.secondaryText}</span>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default TaskStatusCard;
