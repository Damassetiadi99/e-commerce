'use client'

import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation'
import {Button} from "@mui/material";

const Header = () => {
    const router = useRouter()


    return (
        <header style={{ padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
            <div>
                <Button onClick={() => router.push('/')} style={{ color: '#fff', fontSize: '24px' }}>
                    E-Commerce App
                </Button>
            </div>
            <div>
                <Button onClick={() => router.push('/cart') }>
                    <a style={{ color: '#fff', fontSize: '24px' }}>
                        <FaShoppingCart />
                        <span style={{ marginLeft: '8px' }}>Cart</span>
                    </a>
                </Button>
            </div>
        </header>
    );
};

export default Header;
