export type Pizza = {
    id: string;
    name: string;
    unitPrice: number;
    count: number;
};

export type Order = {
    id: string;
    customer: string;
    phone: string;
    address: string;
    priority: boolean;
    estimatedDelivery: string;
    cart: Pizza[];
    orderPrice: number;
};
