import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Breadcrumb from '../../layouts/AdminLayout/Breadcrumb';

import BackgroundError from './error.svg';

const Error = () => {
    return (
        <React.Fragment>
            <Breadcrumb/>
            <div className="auth-wrapper maintenance">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <div>
                                <img src={BackgroundError} alt="Error - 404" />
                            </div>
                            <div className="text-center">
                                <h5 className="my-4">Oops! Page not found!</h5>
                                <NavLink to="/" className="btn btn-danger mb-4"><i className="feather icon-refresh-ccw mr-2"/>Reload</NavLink>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Error;