// src/components/Carousel/Carousel.jsx
import { Link } from 'react-router';
import carousel1 from '../../assets/img/carousel-1.png';
import headerImg from '../../assets/img/header-img.jpg';

export function Carousel() {
  return (
    <div className="container-fluid carousel bg-light px-0">
      <div className="row g-0 justify-content-end">
        <div className="col-12 col-lg-7 col-xl-9">
          <div className="bg-light py-5">
            <div className="row g-0 header-carousel-item align-items-center">
              <div className="col-xl-6 carousel-img">
                <img src={carousel1} className="img-fluid w-100" alt="Promo laptops and smartphones" />
              </div>
              <div className="col-xl-6 carousel-content p-4">
                <h4 className="text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>
                  Save Up To A $400
                </h4>
                <h1 className="display-3 text-capitalize mb-4">On Selected Laptops &amp; Desktop</h1>
                <p className="text-dark">Terms and Condition Apply</p>

                <Link to="/shop" className="btn btn-primary rounded-pill py-3 px-5">
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-5 col-xl-3">
          <div className="carousel-header-banner h-100">
            <img src={headerImg} className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} alt="Special Offer" />
            <div className="carousel-banner-offer">
              <p className="text-primary fs-5 fw-bold mb-0">Special Offer</p>
            </div>
            <div className="carousel-banner">
              <div className="carousel-banner-content text-center p-4">
                <a href="#" className="d-block mb-2">
                  SmartPhone
                </a>
                <a href="#" className="d-block text-white fs-3">
                  Apple iPad Mini <br /> G2356
                </a>
                <del className="me-2 text-white fs-5">$1,250.00</del>
                <span className="text-primary fs-5">$1,050.00</span>
              </div>
              <a href="#" className="btn btn-primary rounded-pill py-2 px-4">
                <i className="fas fa-shopping-cart me-2" /> Add To Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
