import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sm={12} lg={6}>
                        <Typography variant="h5" sx={{fontWeight: 600}}>
                            Come and Buy Beautiful Dodge Cars
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sm={12} lg={6}>
                        <h2></h2>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;