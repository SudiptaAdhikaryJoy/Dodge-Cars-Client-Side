import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Car from '../Cars/Car';

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setCars(data));
    },[])
    return (
        <div>
            <h2 style={{fontWeight:'800', color:'black'}}>Explore Our New Cars</h2>
            <div className="row">
                {
                    cars.map(car => <Car
                        key={car.id}
                        car={car}
                    ></Car> )
                }
            </div>
        </div>
    );
};

export default Cars;