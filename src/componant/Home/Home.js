import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeData from '../HomeData/HomeData';


import './Home.css'

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./data.JSON').then(res => res.json()).then(data => setData(data));
    }, []);

    return (
        <Container >
            <div className="tagline">
                <h2>We Build Future with Education</h2>
            </div>


            <Row xs={1} md={4} className="g-0">
                {
                    data.slice(0, 4).map(element => <HomeData HomeData={element} key={element.key}></HomeData>)
                }
            </Row>
        </Container>
    );
};

export default Home;