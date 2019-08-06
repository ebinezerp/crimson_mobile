import { Address } from './address';
import { User } from './user';
import { UserCategory } from './user-category';

export class UserDetails {
    id: number;
    companyName: string;
    gst: string;
    address: Address;
    userCategory: UserCategory;
    user: User;
}
