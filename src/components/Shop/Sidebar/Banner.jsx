import banner2 from '../../../assets/img/product-banner-2.png';

export function Banner() {
  return (
    <a href="#" className="text-decoration-none">
      <div className="position-relative">
        <img src={banner2} className="img-fluid w-100 rounded" alt="Sale banner" />
        <div
          className="text-center position-absolute d-flex flex-column align-items-center justify-content-center rounded p-4"
          style={{ width: '100%', height: '100%', top: 0, right: 0, background: 'rgba(242, 139, 0, 0.3)' }}
        >
          <h5 className="display-6 text-primary mb-1">SALE</h5>
          <h4 className="text-secondary mb-3">Get UP To 50% Off</h4>
          <span className="btn btn-primary rounded-pill px-4">Shop Now</span>
        </div>
      </div>
    </a>
  );
}
