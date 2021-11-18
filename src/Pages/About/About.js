import React from 'react';
import about from '../../images/car-5.jpeg';
import Footer from '../Shared/Footer/Footer';

const About = () => {
    return (
        <> 
            <div className="mt-3">
                <h2>About Us</h2>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="rounded">
                        <img className="rounded-3" src={about} alt="" />
                    </div>
                    <div className="p-5 justify-content-lg-start align-content-lg-start">
                        <h2>Dodge Cars</h2>
                        <p>Dodge Cars are american car company and have great deals with cars.</p>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default About;