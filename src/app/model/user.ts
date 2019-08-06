import { Cart } from './cart';
import { UserDetails } from './user-details';

export class User {
    userId: number;
    username: string;
    mobile: string;
    email: string;
    password: string;
    role: string = 'ROLE_USER';
    isActive: boolean = true;
    cart: Cart;
    userDetails: UserDetails;
}
