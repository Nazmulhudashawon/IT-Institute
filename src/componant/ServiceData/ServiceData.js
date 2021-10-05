import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import './ServiceData.css'

const ServicesData = (props) => {
    const { courseName, img, fee, Duration } = props.serviceData;

    return (
        <Col>
            <CardGroup className="Carddata">
                <Card.Img className="img" src={img} />
                <Card.Body>
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text>
                        Course Fee: {fee}$
                        <br /> Duration: {Duration}
                    </Card.Text>
                    <Button variant="primary">Enroll Now</Button>
                </Card.Body>
            </CardGroup>
        </Col>


    );
};

export default ServicesData;