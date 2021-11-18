import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {id} = useParams();
    const [details, setDetails] = useState([]);

    const [specificDetails, setSpecificDetails] = useState({});

    useEffect(()=> {
        fetch('https://secure-ravine-07186.herokuapp.com/items')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])

    useEffect(() =>{

        if(details.length>0){
            const matchedData = details.find(detail=> detail.key==id);
            setSpecificDetails(matchedData);
        }

    },[details])
    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default Details;