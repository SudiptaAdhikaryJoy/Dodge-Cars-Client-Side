import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const Contact = () => {
    const useStyle = makeStyles({
        root: {
            background: '#155799',
            height: 500,
            textAlign: 'center',
            padding: '20px'
        }
    })
    const {root} = useStyle()
    return (
        <div className={root}>
            <div>
                <Container maxWidth="md">
                    <Typography variant="h6">Contact</Typography>
                    <Typography variant="h4">Connect With Us</Typography>
                </Container>
            </div>
        </div>
    );
};

export default Contact;