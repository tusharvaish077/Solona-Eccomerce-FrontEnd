import React, { useEffect, useState } from "react";
import Banner1 from "../../Assets/Banner1.png";
import Banner2 from "../../Assets/BannerUpdated.png";
import Banner3 from "../../Assets/Banner3.png";
import Banner4 from "../../Assets/Banner4.png";

type Banner = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image: string;
};

const banners: Banner[] = [
  {
    id: 1,
    title: "Premium Fashion & Electronics",
    subtitle: "Discover",
    description: "Curated styles. Trusted sellers. Fast delivery.",
    buttonText: "Shop Now",
    image: Banner1,
  },
  {
    id: 2,
    title: "Trending Sneakers & Gadgets",
    subtitle: "Explore",
    description: "Top brands. Best prices.",
    buttonText: "Explore Now",
    image: Banner2,
  },
  {
    id: 3,
    title: "Trending Sneakers & Gadgets",
    subtitle: "Explore",
    description: "Top brands. Best prices.",
    buttonText: "Explore Now",
    image: Banner3,
  },
  {
    id: 4,
    title: "Trending Sneakers & Gadgets",
    subtitle: "Explore",
    description: "Top brands. Best prices.",
    buttonText: "Explore Now",
    image: Banner4,
  }
];

const HeroBanner: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[420px]">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner,index) => (
          <div key={banner.id} className="relative min-w-full h-full">
            
            {/* Background Image */}
            <img
              src={banner.image}
              alt="banner"
              className="absolute inset-0 w-full h-full"
            />

            {/* Dark Overlay (optional but recommended) */}
           

            {/* Text Content */}
            <div className="relative z-10 h-full flex items-center px-6 lg:px-20">
              <div className="max-w-xl text-black space-y-4">
                <p className="uppercase tracking-wide text-sm opacity-90">
                  {banner.subtitle}
                </p>

                <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                  {banner.title}
                </h1>

                <p className="opacity-90">
                  {banner.description}
                </p>

                <button className="mt-4 text-white bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-md text-sm font-semibold transition">
                  {banner.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              current === index ? "bg-teal-500 w-5" : "bg-white/60 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
