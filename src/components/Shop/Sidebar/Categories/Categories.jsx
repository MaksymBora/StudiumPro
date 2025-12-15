import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import { RedAppleIcon } from './categories.styled';
import { Price } from '../Price/Price';
import { AdditionalProds } from '../AdditionalProds';
import { FeaturedProds } from '../FeaturedProds';
import { Banner } from '../Banner';
import { getAllProducts, getFilteredProducts } from '../../../../Redux/Products/operations';
import { useLocation } from 'react-router';

import { selectProducts } from '../../../../Redux/Products/selector';

export function Categories() {
  const dispatch = useDispatch();
  const items = useSelector(selectProducts) || [];
  const [maxPrice, setMaxPrice] = useState(0);

  const location = useLocation();
  const isShopPage = location.pathname === '/shop' || location.pathname === '/shop/';

  const brandCounts = useMemo(() => {
    const map = new Map();

    for (const p of items) {
      const brand = (p.brand || '').trim();
      if (!brand) continue;
      map.set(brand, (map.get(brand) || 0) + 1);
    }

    return map;
  }, [items]);

  const brands = useMemo(() => {
    const list = [{ label: 'All laptops', brand: null, count: items.length }];

    const sortedBrands = Array.from(brandCounts.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [brand, count] of sortedBrands) {
      list.push({ label: brand, brand, count });
    }

    return list;
  }, [items.length, brandCounts]);

  const handlePriceChange = price => {
    setMaxPrice(price);
    dispatch(getFilteredProducts({ maxPrice: price, page: 1 }));
  };

  const handleBrandClick = brand => e => {
    e.preventDefault();

    setMaxPrice(0);

    if (!brand) {
      dispatch(getAllProducts({ page: 1 }));
    } else {
      dispatch(getFilteredProducts({ brand, page: 1 }));
    }
  };

  const handleResetFilters = () => {
    setMaxPrice(0);
    dispatch(getAllProducts({ page: 1 }));
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

      {isShopPage && <Price value={maxPrice} onChange={handlePriceChange} />}

      <AdditionalProds />
      <FeaturedProds />
      <Banner />
    </div>
  );
}
