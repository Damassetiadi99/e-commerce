'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Product } from '@/types/index';

const ProductDetail = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            axios.get(`https://fakestoreapi.com/products/${id}`)
                .then(response => setProduct(response.data))
                .catch(error => console.error('Error fetching product:', error));
        }
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.imageUrl} alt={product.title} style={{ width: '300px', height: 'auto' }} />
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    );
};

export default ProductDetail;
