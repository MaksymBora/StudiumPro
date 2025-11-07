import banner from '../../../assets/img/product-banner-3.jpg';

export function MainBanner() {
  return (
    <div className="rounded mb-4 position-relative">
      <img
        src={banner}
        className="img-fluid rounded w-100"
        style={{ height: '250px', objectFit: 'cover' }}
        alt="Sale Banner"
      />
      <div
        className="position-absolute rounded d-flex flex-column align-items-center justify-content-center text-center"
        style={{
          width: '100%',
          height: '250px',
          top: 0,
          left: 0,
          background: 'rgba(242, 139, 0, 0.3)',
        }}
      >
        <h4 className="display-5 text-primary">SALE</h4>
        <h3 className="display-4 text-white mb-4">Get UP To 50% Off</h3>
        <a href="#" className="btn btn-primary rounded-pill">
          Shop Now
        </a>
      </div>
    </div>
  );
}
