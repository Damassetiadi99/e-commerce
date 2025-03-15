'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Link, Grid, InputAdornment, IconButton } from '@mui/material';
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

    const onSubmit = async (name, email, password) => {
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
            console.log(credentials)

            if (response.status == 201) {
                router.push('/login');
            }
        } catch (error: any) {
            console.log(error)
            setErrorMessage('Registration failed. Please try again.');
        }
    };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: '90%', maxWidth: 500, p: 4, borderRadius: 3, boxShadow: 3, backgroundColor: 'white' }}>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '20px',
          letterSpacing: '1px',
          fontFamily: "'Poppins', sans-serif",
          transition: 'all 0.3s ease-in-out',
        }}
      >
        Register
      </h1>

      <Typography
        variant="h5"
        textAlign="center"
        mb={3}
        fontWeight="bold"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          color: '#333',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            color: '#8e54e9',
            transform: 'scale(1.05)',
            cursor: 'pointer',
            textShadow: '0 4px 10px rgba(142, 84, 233, 0.4)',
          },
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: '0.5px',
        }}
      >
        <FaShoppingCart style={{ width: '24px', height: '24px' }} />
        create Account for Girls Beauty Store
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
        textAlign: 'center',
    },
}

export default AuthForm;
