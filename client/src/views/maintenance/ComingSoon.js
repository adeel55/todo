import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../layouts/AdminLayout/Breadcrumb';

import BackgroundMaintenance from './maintenance.svg';

const ComingSoon = () => {
    return (
        <React.Fragment>
            <Breadcrumb/>
            <div className="auth-wrapper maintenance">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} className='text-center px-4'>
                            <div>
                                <img src={BackgroundMaintenance} alt="Maintenance - Site Under Innovation" />
                            </div>
                            <h5 className="mt-4">Site Under Maintenance, Visit after some times</h5>
                            <p className="text-muted">
                                illustration by
                                <Button variant="link" href="https://undraw.co/search" target='_blank' className='p-1 shadow-none'>undraw.co</Button>
                            </p>
                            <Form>
                                <Link to="/">
                                    <Button variant="primary">
                                        <i className="feather icon-refresh-ccw mr-2"/>Reload
                                    </Button>
                                </Link>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ComingSoon;
