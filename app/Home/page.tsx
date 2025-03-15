'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import { Product } from '@/types/index';
import { BsDisplay } from 'react-icons/bs';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const convertToRupiah = (dollarAmount: number) => {
    const rate = 14000;
    return (dollarAmount * rate).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching products:', error));
      }, []);
      
      return (
        <div style={{width : '100%'}}>
        <h1 style={{display : 'flex' ,justifyContent: 'center', alignContent : 'center', padding : '25px'}}>Welcome to Our E-Commerce Store</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', width : '100%',margin : '56px'}}>
          {products.map(product => (
            <ProductCard key={product.id} product={{
              ...product,price: convertToRupiah(product.price)
            }} />
          ))}
        </div>
      </div>
  );
};

export default Home;
