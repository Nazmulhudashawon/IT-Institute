import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import './HomeData.css'

const HomeData = (props) => {
    const { courseName, img, fee, Duration } = props.HomeData;

    return (

        <Col>
            <CardGroup className="Card">
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

export default HomeData;