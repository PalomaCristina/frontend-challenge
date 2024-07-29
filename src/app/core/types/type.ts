export interface Promocao {
    id: string;
    title: string;
    price: {
        currency: string;
        amount: string;
        cashback: string;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
}