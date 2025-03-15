'use client';

import { useSearchParams } from 'next/navigation';
import { Box, Typography, Button, Divider, Card, CardContent, Grid, Stack, Paper } from '@mui/material';
import Swal from 'sweetalert2';
const PaymentPage = () => {
    const searchParams = useSearchParams();
    const cartData = searchParams.get('cart');
    const total = searchParams.get('total');

    const cartItems = cartData ? JSON.parse(decodeURIComponent(cartData)) : [];
    console.log(cartItems)
    const handlePayment = () => {
        Swal.fire({
            title: 'Pembayaran Berhasil!',
            text: 'Terima kasih telah berbelanja.',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        }).then(() => {
            localStorage.removeItem('cartItems');
            window.location.href = '/Home';
        });
    };

    const convertToRupiah = (dollarAmount: number) => {
        const rate = 14000;
        return (dollarAmount * rate).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    };

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
            <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
                Halaman Pembayaran
            </Typography>

            <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
                <Stack spacing={3}>
                    {cartItems.map((item: any) => (
                        <Card key={item.product.id} sx={{ p: 2, borderRadius: 2 }}>
                            <CardContent>
                                <Grid container justifyContent="space-between" alignItems="center">
                                    <Typography variant="h6">
                                        {item.product.title} x {item.quantity}
                                    </Typography>
                                    <Typography color="text.secondary">
                                        {convertToRupiah(item.product.price * item.quantity)}
                                    </Typography>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h5" fontWeight="bold" textAlign="right" mb={3}>
                    Total: {convertToRupiah(Number(total))}
                </Typography>

                <Button variant="contained" color="primary" fullWidth onClick={handlePayment} sx={{ py: 1.5, borderRadius: 3 }}>
                    Bayar Sekarang
                </Button>
            </Paper>
        </Box>
    );
};

export default PaymentPage;