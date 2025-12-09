import prod4 from '../../assets/img/product-4.jpg';
import prod5 from '../../assets/img/product-5.jpg';
import prod6 from '../../assets/img/product-6.jpg';
import prod7 from '../../assets/img/product-7.jpg';
import prod3 from '../../assets/img/product-3.jpg';

const IMAGES = [prod4, prod5, prod6, prod7, prod3];

export function ProductGallery({ product }) {
  return (
    <div className="col-xl-6">
      <div className="bg-light rounded mb-3">
        <img src={IMAGES[0]} className="img-fluid rounded w-100" alt={product.name} />
      </div>

      <div className="d-flex gap-2">
        {IMAGES.map((img, idx) => (
          <div key={idx} className="single-inner bg-light rounded" style={{ width: 80 }}>
            <img src={img} className="img-fluid rounded" alt={`${product.name} thumbnail ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
