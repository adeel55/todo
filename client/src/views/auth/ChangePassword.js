import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import logoDark from '../../assets/images/logo-dark.png';
import Breadcrumb from '../../layouts/AdminLayout/Breadcrumb';

const ChangePassword = () => {
    return (
        <React.Fragment>
            <Breadcrumb/>
            <div className="auth-wrapper">
                <div className="auth-content text-center">
                    <Card className="borderless">
                        <Row className="align-items-center text-center">
                            <Col>
                                <Card.Body className="card-body">
                                    <img src={logoDark} alt="" className="img-fluid mb-4" />
                                    <h4 className="mb-4 f-w-400">Change your password</h4>
                                        <div className="input-group mb-2">
                                            <input type="password" className="form-control" placeholder="Current Password" />
                                        </div>
                                        <div className="input-group mb-2">
                                            <input type="password" className="form-control" placeholder="New Password" />
                                        </div>
                                        <div className="input-group mb-4">
                                            <input type="password" className="form-control" placeholder="Re-Type New Password" />
                                        </div>
                                        <button className="btn btn-block btn-primary mb-4">Change password</button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ChangePassword;