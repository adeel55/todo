import React from 'react';
import { Card } from 'react-bootstrap';

const TicketCard = ({ params }) => {
    let badgeClass = ['m-b-25 lbl-card'];
    if (params.variant) {
        badgeClass = [...badgeClass, 'badge-light-' + params.variant];
    }

    let badgeIcon = ['m-r-5'];
    if (params.badgeIcon) {
        badgeIcon = [...badgeIcon, params.badgeIcon]
    }

    let primaryClass = ['m-b-0 d-inline-block'];
    let iconClass = ['m-r-10 f-18'];
    if (params.icon) {
        iconClass = [...iconClass, params.icon];
    }
    if (params.class) {
        iconClass = [...iconClass, params.class];
        primaryClass = [...primaryClass, params.class];
    }

    return (
        <Card className="ticket-card">
            <Card.Body>
                <p className={badgeClass.join(' ')}><i className={badgeIcon.join(' ')}/> {params.badgeText}</p>
                <div className="text-center">
                    <h2 className={primaryClass.join(' ')}>{params.primaryText}</h2>
                    <p className="m-b-0 d-inline-block">{params.secondaryText}</p>
                    <p className="m-b-0 m-t-10"><i className={iconClass.join(' ')}/>{params.caption}</p>
                </div>
            </Card.Body>
        </Card>
    );
};

export default TicketCard;
