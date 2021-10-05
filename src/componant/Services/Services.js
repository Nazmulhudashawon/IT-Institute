import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceData from '../ServiceData/ServiceData';


import './Services.css'

const Services = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./data.JSON').then(res => res.json()).then(data => setData(data));
    }, []);

    return (
        <Container>

            <div className="heading"><p>The Best Choice</p>
                <h3>Popular Courses</h3></div>
            <Row xs={1} md={4} className="g-0">
                {
                    data.map(element => <ServiceData serviceData={element} key={element.key}></ServiceData>)
                }
            </Row>
        </Container>
    );
};

export default Services;