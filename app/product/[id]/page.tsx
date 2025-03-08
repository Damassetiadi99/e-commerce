'use client'

import React, { useState, useEffect } from 'react';
import { useRouter, useParams, usePathname  } from 'next/navigation';
import axios from 'axios';
import { Product } from '@/types/index';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const ProductDetail = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const {id} = useParams()
    console.log(id)

    useEffect(() => {
        if (id) {
            axios.get(`https://fakestoreapi.com/products/${id}`)
                .then(response => setProduct(response.data))
                .catch(error => console.error('Error fetching product:', error));
        }
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <Card sx={{ maxWidth: '500px', width: '100%', boxShadow: 5, borderRadius: '12px', backgroundColor: '#f9f9f9' }}>
            
            {/* Gambar Produk */}
            <Box sx={{ textAlign: 'center', padding: '20px', backgroundColor: '#fff', borderRadius: '12px 12px 0 0' }}>
                <img 
                    src={product.image} 
                    alt={product.title} 
                    style={{ width: '100%', maxWidth: '350px', height: 'auto', borderRadius: '8px' }} 
                />
            </Box>

            {/* Detail Produk */}
            <CardContent sx={{ padding: '25px' }}>
                <Typography variant="h4" fontWeight="bold" textAlign="center">
                    {product.title}
                </Typography>
                
                <Typography variant="body1" color="text.secondary" sx={{ marginTop: '10px', textAlign: 'justify' }}>
                    {product.description}
                </Typography>
                
                <Typography variant="h5" sx={{ marginTop: '15px', color: 'green', textAlign: 'center' }}>
                    ${product.price}
                </Typography>

                {/* Tombol Aksi */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: '20px' }}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        sx={{ flex: 1, fontSize: '16px', fontWeight: 'bold' }}
                    >
                        Buy Now
                    </Button>
                    <Button 
                        variant="outlined" 
                        color="secondary" 
                        sx={{ flex: 1, fontSize: '16px', fontWeight: 'bold' }}
                    >
                        Add to Cart
                    </Button>
                </Box>
            </CardContent>
        </Card>
    </Box>
    );
};

export default ProductDetail;
