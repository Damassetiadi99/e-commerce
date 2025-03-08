'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { Product } from '@/types/index';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
      <div>
        <h1>Welcome to Our E-Commerce Store</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products.map(product => (
              <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
  );
};

export default Home;
