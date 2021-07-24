import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Breadcrumb from '../../layouts/AdminLayout/Breadcrumb';

import imgSparcle1 from '../../assets/images/maintenance/sparcle-1.png';
import imgSparcle2 from '../../assets/images/maintenance/sparcle-2.png';
import imgShip from '../../assets/images/maintenance/ship.svg';
import imgSark from '../../assets/images/maintenance/sark.svg';

const OfflineUI = () => {
    return (
        <React.Fragment>
            <Breadcrumb/>
            <div className="auth-wrapper offline">
                <div className="offline-wrapper">
                    <img src={imgSparcle1} alt="User-1" className="img-fluid s-img-1" />
                    <img src={imgSparcle2} alt="User-2" className="img-fluid s-img-2" />
                    <Container className="off-main">
                        <Row className="justify-content-center">
                            <Col xs={6}>
                                <div className="text-center">
                                    <div className="moon"/>
                                    <img src={imgShip} alt="" className="img-fluid boat-img" />
                                </div>
                            </Col>
                        </Row>
                        <Row className="m-0 justify-content-center off-content">
                            <Col className="p-0">
                                <div className="text-center">
                                    <h1 className="text-white text-uppercase">Offline</h1>
                                    <h5 className="text-white font-weight-normal m-b-30">The site is temporarily down</h5>
                                    <NavLink to="/" className="btn btn-primary mb-4"><i className="feather icon-refresh-ccw mr-2"/>Reload</NavLink>
                                </div>
                            </Col>
                            <div className="sark">
                                <img src={imgSark} alt="" className="img-fluid img-sark" />
                                <div className="bubble"/>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OfflineUI;