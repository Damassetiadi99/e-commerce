import React from 'react';
import { Product } from '@/types/index';
import Link from 'next/link';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem', width: '200px' }}>
            <img src={product.imageUrl} alt={product.title} style={{ width: '100%', height: 'auto' }} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <Link href={`/product/${product.id}`}>
                <a style={{ color: 'blue' }}>View Details</a>
            </Link>
        </div>
    );
};

export default ProductCard;
