'use client'

import React from 'react';
import { Product } from '@/types/index';
import Link from 'next/link';
import {useRouter} from "next/navigation";
import Image from 'next/image'
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const router = useRouter()

    const navigateToProduct = (id: string) => {
        router.push(`/product/${id}`);
    };

    return (
        <Card sx={{ maxWidth: 250, m: 2, boxShadow: 3, display : 'flex',flexDirection : 'column' }}>

        <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.title}
            
            sx={{ objectFit: 'contain', padding: '10px' }}
        />
    
        <CardContent sx={{ textAlign: 'center' ,flexGrow: 1, }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {product.description}
            </Typography>
            <Typography variant="h6" sx={{ mt: 1, color: 'green' }}>
                {product.price}
            </Typography>
        </CardContent>
    
        <CardActions sx={{ justifyContent: 'center', margin : 'auto',marginBottom:'16px' }}>
            <Button variant="contained" color="primary" onClick={() => navigateToProduct(`${product.id}`)}>
                View Details
            </Button>
        </CardActions>
    </Card>
    
    );
};

export default ProductCard;
