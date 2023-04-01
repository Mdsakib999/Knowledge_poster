import React, { useEffect, useState } from 'react';
import './SideCard.css'

const SideCard = ({reading}) => {

    const [time, setTime] =useState(reading)

    useEffect(() => {
        const getReadTime = localStorage.getItem("readTime");
        setTime(getReadTime);
    }, [reading]);
    
    return (
        <div className=''>
            <div className='spent-text'>
                <h2>Spent time on read: {time}</h2>
            </div>

            <div className='blog-title b'>
                <h2>Bookmarked Blog: </h2>
                <div>

                </div>
            </div>
        </div>
    );
};

export default SideCard;