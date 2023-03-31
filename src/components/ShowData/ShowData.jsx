import React from 'react';
import './ShowData.css'

const ShowData = ({data}) => {
    return (
        <div>
            <h2>Titel:{data.BlogTitle}</h2>
            <p>Name {data.readTime}</p>
            <img src={data.coverImage} alt="" />
        </div>
    );
};

export default ShowData;