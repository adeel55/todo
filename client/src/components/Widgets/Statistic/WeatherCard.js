import React, { useState } from 'react';
import { Card, Row, Col, Form } from 'react-bootstrap';

const WeatherCard = ({ params }) => {
    const [temperature, setTemperature ] = useState(params.temperature);
    const [isFahrenheit, setIsFahrenheit] = useState(false);

    const temperatureHandler = () => {
        setIsFahrenheit(!isFahrenheit);
        if (isFahrenheit) {
            setTemperature(Math.round((temperature - 32) * 5/9));
        } else {
            setTemperature(Math.round((temperature * (9/5)) + 32));
        }
    };

    return (
        <Card>
            <Card.Body>
                <h6 className="mb-0 float-right">{params.location}</h6>
                <span className="d-block mb-1">{params.time}</span>
                <Row className="align-items-center justify-content-center">
                    <Col sm="auto">
                        <h2 className="text-c-blue m-0"><i className="feather icon-cloud-snow text-muted mr-2"/>{temperature}<sup className="f-20">°</sup></h2>
                    </Col>
                    <Col className="text-right">
                        <div className="form-group mb-1">
                            <label className="m-r-5 f-16 mb-0">°C</label>
                                <Form.Check as='input' variant='success' bsCustomPrefix='d-inline' checked={isFahrenheit} type="switch" id="switch-a-1"  label="" onChange={temperatureHandler} />
                            <label className="m-l-5 f-16 mb-0">°F</label>
                        </div>
                        <small className="d-block mt-0">{params.caption}</small>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default WeatherCard;
