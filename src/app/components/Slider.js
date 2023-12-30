'use client'
// components/ImageSlider.js
import React, { useRef, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import 'tailwindcss/tailwind.css';

const ImageSlider = ({ images }) => {
  const sliderRef = useRef(null);
  const [slider, sliderElement] = useKeenSlider({
    slidesPerView: 1,
    // spacing: 16,
    loop: true,
  });


  return (
    <div ref={sliderRef} className="keen-slider">
      {sliderElement && images.map((image, index) => (
        <div key={index} className="keen-slider__slide">
          <img src={image} alt={`Image ${index + 1}`} className="" />
        </div>
      ))}
    </div>
  );
};

const PlaceholderImages = () => {
  // You can replace these placeholder URLs with your actual image URLs
  const placeholderImages = [
    'https://cdn-bdocb.nitrocdn.com/iXewVbnvADxpKNstGwyDGfFbXPZiTjxS/assets/images/optimized/rev-b551aa4/thebuildview.com/wp-content/uploads/2021/09/2-Kanal-3d-house-design-in-Pakistan.jpg.webp',
   
  ];

  return <ImageSlider images={placeholderImages} />;
};

export default PlaceholderImages;
