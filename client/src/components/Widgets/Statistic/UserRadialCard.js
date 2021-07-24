import React from 'react';
import { Card } from 'react-bootstrap';

const UserRadialCard = ({ params }) => {
    let textClass = ['f-36'];
    if (params.class) {
        textClass = [...textClass, params.class];
    }

    return (
        <Card>
            <Card.Body className="user-radial-card">
                <div data-label="50%" className="radial-bar radial-bar-90 radial-bar-lg radial-bar-danger">
                    <img src={params.avatar} className="img-radius wid-70" alt="User"/>
                </div>
                <span className={textClass.join(' ')}>{params.primaryText}</span>
                <p>{params.secondaryText}</p>
            </Card.Body>
        </Card>
    );
};

export default UserRadialCard;
