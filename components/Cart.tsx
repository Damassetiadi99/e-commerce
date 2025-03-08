import React from 'react';
import { CartItem } from '@/types/index';

interface CartProps {
    cartItems: CartItem[];
    total: number;
}

const Cart: React.FC<CartProps> = ({ cartItems, total }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            <h3>{item.product.title}</h3>
                                <p>{item.product.price} x {item.quantity}</p>
                        </div>
                    ))}
                    <p>Total: ${total}</p>
                </div>
            )}
        </div>
    );
};

export default Cart;
