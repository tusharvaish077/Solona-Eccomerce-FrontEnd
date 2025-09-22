import { Product } from "./ProuductTypes";
import { User } from "./userTypes";

export interface Wishlist {
    id: number;
    user : User,
    product: Product[];
}

export interface WishlistState{
    wishlist: Wishlist|null;
    loading: boolean;
    error: string | null;
}
export interface AddProductToWishlistPayload{
    wishlistId: number;
    product : number;
}