// src/components/Shop/Sidebar/Categories.jsx (путь у тебя свой)
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { RedAppleIcon } from './categories.styled';
import { Price } from '../Price/Price';
import { AdditionalProds } from '../AdditionalProds';
import { FeaturedProds } from '../FeaturedProds';
import { Banner } from '../Banner';
import { getAllProducts, getFilteredProducts } from '../../../../Redux/Products/operations';
import { useLocation } from 'react-router';

export function Categories() {
  const dispatch = useDispatch();
  const [maxPrice, setMaxPrice] = useState(0);

  const location = useLocation();
  const isShopPage = location.pathname === '/shop' || location.pathname === '/shop/';

  const brands = [
    { label: 'All laptops', brand: null, count: 12 },
    { label: 'Dell', brand: 'Dell', count: 3 },
    { label: 'Asus', brand: 'Asus', count: 1 },
    { label: 'Lenovo', brand: 'Lenovo', count: 1 },
    { label: 'HP', brand: 'HP', count: 1 },
    { label: 'Apple', brand: 'Apple', count: 1 },
    { label: 'MSI', brand: 'MSI', count: 1 },
    { label: 'Razer', brand: 'Razer', count: 1 },
    { label: 'LG', brand: 'LG', count: 1 },
    { label: 'Microsoft', brand: 'Microsoft', count: 1 },
  ];

  const handlePriceChange = price => {
    setMaxPrice(price);
    dispatch(getFilteredProducts({ maxPrice: price }));
  };

  const handleBrandClick = brand => e => {
    e.preventDefault();
    if (!brand) {
      dispatch(getAllProducts());
    } else {
      dispatch(getFilteredProducts({ brand }));
    }
  };

  const handleResetFilters = () => {
    setMaxPrice(0);
    dispatch(getAllProducts());
  };

  return (
    <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
      <button type="button" className="btn btn-outline-secondary w-100 mb-3" onClick={handleResetFilters}>
        Reset filters
      </button>
      <div className="product-categories mb-4">
        <h4>Brands</h4>
        <ul className="list-unstyled">
          {brands.map(item => (
            <li key={item.label}>
              <div className="categories-item d-flex justify-content-between">
                <a href="#" className="text-dark" onClick={handleBrandClick(item.brand)}>
                  <RedAppleIcon className="fa-solid fa-apple-whole" />
                  {item.label}
                </a>
                <span>({item.count})</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      {isShopPage && <Price value={maxPrice} onChange={handlePriceChange} />}

      {/* Additional products (radio) */}
      <AdditionalProds />

      {/* Featured products */}
      <FeaturedProds />

      {/* Sidebar banner */}
      <Banner />
    </div>
  );
}
