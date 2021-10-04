import React, { useEffect, useState } from 'react';
import ServiceData from '../ServiceData/ServiceData';


import './Services.css'

const Services = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./data.JSON').then(res => res.json()).then(data => setData(data));
    }, []);

    return (
        <div>

            <div className="heading"><p>The Best Choice</p>
                <h3>Popular Courses</h3></div>
            <div className="card">
                {
                    data.map(element => <ServiceData ServicesData={element}></ServiceData>)
                }
            </div>
        </div>
    );
};

export default Services;