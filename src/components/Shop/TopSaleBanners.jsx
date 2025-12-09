import banner1 from '../../assets/img/product-banner.jpg';
import banner2 from '../../assets/img/product-banner-2.png';
import { Link } from 'react-router';

export function TopSaleBanners() {
  return (
    <div className="container-fluid py-5 bg-white">
      <div className="container pb-5">
        <div className="row g-4">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
            <div className="rounded position-relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img
                src={banner1}
                className="img-fluid w-100 h-100"
                alt="EOS Rebel T7i Kit"
                style={{ objectFit: 'cover' }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4"
                style={{ background: 'rgba(255, 255, 255, 0.5)' }}
              >
                <h3 className="display-5 text-primary">
                  MSI Stealth <br /> <span>15M Series</span>
                </h3>
                <p className="fs-4 text-muted">1,199.99€</p>
                <Link to="/shop" className="btn btn-primary rounded-pill align-self-start py-2 px-4">
                  {' '}
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
            <div className="text-center rounded position-relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img
                src={banner2}
                className="img-fluid w-100 h-100"
                alt="Big Sale Banner"
                style={{ objectFit: 'cover' }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4"
                style={{ background: 'rgba(242, 139, 0, 0.5)' }}
              >
                <h2 className="display-2 text-secondary">SALE</h2>
                <h4 className="display-5 text-white mb-4">Get UP To 50% Laptops</h4>
                <Link to="/shop" className="btn btn-secondary rounded-pill align-self-center py-2 px-4">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
