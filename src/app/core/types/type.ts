export interface Promocao {
    id: string;
    title: string;
    price: {
        currency: string;
        amount: number;
        decimals: string;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
}