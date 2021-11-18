import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';
import carExpo from '../../images/car-3.jpeg';
import MuiButton from '../../StyledComponent/Button';

const Products = () => {
    const useStyle = makeStyles({
        root: {
            background: `linear-gradient(#3A4256, #3A4256)`,
            backgroundBlendMode: 'overlay',
            
            height: 300,
            display: 'flex',
            alignItems: 'center',
            marginBottom: 200,
            marginTop: 200
        }
        
    })
    const { root } = useStyle()
    return (
        <div className={root}>
            <Container>
                <Grid container spacing={2} sx={{alignItems: 'center'}}>
                    <Grid item xs={12} sm={12} md={5} lg={6}>
                        <img src={carExpo} alt="" width="100%" styles={{marginTop: -150}}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={6}>
                        <Typography variant="h6" sx={{color: '#fff'}}>Explore Us</Typography>
                        <Typography variant="body1" sx={{my: 3, color: '#fff'}}>
                            Domestic. Not Domesticated. Dodge vehicles are bred for performance. Explore the full Dodge lineup, inventory, incentives, dealership information & more.
                        </Typography>
                        <NavLink to='/cars'><MuiButton>Explore Dodge</MuiButton></NavLink>
                    </Grid>
                </Grid>
                
            </Container>
        </div>
    );
};

export default Products;