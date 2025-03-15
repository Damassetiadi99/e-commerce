export interface Product {
    id: number;
    title: string;
    description: string;
    price: number | string;
    image: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}
