'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Link, Grid, InputAdornment, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FaShoppingCart } from 'react-icons/fa';

const AuthForm = ({ isLogin }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = () => {
    if (!isLogin && password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    localStorage.setItem('token', 'fakeToken');
    router.push('/Login');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: '90%', maxWidth: 500, p: 4, borderRadius: 3, boxShadow: 3, backgroundColor: 'white' }}>
        <Typography variant="h5" textAlign="center" mb={3} fontWeight="bold">
          <FaShoppingCart className="me-2 mx-auto" style={{ width: '24px', height: '24px' }} />
          {isLogin ? 'Login to SIMS PPOB' : 'Register for Girls Beauty shop'}
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
          type={passwordVisible ? "text" : "password"} 
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

        {!isLogin && (
          <TextField 
            label="Confirm Password" 
            type={passwordVisible ? "text" : "password"} 
            fullWidth 
            margin="normal" 
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              )
            }}
          />
        )}

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
          {isLogin ? 'Login' : 'Register'}
        </Button>

        {isLogin ? (
          <Typography variant="body2" textAlign="center">
            Don't have an account? <Link href="/Register" color="primary">Register here</Link>
          </Typography>
        ) : (
          <Typography variant="body2" textAlign="center">
            Already have an account? <Link href="/Login" color="primary">Login here</Link>
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default AuthForm;
