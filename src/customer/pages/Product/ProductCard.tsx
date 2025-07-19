import React, { useState, useEffect } from 'react';
import './ProductCard.css';
import Button from '@mui/material/Button';
import { Favorite, ModeComment } from '@mui/icons-material';
import { teal } from '@mui/material/colors';

const images = [
  'https://m.media-amazon.com/images/I/514jUYwSHzL._SX679_.jpg',
  'https://m.media-amazon.com/images/I/51dUBnrQwOL._SX679_.jpg',
  "https://m.media-amazon.com/images/I/61FvUXJ7rzL._SX679_.jpg",
  "https://m.media-amazon.com/images/I/51ZccFdFBSL._SX679_.jpg"
];

const ProductCart = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: any;

    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="group px-4 relative">
      <div
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((item, index) => (
          <img
            key={index}
            className="card-media object-top"
            src={item}
            alt=""
            style={{ transform: `translateX(${(index - currentImage) * 100}%)` }}
          />
        ))}
        {isHovered &&
          <div  className='indicator flex-col items-center space-y-2'>

            <div className='flex gap-3'>
              <Button variant ='contained' color='secondary'>
                <Favorite sx={{color:teal[500]}}/>
                
                
              </Button>
              <Button variant ='contained' color='secondary'>
                
                <ModeComment sx={{color:teal[500]}}/>
                
              </Button>
            </div>
          </div>
        }
      </div>
      <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
        <div className="name">
          <h1>
            Monte Carlo
          </h1>
          <p>Black Shirt</p>

        </div>
        <div className='price flex items-center gap-3'>
          <span className='font-sans text-gray-800'>
            ₹900
          </span>
          <span className='thin-line-through text-gray-400'>
            ₹1499
          </span>
          <span className='text-primary-color font-semibold'>
            60%
          </span>
        </div>
      </div> 
    </div>
  );
};

export default ProductCart;
