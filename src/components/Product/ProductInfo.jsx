const STAR_ACTIVE = 'text-secondary';
const STAR_INACTIVE = '';

function renderStars(value) {
  const rating = Number(value) || 0;

  return Array.from({ length: 5 }, (_, i) => (
    <i key={i} className={`fa fa-star ${i < rating ? STAR_ACTIVE : STAR_INACTIVE}`} />
  ));
}

export function ProductInfo({ product, ratingValue, qty, onMinus, onPlus }) {
  return (
    <div className="col-xl-6">
      <h4 className="fw-bold mb-3">{product.name}</h4>
      <p className="mb-1">
        Brand: <strong>{product.brand}</strong>
      </p>
      <p className="mb-3">Category: Electronics</p>

      <h5 className="fw-bold mb-3">{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h5>

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
        <button type="button" className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={onMinus}>
          <i className="fa fa-minus" />
        </button>
        <input type="text" className="form-control form-control-sm text-center border-0" value={qty} readOnly />
        <button type="button" className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={onPlus}>
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
  );
}
