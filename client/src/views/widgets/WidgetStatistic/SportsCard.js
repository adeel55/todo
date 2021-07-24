import React from 'react';
import { Button, Card } from 'react-bootstrap';

import prod from '../../../assets/images/widget/prod.jpg';

const SportCard = () => {
    return (
        <Card>
            <Card.Header className="p-b-0">
                <div className="card-header-right">
                    <h5 className="text-muted">$25</h5>
                </div>
            </Card.Header>
            <Card.Body className="text-center">
                <img src={prod} className="img-fluid" alt="product"/>
                <h6 className="m-b-0">Sports Shoes</h6>
                <p className="m-b-10">Some quick example text.</p>
                <Button variant='primary' className="btn-round">Buy now</Button>
            </Card.Body>
        </Card>
    );
};

export default SportCard;
