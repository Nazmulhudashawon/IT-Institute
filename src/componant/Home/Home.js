import React, { useEffect, useState } from 'react';
import HomeData from '../HomeData/HomeData';


import './Home.css'

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./data.JSON').then(res => res.json()).then(data => setData(data.slice(0, 4)));
    }, []);

    return (
        <div>
            <div className="tagline">
                <h2>We Build Future with Education</h2>
            </div>


            <div className="card">
                {
                    data.map(element => <HomeData HomeData={element}></HomeData>)
                }
            </div>
        </div>
    );
};

export default Home;