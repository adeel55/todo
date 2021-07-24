import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const AnalyticCard = ({ params }) => {
    let cardClass = ['analytic-card'];
    let badgeClass = ['f-18 analytic-icon'];
    if (params.badgeIcon) {
        badgeClass = [...badgeClass, params.badgeIcon];
    }
    if (params.class) {
        badgeClass = [...badgeClass, 'text-c-' + params.class];
        cardClass = [...cardClass, 'bg-c-' + params.class];
    }

    let iconClass = ['m-r-10 f-18'];
    if (params.icon) {
        iconClass = [...iconClass, params.icon];
    }

    return (
        <Card className={cardClass.join(' ')}>
            <Card.Body>
                <Row className="align-items-center m-b-25">
                    <Col sm="auto">
                        <i className={badgeClass.join(' ')} />
                    </Col>
                    <Col className="text-right">
                        <h3 className="m-b-5 text-white">{params.primaryTitle}</h3>
                        <h6 className="m-b-0 text-white">{params.secondaryTitle}</h6>
                    </Col>
                </Row>
                <p className="m-b-0  text-white d-inline-block">{params.primaryText}</p>
                <h5 className="text-white d-inline-block m-b-0 m-l-10">{params.secondaryText}</h5>
                <h6 className="m-b-0 d-inline-block text-white float-right"><i className={iconClass.join(' ')}/>{params.caption}</h6>
            </Card.Body>
        </Card>
    );
};

export default AnalyticCard;
