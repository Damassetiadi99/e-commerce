'use client'

import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useRouter, usePathname } from 'next/navigation';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();

    // Sembunyikan header di halaman login dan register
    const isAuthPage = pathname === '/Login' || pathname === '/Register';

    if (isAuthPage) return null;

    return (
        <AppBar position="static" sx={{ backgroundColor: '#333', padding: '10px 0' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                    Girls Shop
                </Typography>
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
