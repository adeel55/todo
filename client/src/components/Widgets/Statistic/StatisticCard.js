import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

const StatisticCard = ({ params }) => {
    let textClass = ['d-block f-36'];
    if (params.class) {
        textClass = [...textClass, 'text-c-' + params.class]
    }

    return (
        <Card className="statustic-card">
            <Card.Header>
                <h5>{params.title}</h5>
            </Card.Header>
            <Card.Body className="text-center">
                <span className={textClass.join(' ')}>{params.primaryText}</span>
                <p className="m-b-0">{params.secondaryText}</p>
                <ProgressBar now={params.primaryText} variant={params.variant} />
            </Card.Body>
            <Card.Footer className={'bg-c-' + params.class}>
                <h6 className="text-white m-b-0">{params.footerText}</h6>
            </Card.Footer>
        </Card>
    );
};

export default StatisticCard;
