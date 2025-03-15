'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const MainPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      router.push('/Home'); // Arahkan ke halaman home jika sudah login
    } else {
      router.push('/Login'); // Arahkan ke halaman login jika belum login
    }
  }, []);

  return null; // Tidak menampilkan apa-apa
};

export default MainPage;
