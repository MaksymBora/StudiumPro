import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from '../Shop/Sidebar/Sidebar';
import { selectProducts, selectProductsLoading, selectProductsError } from '../../Redux/Products/selector';
import { getAllProducts } from '../../Redux/Products/operations';

import prod4 from '../../assets/img/product-4.png';
import prod5 from '../../assets/img/product-5.png';
import prod6 from '../../assets/img/product-6.png';
import prod7 from '../../assets/img/product-7.png';
import prod3 from '../../assets/img/product-3.png';
import avatar from '../../assets/img/avatar.jpg';

const STAR_ACTIVE = 'text-secondary';
const STAR_INACTIVE = '';

export function SingleProductContentWrapper() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const items = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (!items || items.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch, items]);

  if (loading) {
    return <div className="py-5 text-center">Loading product…</div>;
  }

  if (error) {
    return <div className="py-5 text-center text-danger">Error loading product: {String(error)}</div>;
  }

  const product = items?.find(p => p.productId === id);

  if (!product) {
    return (
      <div className="container py-5">
        <h3>Product not found</h3>
        <p className="text-muted">Maybe you followed an outdated link.</p>
      </div>
    );
  }

  const images = [prod4, prod5, prod6, prod7, prod3];

  const handleMinus = () => setQty(prev => (prev > 1 ? prev - 1 : 1));
  const handlePlus = () => setQty(prev => prev + 1);

  const renderStars = value =>
    Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`fa fa-star ${i < value ? STAR_ACTIVE : STAR_INACTIVE}`} />
    ));

  const ratingValue = product.averageRating != null ? Math.round(Number(product.averageRating)) : 0;

  const handleReviewSubmit = e => {
    e.preventDefault();
    console.log('Submit review (TODO): productId =', product.productId);
  };

  return (
    <div className="container-fluid shop py-5 bg-white">
      <div className="container py-5">
        <div className="row g-4">
          <Sidebar />

          <div className="col-lg-9 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-4 single-product">
              {/* LEFT: images */}
              <div className="col-xl-6">
                <div className="bg-light rounded mb-3">
                  <img src={images[0]} className="img-fluid rounded w-100" alt={product.name} />
                </div>

                <div className="d-flex gap-2">
                  {images.map((img, idx) => (
                    <div key={idx} className="single-inner bg-light rounded" style={{ width: 80 }}>
                      <img src={img} className="img-fluid rounded" alt={`${product.name} thumbnail ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: info */}
              <div className="col-xl-6">
                <h4 className="fw-bold mb-3">{product.name}</h4>
                <p className="mb-1">
                  Brand: <strong>{product.brand}</strong>
                </p>
                <p className="mb-3">Category: Electronics</p>

                <h5 className="fw-bold mb-3">
                  {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </h5>

                <div className="d-flex mb-1">{renderStars(ratingValue)}</div>
                <small className="text-muted mb-4 d-block">
                  Rating: {ratingValue}/5{' '}
                  {product.averageRating != null && `(${product.averageRating.toFixed?.(1) ?? product.averageRating})`}
                </small>

                <div className="mb-3">
                  <button className="btn btn-primary d-inline-block rounded text-white py-1 px-4 me-2">
                    <i className="fab fa-facebook-f me-1" /> Share
                  </button>
                  <button className="btn btn-primary d-inline-block rounded text-white py-1 px-4 ms-2">
                    <i className="fab fa-twitter me-1" /> Share
                  </button>
                </div>

                <div className="d-flex flex-column mb-3">
                  <small>Product SKU: N/A</small>
                  <small>
                    Available: <strong className="text-primary">20 items in stock</strong>
                  </small>
                  {product.screenSize && <small>Screen size: {product.screenSize}"</small>}
                </div>

                <p className="mb-4">{product.description}</p>

                <div className="input-group quantity mb-5" style={{ width: '120px' }}>
                  <button
                    type="button"
                    className="btn btn-sm btn-minus rounded-circle bg-light border"
                    onClick={handleMinus}
                  >
                    <i className="fa fa-minus" />
                  </button>
                  <input
                    type="text"
                    className="form-control form-control-sm text-center border-0"
                    value={qty}
                    readOnly
                  />
                  <button
                    type="button"
                    className="btn btn-sm btn-plus rounded-circle bg-light border"
                    onClick={handlePlus}
                  >
                    <i className="fa fa-plus" />
                  </button>
                </div>

                <button
                  type="button"
                  className="btn btn-primary border border-secondary rounded-pill px-4 py-2 mb-4 text-white"
                  onClick={() => console.log('Add to cart', product.productId, 'qty', qty)}
                >
                  <i className="fa fa-shopping-bag me-2 " /> Add to cart
                </button>
              </div>

              {/* TABS */}
              <div className="col-lg-12">
                <nav>
                  <div className="nav nav-tabs mb-3">
                    <button
                      type="button"
                      className={`nav-link border-white border-bottom-0 ${activeTab === 'description' ? 'active' : ''}`}
                      onClick={() => setActiveTab('description')}
                    >
                      Description
                    </button>
                    <button
                      type="button"
                      className={`nav-link border-white border-bottom-0 ${activeTab === 'reviews' ? 'active' : ''}`}
                      onClick={() => setActiveTab('reviews')}
                    >
                      Reviews
                    </button>
                  </div>
                </nav>

                <div className="tab-content mb-5">
                  {activeTab === 'description' && (
                    <div className="tab-pane active">
                      <p>
                        Our new <b className="fw-bold">{product.name}</b> is a modern laptop from{' '}
                        <b className="fw-bold">{product.brand}</b> with screen size {product.screenSize}".
                      </p>
                      <p className="small mb-0">
                        {product.description || 'No detailed description provided for this product yet.'}
                      </p>
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="tab-pane">
                      {/* Dummy reviews */}
                      <div className="d-flex mb-4">
                        <img
                          src={avatar}
                          className="img-fluid rounded-circle p-3"
                          style={{ width: '100px', height: '100px' }}
                          alt="Reviewer avatar"
                        />
                        <div>
                          <p className="mb-2" style={{ fontSize: 14 }}>
                            April 12, 2024
                          </p>
                          <div className="d-flex justify-content-between">
                            <h5>Jason Smith</h5>
                            <div className="d-flex mb-3">{renderStars(4)}</div>
                          </div>
                          <p>
                            Great laptop, does exactly what I need. Battery life is solid and performance is stable.
                          </p>
                        </div>
                      </div>

                      <div className="d-flex">
                        <img
                          src={avatar}
                          className="img-fluid rounded-circle p-3"
                          style={{ width: '100px', height: '100px' }}
                          alt="Reviewer avatar"
                        />
                        <div>
                          <p className="mb-2" style={{ fontSize: 14 }}>
                            May 5, 2024
                          </p>
                          <div className="d-flex justify-content-between">
                            <h5>Sam Peters</h5>
                            <div className="d-flex mb-3">{renderStars(3)}</div>
                          </div>
                          <p className="text-dark">
                            Good device overall, but I wish the fans were a bit quieter under load.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* REVIEW FORM */}
              <form onSubmit={handleReviewSubmit}>
                <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="border-bottom rounded">
                      <input type="text" className="form-control border-0 me-4" placeholder="Your Name *" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="border-bottom rounded">
                      <input type="email" className="form-control border-0" placeholder="Your Email *" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="border-bottom rounded my-4">
                      <textarea
                        className="form-control border-0"
                        cols="30"
                        rows="8"
                        placeholder="Your Review *"
                        spellCheck="false"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="d-flex justify-content-between py-3 mb-5">
                      <div className="d-flex align-items-center">
                        <p className="mb-0 me-3">Please rate:</p>
                        <div className="d-flex align-items-center" style={{ fontSize: 12 }}>
                          <i className="fa fa-star text-muted" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary border border-secondary text-white rounded-pill px-4 py-3"
                      >
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
