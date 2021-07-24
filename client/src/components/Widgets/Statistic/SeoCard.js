import React from 'react';
import { Card } from 'react-bootstrap';

const SeoCard = ({ params }) => {
    let cardClass = ['overlay-bg'];
    if (params.class) {
        cardClass = [...cardClass, params.class];
    }

    return (
        <Card className="seo-card">
            <img src={params.img} alt="seo bg" className="img-fluid"/>
            <div className={cardClass.join(' ')} />
            <Card.Body className="seo-content">
                <span className="label label-success">{params.title}</span>
                <h4 className="m-t-10 text-white">{params.primaryText}</h4>
                <p className="m-b-0 m-t-20">{params.secondaryText}</p>
            </Card.Body>
        </Card>
    );
};

export default SeoCard;
