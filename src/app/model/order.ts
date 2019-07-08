import { OrderReciever } from './order-receiver';
import { OrderItem } from './order-item';

export class Order {
    orderId: number;
    quantity: number;
    totalAmount: number;
    dispatchStatus: boolean;
    deliveryStatus: boolean;
    orderedDate: string;
    dispatchedDate: string;
    deliveryDate: string;
    orderReciever: OrderReciever;
    orderItems: OrderItem[];
}
