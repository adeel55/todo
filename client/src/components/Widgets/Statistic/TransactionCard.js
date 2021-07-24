import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TransactionCard  = ({ params }) => {
    let profileClass = ['trnasiction-profile'];
    if (params.profileClass) {
        profileClass = [...profileClass, params.profileClass];
    } else {
        profileClass = [...profileClass, params.headerClass];
    }

    let leftIconClass = ['m-r-10'];
    if (params.leftLink.icon) {
        leftIconClass = [...leftIconClass, params.leftLink.icon];
    }

    let rightIconClass = ['m-r-10'];
    if (params.rightLink.icon) {
        rightIconClass = [...rightIconClass, params.rightLink.icon];
    }

    return (
        <Card className="trnasiction-card">
            <Card.Header className={params.headerClass}>
                <h5 className="text-white">{params.title}</h5>
                <span className="d-block text-captions text-white">{params.titleCaption}</span>
                <div className="card-header-right">
                    {params.headerRight}
                </div>
            </Card.Header>
            <Card.Body className="text-center">
                <div className={profileClass.join(' ')}>
                    <h4 className="text-white">{params.profileText}</h4>
                </div>
                <h6>Registered Respiratory <span className="d-block">Therapist</span></h6>
                <p>RT 334445566</p>
            </Card.Body>
            <Row className="border-top transection-footer row">
                <Col className="border-right"><Link to={params.leftLink.to} className="text-dark"><i className={leftIconClass.join(' ')}/>{params.leftLink.label}</Link></Col>
                <Col><Link to={params.rightLink.to} className="text-dark"><i className={rightIconClass.join(' ')}/>{params.rightLink.label}</Link></Col>
            </Row>
        </Card>
    );
};

export default TransactionCard;
