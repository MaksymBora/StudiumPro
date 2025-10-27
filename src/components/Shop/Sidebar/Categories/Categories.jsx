import { RedAppleIcon } from './categories.styled';
import { Price } from '../Price/Price';
import { AdditionalProds } from '../AdditionalProds';
import { FeaturedProds } from '../FeaturedProds';
import { Banner } from '../Banner';

export function Categories() {
  const categories = [
    { name: 'Accessories', count: 3 },
    { name: 'Electronics & Computer', count: 5 },
    { name: 'Laptops & Desktops', count: 2 },
    { name: 'Mobiles & Tablets', count: 8 },
    { name: 'SmartPhone & Smart TV', count: 5 },
  ];

  return (
    <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
      {/* Product Categories */}
      <div className="product-categories mb-4">
        <h4>Products Categories</h4>
        <ul className="list-unstyled">
          {categories.map(item => (
            <li key={item.name}>
              <div className="categories-item d-flex justify-content-between">
                <a href="#" className="text-dark">
                  <RedAppleIcon className="fa-solid fa-apple-whole" />
                  {item.name}
                </a>
                <span>({item.count})</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <Price></Price>

      {/* Additional products (radio) */}
      <AdditionalProds></AdditionalProds>

      {/* Featured products */}
      <FeaturedProds></FeaturedProds>

      {/* Sidebar banner */}
      <Banner></Banner>
    </div>
  );
}
