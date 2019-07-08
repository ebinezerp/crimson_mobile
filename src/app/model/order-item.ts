import { Product } from './product';

export class OrderItem {
    id: number;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    product: Product;
}
