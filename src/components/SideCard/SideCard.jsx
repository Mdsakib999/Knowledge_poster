import React, { useEffect, useState } from 'react';
import './SideCard.css'

const SideCard = ({reading, BlogTitle}) => {
    const [time, setTime] =useState(reading)
    const [breckTitle, setBreckTitle] = useState([]);
    const [length, setLength] = useState([]);
    useEffect(() => {
        const getReadTime = localStorage.getItem("readTime");
        setTime(getReadTime);
    }, [reading]);

    useEffect(() => {
        let getTitleFromLocalStorage = JSON.parse(localStorage.getItem("BlogTitle"));
        if (getTitleFromLocalStorage) {
          setBreckTitle(getTitleFromLocalStorage);
          setLength(getTitleFromLocalStorage.length);
        }
      }, [BlogTitle]);

    return (
        <div className=''>
            <div className='spent-text'>
                <h2>Spent time on read: {time}</h2>
            </div>

            <div className='blog-title b'>
                <h2>Bookmarked Blog: {length}</h2>
                <div>
                {breckTitle.map((blog) => {
        return <h2 style={{
            backgroundColor: "yellowgreen",
            fontSize: "25px",
            borderRadius: "10px",
            padding: "10px",
          }}>{blog}</h2>;
      })}
                    
                </div>
            </div>
        </div>
    );
};

export default SideCard;