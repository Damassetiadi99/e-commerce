'use client'

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import { FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();

    // Sembunyikan header di halaman login dan register
    const isAuthPage = pathname === '/Login' || pathname === '/Register';

    if (isAuthPage) return null;

    const handleLogout = () => {
        // Hapus token atau session saat logout
        localStorage.removeItem('token');
        router.push('/Login');
    };

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
                    onClick={() => router.push('/Home')}
                >
                    Girls Beauty Store
                </Typography>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <Tooltip title="Cart">
                        <IconButton 
                            onClick={() => router.push('/cart')} 
                            sx={{ color: '#fff', '&:hover': { color: '#ffcc00' } }}
                        >
                            <FaShoppingCart size={24} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Logout">
                        <IconButton 
                            onClick={handleLogout}
                            sx={{ color: '#fff', '&:hover': { color: 'red' } }}
                        >
                            <FaSignOutAlt size={24} />
                        </IconButton>
                    </Tooltip>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
