import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <header style={{ padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
            <div>
                <Link href="/" style={{ color: '#fff', fontSize: '24px' }}>
                    E-Commerce App
                </Link>
            </div>
            <div>
                <Link href="/cart">
                    <a style={{ color: '#fff', fontSize: '24px' }}>
                        <FaShoppingCart />
                        <span style={{ marginLeft: '8px' }}>Cart</span>
                    </a>
                </Link>
            </div>
        </header>
    );
};

export default Header;
