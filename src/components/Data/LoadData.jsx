
import React, { useEffect, useState } from 'react';
import ShowData from '../ShowData/ShowData';

const LoadData = ({readTime, bookmark}) => {
    const [loadData, setLoadData] = useState([]);

    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setLoadData(data))
    }, [])

    
    return (
        <div>
            {
                loadData.map(data => <ShowData 
                    key={loadData.id}
                    readTime = {readTime}
                    bookmark = {bookmark}
                    data = {data}

                    ></ShowData>)
            }
        </div>
    );
};

export default LoadData;