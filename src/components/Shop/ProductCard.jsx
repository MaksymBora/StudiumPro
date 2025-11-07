// src/components/ProductCard.jsx
import { Link } from 'react-router-dom'; // если используешь роутер
// import { useState } from 'react'; // если захочешь локальные эффекты/hover
// Цвета под твой проект
const STAR_ACTIVE = '#f92400';
const STAR_INACTIVE = '#919191';

export function ProductCard({ img, title, subtitle, price, oldPrice, rating = 4, onAddToCart, onWishlist, to }) {
  const renderStars = value =>
    Array.from({ length: 5 }, (_, i) => (
      <i key={i} className="fas fa-star" style={{ color: i < value ? STAR_ACTIVE : STAR_INACTIVE }} />
    ));

  return (
    <div className="col-lg-4">
      <div className="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
        <div className="product-item-inner border rounded">
          <div className="product-item-inner-item">
            <img src={img} className="img-fluid w-100 rounded-top" alt={title} />
          </div>

          <div className="text-center rounded-bottom p-4">
            {to ? (
              <Link to={to} className="d-block mb-2">
                {title}
              </Link>
            ) : (
              <span className="d-block mb-2">{title}</span>
            )}

            {to ? (
              <Link to={to} className="d-block h4">
                {subtitle}
              </Link>
            ) : (
              <span className="d-block h4">{subtitle}</span>
            )}

            {oldPrice != null && <del className="me-2 fs-5">${Number(oldPrice).toLocaleString()}</del>}
            <span className="text-primary fs-5">${Number(price).toLocaleString()}</span>
          </div>
        </div>

        <div className="product-item-add border border-top-0 rounded-bottom text-center p-4 pt-0">
          <button
            type="button"
            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"
            onClick={onAddToCart}
          >
            <i className="fas fa-shopping-cart me-2" />
            Add To Cart
          </button>

          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">{renderStars(rating)}</div>

            <div className="d-flex">
              <button
                type="button"
                className="text-primary d-flex align-items-center justify-content-center me-0 btn p-0"
                onClick={onWishlist}
                aria-label="Add to wishlist"
              >
                <span
                  className="rounded-circle btn-sm-square border d-inline-flex align-items-center justify-content-center"
                  style={{ width: 32, height: 32 }}
                >
                  <i className="fas fa-heart" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
