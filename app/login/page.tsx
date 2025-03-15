'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Link, Grid, InputAdornment, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FaShoppingCart } from 'react-icons/fa';
import axios from "axios";

interface LoginFormData {
    email: string;
    password: string;
}

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

    const handleLogin = async (email, password) => {
        try {

            const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
                email: email,
                password: password,
            });
            console.log(response)

            if (response.status == 201) {
                const responseData = await response.data.access_token;
                const token = responseData;
                localStorage.setItem('token', token);

                router.push('/home');
            } else {
                setErrorMessage(response.data || 'Login failed. Please check your credentials.');
            }
        } catch (error) {
            setErrorMessage('Login failed. Please check your credentials.');
        }
    };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid container sx={{ boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
        {/* Left Side: Image */}
        <Grid item md={6} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' }}>
          <FaShoppingCart size={150} color="#1976D2" />
        </Grid>

        {/* Right Side: Login Form */}
        <Grid item xs={12} md={6} sx={{ padding: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{
              color: 'black',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                background: 'linear-gradient(to right, #ff6bcb, #8e54e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer'
              },
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: '1px',
              marginBottom: '20px'
            }}
          >
            Login To Girls Beauty Store
          </Typography>


          <Typography
              variant="body1"
              textAlign="center"
              mb={3}
              sx={{
                color: '#666',
                fontSize: '16px',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  color: '#8e54e9',
                  cursor: 'pointer'
                },
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '0.5px'
              }}
            >
              Masuk atau buat akun untuk Mulai berbelanja
            </Typography>

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              )
            }}
          />

          <TextField
            label="Password"
            type={passwordVisible ? 'text' : 'password'}
            fullWidth
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility}>
                    {passwordVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
            {errorMessage && <p style={style.errorTextStyle}>{errorMessage}</p>}

          <Button variant="contained" color="primary" fullWidth sx={{ mt: 3, mb: 2 }} onClick={() => handleLogin(email, password)}>
            Masuk
          </Button>

          <Typography variant="body2" textAlign="center">
            Belum punya akun? <Link href="/register" color="primary">Registrasi disini</Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

const style= {
    errorTextStyle : {
        fontSize: '0.9rem',
        color: 'red',
        textAlign: 'center',
    },
}


export default Login;
