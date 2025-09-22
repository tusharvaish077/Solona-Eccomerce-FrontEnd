import React, { useEffect } from 'react'
import WishlistProductCard from './WishlistProductCard'
import { useAppDispatch, useAppSelector } from '../../../State/Store'
import { getWishlistByUserId } from '../../../State/customer/wishlistSlice';

const Wishlist = () => {
    const dispatch = useAppDispatch();
     const {wishlist} = useAppSelector(store=>store);
    useEffect(() => {
        dispatch(getWishlistByUserId());
    }, []);
    // console.log("Here is wishlist   "+wishlist.wishlist?.product[0].title);
  return (
    <div className='h-[85vh] p-5 lg:p-20'>
        <section>
            <h1><strong>My Wishlist</strong> 5 items</h1>
            <div className="pt-10 flex flex-wrap gap-5">
                {/* {wishlist.wishlist?.products.map(()=><WishlistProductCard/>)} */}
                {wishlist.wishlist?.product.map((item) => (
                    <WishlistProductCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    </div>
  )
}

export default Wishlist