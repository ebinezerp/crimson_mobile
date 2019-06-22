export class User {
    userId: number;
    username: string;
    mobile: string;
    email: string;
    password: string;
    role: string = 'ROLE_USER';
    isActive: boolean = true;
}
