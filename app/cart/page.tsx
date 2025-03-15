'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { CartItem } from '@/types/index';
import { Card, Typography, Button, Box, IconButton, Divider } from '@mui/material';
import { Delete as DeleteIcon, Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

const CartPage = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCart = localStorage.getItem("cartItems");
            if (storedCart) {
                try {
                    setCartItems(JSON.parse(storedCart));
                } catch {
                    setCartItems([]);
                }
            }
        }
    }, []);

    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const convertToRupiah = (dollarAmount: number) => {
        const rate = 14000;
        return (dollarAmount * rate).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    };

    const updateQuantity = (id: number, change: number) => {
        setCartItems(prevCart =>
            prevCart
                .map(item =>
                    item.product.id === id ? { ...item, quantity: item.quantity + change } : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    const total = useMemo(() => 
        cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0), 
        [cartItems]
    );

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
            <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
                Your Cart
            </Typography>

            {cartItems.length === 0 ? (
                <Typography variant="h6" textAlign="center">
                    Your cart is empty.
                </Typography>
            ) : (
                <Card sx={{ p: 3, boxShadow: 4, borderRadius: 2 }}>
                    {cartItems.map((item, index) => (
                        <Box key={item.product.id}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <img src={item.product.image} alt={item.product.title} 
                                         style={{ width: 60, height: 60, borderRadius: 8, objectFit: 'cover' }} 
                                    />
                                    <Box>
                                        <Typography variant="h6">{item.product.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {convertToRupiah(item.product.price)}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <IconButton onClick={() => updateQuantity(item.product.id, -1)} size="small">
                                        <RemoveIcon />
                                    </IconButton>
                                    <Typography>{item.quantity}</Typography>
                                    <IconButton onClick={() => updateQuantity(item.product.id, 1)} size="small">
                                        <AddIcon />
                                    </IconButton>
                                </Box>

                                <Typography variant="h6" color="primary">
                                    {convertToRupiah(item.product.price * item.quantity)}
                                </Typography>
                                <IconButton onClick={() => updateQuantity(item.product.id, -item.quantity)} color="error">
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                            {index !== cartItems.length - 1 && <Divider />}
                        </Box>
                    ))}

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <Typography variant="h5" fontWeight="bold">Total:</Typography>
                        <Typography variant="h5" fontWeight="bold" color="green">
                            {convertToRupiah(total)}
                        </Typography>
                    </Box>

                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 3, fontSize: 16, fontWeight: 'bold' }}>
                        Proceed to Checkout
                    </Button>
                </Card>
            )}
        </Box>
    );
};

export default CartPage;
