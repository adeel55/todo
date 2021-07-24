import React from 'react';
import { Button, Card } from 'react-bootstrap';

import imgGrid1 from '../../../assets/images/gallery-grid/img-grd-gal-1.jpg';
import imgGrid2 from '../../../assets/images/gallery-grid/img-grd-gal-2.jpg';
import imgGrid3 from '../../../assets/images/gallery-grid/img-grd-gal-3.jpg';
import imgGrid4 from '../../../assets/images/gallery-grid/img-grd-gal-4.jpg';
import imgGrid5 from '../../../assets/images/gallery-grid/img-grd-gal-5.jpg';
import imgGrid6 from '../../../assets/images/gallery-grid/img-grd-gal-6.jpg';

const PopularCard = ({ params }) => {
    return (
        <Card>
            <Card.Header>
                <h5>Popular</h5>
            </Card.Header>
            <Card.Body>
                <div className="popular-img-block">
                    <img className="img-fluid" src={imgGrid1} alt="Gallery-1"/>
                    <img className="img-fluid" src={imgGrid2} alt="Gallery-2"/>
                    <img className="img-fluid" src={imgGrid3} alt="Gallery-3"/>
                    <img className="img-fluid" src={imgGrid4} alt="Gallery-4"/>
                    <img className="img-fluid" src={imgGrid5} alt="Gallery-5"/>
                    <img className="img-fluid" src={imgGrid6} alt="Gallery-6"/>
                    <img className="img-fluid" src={imgGrid1} alt="Gallery-1"/>
                    <img className="img-fluid" src={imgGrid2} alt="Gallery-2"/>
                    <img className="img-fluid" src={imgGrid3} alt="Gallery-6"/>
                    <img className="img-fluid" src={imgGrid4} alt="Gallery-4"/>
                    <img className="img-fluid" src={imgGrid5} alt="Gallery-5"/>
                    <img className="img-fluid" src={imgGrid6} alt="Gallery-3"/>
                </div>
                <div className="text-center m-t-15">
                    <Button variant='outline-primary' className="btn-round btn-sm">Load More</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default PopularCard;
