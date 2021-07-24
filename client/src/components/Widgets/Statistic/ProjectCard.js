import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ProjectCard = ({ params }) => {
    let arrowClass = ['fas fa-exchange-alt f-18'];
    let iconClass = ['f-30'];
    if (params.icon) {
        iconClass = [...iconClass, params.icon];
    }
    if (params.class) {
        iconClass = [...iconClass, params.class];
        arrowClass = [...arrowClass, params.class];
    }

    let badgeClass = ['pt-badge'];
    if (params.variant) {
        badgeClass = [...badgeClass, 'badge-light-' + params.variant];
    }

    return (
        <Card className="proj-t-card">
            <Card.Body>
                <Row className="align-items-center m-b-30">
                    <Col sm="auto">
                        <i className={iconClass.join(' ')}/>
                    </Col>
                    <Col className="p-l-0">
                        <h6 className="m-b-5">{params.primaryTitle}</h6>
                        <h6 className={'m-b-0 ' + params.class}>{params.secondaryTitle}</h6>
                    </Col>
                </Row>
                <Row className="align-items-center text-center">
                    <Col>
                        <h6 className="m-b-0">{params.primaryText}</h6>
                    </Col>
                    <Col><i className={arrowClass.join(' ')}/></Col>
                    <Col>
                        <h6 className="m-b-0">{params.secondaryText}</h6>
                    </Col>
                </Row>
                <h6 className={badgeClass.join(' ')}>{params.badge}</h6>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;
