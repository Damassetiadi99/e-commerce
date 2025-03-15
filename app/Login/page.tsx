'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Link, Grid, InputAdornment, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FaShoppingCart } from 'react-icons/fa';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    // localStorage.setItem('token', 'fakeToken');
    router.push('/Home');
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
            transition: 'color 0.3s',
            '&:hover': {
              color: '#B8860B'
            }
          }}
        >
           Login To Girls Beauty Store
          </Typography>
          <Typography
          variant="h6"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          sx={{
            transition: 'color 0.3s',
            '&:hover': {
              color: '	#FFE4C4'
            }
          }}
        >
            Masuk atau buat akun untuk mulai berbelanja
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

          <Button variant="contained" color="primary" fullWidth sx={{ mt: 3, mb: 2 }} onClick={handleLogin}>
            Masuk
          </Button>

          <Typography variant="body2" textAlign="center">
            Belum punya akun? <Link href="/Register" color="primary">Registrasi disini</Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;