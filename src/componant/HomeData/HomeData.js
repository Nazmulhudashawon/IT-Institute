import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './HomeData.css'

const HomeData = (props) => {
    const { courseName, img, fee, Duration } = props.HomeData;

    return (
        <div className="card">
            <Card.Body>
                <img className="img" src={img} alt="" />
                <Card.Title>{courseName}</Card.Title>
                <Card.Text>
                    Course Fee: {fee}$
                    <br /> Duration: {Duration}
                </Card.Text>
                <Button variant="primary">Enroll Now</Button>
            </Card.Body>
        </div>
    );
};

export default HomeData;