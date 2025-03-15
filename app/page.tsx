'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const MainPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      router.push('/home'); // Arahkan ke halaman home jika sudah login
    } else {
      router.push('/login'); // Arahkan ke halaman login jika belum login
    }
  }, []);

  return null; // Tidak menampilkan apa-apa
};

export default MainPage;
