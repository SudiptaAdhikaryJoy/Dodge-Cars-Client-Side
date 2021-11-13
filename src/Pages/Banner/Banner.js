import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import MuiButton from '../../StyledComponent/Button';
import carImg from '../../images/car-11.jpeg';
import bg from '../../images/bg.png';

const Banner = () => {
    const style={
        minHeight: 200, 
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        background: `url(${bg})`
    }
    return (
        <div style={style}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sm={12} lg={6}>
                        <Typography variant="h4" sx={{fontWeight: 600}}>
                            Come and Buy Beautiful <br />
                             Dodge Cars
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 2, my: 3 }}>
                            Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, Michigan. Dodge vehicles have historically included performance cars, and for much of its existence Dodge was Chrysler's mid-priced brand above Plymouth.
                        </Typography>
                        <MuiButton>Explore</MuiButton>
                    </Grid>
                    <Grid item xs={12} md={6} sm={12} lg={6}>
                        <img src={carImg} alt="" width="100%" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;