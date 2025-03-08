'use client'

import React from 'react';
import { Product } from '@/types/index';
import Link from 'next/link';
import {Button} from "@mui/material";
import {useRouter} from "next/navigation";
import Image from 'next/image'

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const router = useRouter()

    const navigateToProduct = (id: string) => {
        router.push(`/product/${id}`);
    };

    return (
        <div style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem', width: '200px' }}>
            <Image src={product.image} alt={product.title} width={100}
                   height={100} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <Button onClick={() => navigateToProduct(`${product.id}`)}>
                <a style={{ color: 'blue' }}>View Details</a>
            </Button>
        </div>
    );
};

export default ProductCard;
