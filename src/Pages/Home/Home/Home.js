import { Navigation } from '@mui/icons-material';
import React from 'react';
import About from '../../About/About';
import Banner from '../../Banner/Banner';
import Contact from '../../ContactUs/Contact';
import Items from '../../Items/Items';
import Products from '../../Products/Products';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Items></Items>
            <Products></Products>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;