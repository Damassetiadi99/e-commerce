'use client'

import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';

const Header = () => {
    const router = useRouter()
    return (
        <AppBar position="static" sx={{ backgroundColor: '#333', padding: '10px 0' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            
            {/* Logo atau Nama Brand di Tengah */}
            <Typography
                variant="h5"
                sx={{
                    flex: 1,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'color 0.3s',
                    '&:hover': { color: '#ffcc00' }
                }}
                onClick={() => router.push('/')}
            >
                Tifah Beauty Shop
            </Typography>

            {/* Tombol Cart di Kanan */}
            <IconButton 
                onClick={() => router.push('/cart')} 
                sx={{ color: '#fff', '&:hover': { color: '#ffcc00' } }}
            >
                <FaShoppingCart size={24} />
            </IconButton>
        </Toolbar>
    </AppBar>

    );
};

export default Header;
