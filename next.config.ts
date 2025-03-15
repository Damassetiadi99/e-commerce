import { NextConfig } from 'next';

const nextConfig: { images: { domains: string[] }; reactStrictMode: boolean; experimental: { missingSuspenseWithCSRBailout: boolean } } = {
    reactStrictMode: true,
    images: {
        domains: ['fakestoreapi.com'],
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

module.exports = nextConfig;
