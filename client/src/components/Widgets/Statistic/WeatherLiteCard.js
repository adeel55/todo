import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const WeatherLiteCard = ({ params }) => {
    let icon = ['f-36 text-white'];
    if (params.icon) {
        icon = [...icon, params.icon];
    }

    let bgClass = ['text-center p-0'];
    if (params.class) {
        bgClass = [...bgClass, 'bg-c-' + params.class];
    }

    return (
        <Card>
            <Card.Body className="p-0">
                <Row className="d-flex align-items-center m-0">
                    <Col className="text-center">
                        <div className="py-4">
                            <h2 className={'text-c-' + params.class}>{params.temperature}<sup className="f-20">°</sup></h2>
                            <span>{params.caption}</span>
                        </div>
                    </Col>
                    <Col className={bgClass}>
                        <div className="py-4">
                            <i className={icon.join(' ')}/>
                            <h6 className="mt-3 mb-0 text-white f-w-400">{params.location}</h6>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default WeatherLiteCard;
