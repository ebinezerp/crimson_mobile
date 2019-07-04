import { Product } from './product';

export class Cartitem {
    cartItemId: number;
    product: Product;
    quantity: number;
    unitPrice: number;
    totalAmount: number;
}
