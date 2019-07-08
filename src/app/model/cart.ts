
import { Cartitem } from './cartitem';

export class Cart {
    cartId: number;
    totalAmount: number;
    quantity: number;
    cartItems: Cartitem[] = [];
}
