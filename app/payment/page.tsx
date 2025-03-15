'use client'

import { useSearchParams } from 'next/navigation';
import { Box, Typography, Button } from '@mui/material';

const PaymentPage = () => {
    const searchParams = useSearchParams();
    const product = searchParams.get('product');
    const total = searchParams.get('total');

    const handlePayment = () => {
        alert('Pembayaran Berhasil!');
    };

    return (
        <Box sx={{ textAlign: 'center', padding: '20px' }}>
            <Typography variant="h4" fontWeight="bold" mb={3}>
                Halaman Pembayaran
            </Typography>
            <Typography variant="h6" mb={2}>
                Produk: {product}
            </Typography>
            <Typography variant="h6" mb={2}>
                Total Harga: ${total}
            </Typography>
            <Button variant="contained" color="primary" onClick={handlePayment}>
                Bayar Sekarang
            </Button>
        </Box>
    );
};

export default PaymentPage;
