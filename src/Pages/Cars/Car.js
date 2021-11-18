import React from 'react';
import { useHistory } from 'react-router';

const Car = ({car}) => {
    const {_id, img, name, description, price} = car || {};

    const history = useHistory();

    const handleCar = _id => {
        const uri = `/items/${_id}`;
        history.push(uri);
    }
    return (
        <>
            <div className="col-md-4 col-lg-4 mt-3">
                
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <p className="card-text">{description}</p>
                        <h5 className="card-title">Price: ${price}</h5>
                    </div>    
                    <button onClick={()=> handleCar(_id)}  className="btn btn-primary">Purchase</button>
                </div>
            </div>  
        </>
    );
};

export default Car;