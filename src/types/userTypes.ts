export interface Address{
    id?: number;
    name: String;
    mobile: String;
    pinCode: String;
    address: String;
    locality: String;
    city: String;
    state: String;
}
export enum UserRole{
    ROLE_CUSTOMER ='ROLE_CUSTOMER',
    ROLE_ADMIN = 'ROLE_ADMIN',
    ROLE_SELLER ='ROLE_SELLER'
}

export interface User{
    id?:number,
    password?:String;
    email:String;
    fullName: String;
    mobile?:String;
    role:UserRole;
    addresses?:Address[];
}
