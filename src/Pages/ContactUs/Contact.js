import { Container, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import MuiButton from '../../StyledComponent/Button';
import bg from '../../images/bg.png';

const Contact = () => {
    const useStyle = makeStyles({
        root: {
            background: `url(${bg}), linear-gradient(#3A4256,#3A4256 )`,
            backgroundBlendMode: 'overlay',
            backgroundRepeat: 'no-repeat',
            height: 500,
            textAlign: 'center',
            padding: '30px'
        },
        textArea: {
            border: 0,
            outline: 0,
            width: '100%',
            margin: '20px 0',
            borderRadius: '3px',
            fontFamily: 'inherit',
            padding: '8px'
        }
    })
    const {root, textArea} = useStyle()
    return (
        <div className={root}>
            <div>
                <Container maxWidth="md">
                    <Typography variant="h6" color="#fff">Contact</Typography>
                    <Typography variant="h4" color="#fff">Connect With Us</Typography>
                    <TextField
                        fullWidth
                        placeholder="Email"
                        Required
                        margin="normal"
                        sx={{backgroundColor: '#fff', borderRadius: 2}} 
                        />
                    <TextField
                        fullWidth
                        placeholder="Phone number"
                        Required
                        margin="normal"
                        sx={{backgroundColor: '#fff', borderRadius: 2}} 
                        />
                    <textarea rows={5} className={textArea} placeholder="Your message"></textarea>
                    <MuiButton>Submit</MuiButton>
                </Container>
            </div>
        </div>
    );
};

export default Contact;