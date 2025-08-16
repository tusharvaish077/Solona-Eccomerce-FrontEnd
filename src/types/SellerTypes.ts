export interface PickupAddress{
    name:string;
    mobile: string;
    pincode: string;
    address: string;
    locality: string;
    city: string;
    state: string;
}

export interface BankDetails{
    accountNumber: string;
    ifscCode: string;
    accountHoldername: string;
}
export interface BusinessDetails{
    businessName: string;
}
export interface Seller{
    id?:number;
    mobile:string;
    otp:string;
    gstin:string;
    pickupAddress:PickupAddress;
    bankDetails:BankDetails;
    email:string;
    businessDetails:BusinessDetails;
    password: String;
    accountStatus?:string;
}
export interface SellerReport{
    id:number;
    seller:Seller;
    totalEarning:number;
    totalSales:number;
    totalRefunds:number;
    totalTax:number;
    netEarnings:number;
    totalOrders:number;
    cancelOrders:number;
    totalTransaction:number;
}