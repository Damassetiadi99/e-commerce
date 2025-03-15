'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Link, InputAdornment, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FaShoppingCart } from 'react-icons/fa';
import axios from "axios";

const AuthForm = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

    const onSubmit = async (name: string, email: string, password: string) => {
        const credentials = {
            name: name,
            email: email,
            password: password,
            avatar: 'https://picsum.photos/800',
        }
        try {
            const response = await axios.post('https://api.escuelajs.co/api/v1/users/', {
                name: name,
                email: email,
                password: password,
                avatar: 'https://picsum.photos/800',
            });

            if (response.status == 201) {
                router.push('/login');
            }
        } catch (error) {
            setErrorMessage('Registration failed. Please try again.');
        }
    };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: '90%', maxWidth: 500, p: 4, borderRadius: 3, boxShadow: 3, backgroundColor: 'white' }}>
        <Typography variant="h5" textAlign="center" mb={3} fontWeight="bold">
          <FaShoppingCart className="me-2 mx-auto" style={{ width: '24px', height: '24px' }} />
          Register for Tifah Beauty shop
        </Typography>

          <TextField
              label="Name"
              fullWidth
              margin="normal"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                  startAdornment: (
                      <InputAdornment position="start">
                          <AccountCircleIcon />
                      </InputAdornment>
                  )
              }}
          />

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

        {/*{!isLogin && (*/}
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
        {/*)}*/}

          {errorMessage && <p style={style.errorTextStyle}>{errorMessage}</p>}

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 3, mb: 2 }} onClick={() => onSubmit(name,email,password)}>
          Register
        </Button>

          <Typography variant="body2" textAlign="center">
            Already have an account? <Link href="/login" color="primary">Login here</Link>
          </Typography>
      </Box>
    </Container>
  );
};

const style= {
    errorTextStyle : {
        fontSize: '0.9rem',
        color: 'red',
    },
}

export default AuthForm;
