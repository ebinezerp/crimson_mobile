import { Address } from './address';

export class OrderReciever {

    orderReciverId: number;
    firstname: string;
    lastname: string;
    companyName: string;
    email: string;
    mobile: string;
    address: Address = new Address();

}
