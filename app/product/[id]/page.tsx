'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import { Product, CartItem } from '@/types/index';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const ProductDetail = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const router = useRouter();
    const params = useParams();
    const id = params?.id ? Number(params.id) : null;

    useEffect(() => {
        if (id) {
            axios.get<Product>(`https://fakestoreapi.com/products/${id}`)
                .then(response => setProduct(response.data))
                .catch(error => console.error('Error fetching product:', error));
        }
    }, [id]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCart = localStorage.getItem("cartItems");
            if (storedCart) {
                setCartItems(JSON.parse(storedCart));
            }
        }
    }, []);

    const handleAddToCart = useCallback(() => {
        if (!product) return;

        const existingItem = cartItems.find(item => item.product.id === product.id);
        let updatedCart;

        if (existingItem) {
            updatedCart = cartItems.map(item =>
                item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            updatedCart = [...cartItems, { product, quantity: 1 }];
        }

        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        router.push('/cart');
    }, [cartItems, product, router]);

    if (!product) return <p>Loading...</p>;

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <Card sx={{ maxWidth: '500px', width: '100%', boxShadow: 5, borderRadius: '12px', backgroundColor: '#f9f9f9' }}>
                <Box sx={{ textAlign: 'center', padding: '20px', backgroundColor: '#fff', borderRadius: '12px 12px 0 0' }}>
                    <img src={product.image} alt={product.title} style={{ width: '100%', maxWidth: '350px', height: 'auto', borderRadius: '8px' }} />
                </Box>

                <CardContent sx={{ padding: '25px' }}>
                    <Typography variant="h4" fontWeight="bold" textAlign="center">{product.title}</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ marginTop: '10px', textAlign: 'justify' }}>{product.description}</Typography>
                    <Typography variant="h5" sx={{ marginTop: '15px', color: 'green', textAlign: 'center' }}>${product.price}</Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: '20px' }}>
                        <Button variant="contained" color="primary" sx={{ flex: 1 }}>Buy Now</Button>
                        <Button variant="outlined" color="secondary" onClick={handleAddToCart} sx={{ flex: 1 }}>Add to Cart</Button>
                    </Box>
                </CardContent>
                
            </Card>
        </Box>
    );
};

export default ProductDetail;
