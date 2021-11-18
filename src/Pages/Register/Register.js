import { Alert, Button,CircularProgress,Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const { user, registerUser, isLoading, error } = useAuth();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        
    }
    const handleLoginSubmit = e =>{
        e.preventDefault();
        if(loginData.password !== loginData.password2){
            alert('password could not match!!');
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name, history);
    }
    return (
        <>
              <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt : 8}} xs={12} md={6} sm={12} lg={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m:1}}
                            id="standard-basic"
                            label="your name"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard"
                         />
                        <TextField
                            sx={{ width: '75%', m:1}}
                            id="standard-basic"
                            label="your email"
                            name="email"
                            type="email"
                            onBlur={handleOnChange}
                            variant="standard"
                         />
                        <TextField
                            sx={{ width: '75%', m:1}}
                            id="standard-basic"
                            label="your password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            variant="standard"
                         />
                        <TextField
                            sx={{ width: '75%', m:1}}
                            id="standard-basic"
                            label="Confirm your password"
                            type="password"
                            name="password2"
                            onBlur={handleOnChange}
                            variant="standard"
                         />

                         <Button sx={{ width: '75%', m:1}} variant="contained" type="submit">Register</Button>
                         <NavLink style={{textDecoration: 'none'}} to="/login">
                            <Button sx={{ width: '75%', m:1}} variant="text">Already Register? Please Login</Button>
                         </NavLink>
                    </form>}
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">This is a successfully register</Alert>
                    }
                    {
                        user?.email && <Alert severity="error">{error}</Alert>           
                    }
                </Grid>
                <Grid item xs={12} md={6} sm={12} lg={6}>
                    
                </Grid>
            </Grid>
        </Container>   
        </>
    );
};

export default Register;