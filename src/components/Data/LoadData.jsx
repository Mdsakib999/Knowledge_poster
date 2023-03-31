
import React, { useEffect, useState } from 'react';
import ShowData from '../ShowData/ShowData';

const LoadData = () => {
    const [loadData, setLoadData] = useState([]);

    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setLoadData(data))
    }, [])

    return (
        <div>
            <h1>ke hobor vai{}</h1>
            {
                loadData.map(data => <ShowData 
                    key={loadData.id}
                    data = {data}
                    ></ShowData>)
            }
        </div>
    );
};

export default LoadData;