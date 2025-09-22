
import DealCard from './DealCard'
import React from "react";
import Slider from "react-slick";
import { useAppSelector } from '../../../../State/Store';


const Deal = () => {
  const { home } = useAppSelector(store => store)
  var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024, // Large screen
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768, // Tablet
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480, // Mobile
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],

    };
  return (
    
    <div  className='py-5 lg:px-20'>
        <div className='flex items-center justify-between'>
            {home.homePageData?.deals?.map((item)=><DealCard item={item}/>)}
        </div>
    </div>
  )
}

export default Deal     