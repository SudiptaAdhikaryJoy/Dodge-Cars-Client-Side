import { Navigation } from '@mui/icons-material';
import React from 'react';
import Banner from '../../Banner/Banner';
import Contact from '../../ContactUs/Contact';
import Products from '../../Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Contact></Contact>
        </div>
    );
};

export default Home;