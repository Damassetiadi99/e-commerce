'use client'

import React, { useState } from 'react';
import { CartItem } from '@/types/index';
import Cart from '../../components/Cart';

const CartPage = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

    return (
        <div>
            <h1>Your Cart</h1>
            <Cart cartItems={cartItems} total={total} />
        </div>
    );
};

export default CartPage;
