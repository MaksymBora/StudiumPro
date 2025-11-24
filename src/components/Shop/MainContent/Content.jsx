import React, { useState, useEffect } from 'react';
import { Pagination } from './Pagination';
import { ProductCard } from '../ProductCard';
import prod1 from '../../../assets/img/product-3.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, selectProductsLoading, selectProductsError } from '../../../Redux/Products/selector';
import { getAllProducts } from '../../../Redux/Products/operations';

export function Content() {
  const dispatch = useDispatch();
  const items = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (loading) {
    return <div className="py-5 text-center">Loading…</div>;
  }

  if (error) {
    return <div className="py-5 text-center text-danger">Error: {String(error)}</div>;
  }

  const products = items || [];
  console.log('Products from API:', products);

  return (
    <div className="tab-content">
      <div id="tab-5" className="tab-pane fade show p-0 active">
        <div className="row g-4 product">
          {products.map(p => (
            <ProductCard
              key={p.productId}
              img={prod1}
              title={p.name}
              subtitle={`${p.brand} • ${p.screenSize}"`}
              price={p.price}
              oldPrice={Math.round(p.price * 1.2)}
              rating={4}
              to={`/product/${p.productId}`}
              onAddToCart={() => console.log('Add to cart:', p.name)}
              onWishlist={() => console.log('Wishlist:', p.name)}
            />
          ))}

          <Pagination total={5} onChange={page => console.log('current page:', page)} />
        </div>
      </div>
    </div>
  );
}
