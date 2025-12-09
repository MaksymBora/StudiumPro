import { useState } from 'react';

import prod4 from '../../assets/img/product-4.jpg';
import prod5 from '../../assets/img/product-5.jpg';
import prod6 from '../../assets/img/product-6.jpg';
import prod7 from '../../assets/img/product-7.jpg';
import prod3 from '../../assets/img/product-3.jpg';

const IMAGES = [prod4, prod5, prod6, prod7, prod3];

export function ProductGallery({ product }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="col-xl-6">
      {/* MAIN IMAGE WRAPPER */}
      <div
        className="bg-light rounded mb-3 d-flex justify-content-center align-items-center"
        style={{
          height: '420px',
          overflow: 'hidden',
        }}
      >
        <img
          src={IMAGES[selectedIndex]}
          alt={product.name}
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* THUMBNAILS */}
      <div className="d-flex gap-2">
        {IMAGES.map((img, idx) => (
          <div
            key={idx}
            className="single-inner bg-light rounded d-flex justify-content-center align-items-center"
            style={{
              width: 80,
              height: 80,
              cursor: 'pointer',
              border: selectedIndex === idx ? '2px solid #f28b00' : '2px solid transparent',
              overflow: 'hidden',
            }}
            onClick={() => setSelectedIndex(idx)}
          >
            <img
              src={img}
              alt={`${product.name} thumbnail`}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
