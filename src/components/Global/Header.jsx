import { Link, useLocation } from 'react-router-dom';
import { Hero } from './Hero';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../Redux/Auth/selector';

export function Header() {
  const location = useLocation();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const heroConfig = (() => {
    const path = location.pathname;

    switch (path) {
      case '/':
        return {
          title: 'Welcome to LapTop Store',
          crumbs: [{ label: 'Home', active: true }],
        };

      case '/shop':
        return {
          title: 'Our Products',
          crumbs: [
            { label: 'Home', to: '/' },
            { label: 'Shop', active: true },
          ],
        };

      case '/contacts':
        return {
          title: 'Contact Us',
          crumbs: [{ label: 'Home', to: '/' }, { label: 'Pages' }, { label: 'Contact', active: true }],
        };

      case '/account':
        return {
          title: 'My Account – Add Laptop',
          crumbs: [
            { label: 'Home', to: '/' },
            { label: 'My Account', active: true },
          ],
        };

      default:
        return null;
    }
  })();

  return (
    <>
      <div className="container-fluid nav-bar p-0" style={{ background: '#F28B00' }}>
        <div className="row gx-0 px-5 align-items-center">
          {/* Left side All Categories (desktop) */}
          <div className="col-lg-3 d-none d-lg-block">
            <nav className="navbar navbar-light position-relative" style={{ width: '250px' }}>
              <button
                className="navbar-toggler border-0 fs-4 w-100 px-0 text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#allCat"
              ></button>

              <div className="collapse navbar-collapse rounded-bottom" id="allCat">
                <div className="navbar-nav ms-auto py-0">
                  <ul className="list-unstyled categories-bars">
                    <li>
                      <div className="categories-bars-item">
                        <a href="#">Accessories</a>
                        <span>(3)</span>
                      </div>
                    </li>
                    <li>
                      <div className="categories-bars-item">
                        <a href="#">Electronics &amp; Computer</a>
                        <span>(5)</span>
                      </div>
                    </li>
                    <li>
                      <div className="categories-bars-item">
                        <a href="#">Laptops &amp; Desktops</a>
                        <span>(2)</span>
                      </div>
                    </li>
                    <li>
                      <div className="categories-bars-item">
                        <a href="#">Mobiles &amp; Tablets</a>
                        <span>(8)</span>
                      </div>
                    </li>
                    <li>
                      <div className="categories-bars-item">
                        <a href="#">SmartPhone &amp; Smart TV</a>
                        <span>(5)</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          {/* Right side - common menu */}
          <div className="col-12 col-lg-9">
            <nav className="navbar navbar-expand-lg navbar-light ">
              {/* Brand for mobile */}
              <Link to="/" className="navbar-brand d-block d-lg-none">
                <h1 className="display-5 text-secondary m-0">
                  <i className="fas fa-shopping-bag text-white me-2" />
                  Electro
                </h1>
              </Link>

              {/* Burger */}
              <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="fa fa-bars fa-1x" />
              </button>

              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                  <Link to="/" className="nav-item nav-link">
                    Home
                  </Link>
                  <Link to="/shop" className="nav-item nav-link">
                    Shop
                  </Link>
                  <Link to="/contacts" className="nav-item nav-link me-2">
                    Contact
                  </Link>
                  {isAuthenticated && (
                    <Link to="/account" className="nav-item nav-link me-2">
                      My Account
                    </Link>
                  )}

                  {/* All Category for mobile */}
                  <div className="nav-item dropdown d-block d-lg-none mb-3">
                    <a href="#" className="nav-link" data-bs-toggle="dropdown">
                      <span className="dropdown-toggle">All Category</span>
                    </a>
                    <div className="dropdown-menu m-0">
                      <ul className="list-unstyled categories-bars">
                        <li>
                          <div className="categories-bars-item">
                            <a href="#">Accessories</a>
                            <span>(3)</span>
                          </div>
                        </li>
                        <li>
                          <div className="categories-bars-item">
                            <a href="#">Electronics &amp; Computer</a>
                            <span>(5)</span>
                          </div>
                        </li>
                        <li>
                          <div className="categories-bars-item">
                            <a href="#">Laptops &amp; Desktops</a>
                            <span>(2)</span>
                          </div>
                        </li>
                        <li>
                          <div className="categories-bars-item">
                            <a href="#">Mobiles &amp; Tablets</a>
                            <span>(8)</span>
                          </div>
                        </li>
                        <li>
                          <div className="categories-bars-item">
                            <a href="#">SmartPhone &amp; Smart TV</a>
                            <span>(5)</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+01234567890"
                  className="btn rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0"
                  style={{ background: '#F92400' }}
                >
                  <i className="fa fa-mobile-alt me-2" />
                  +0123 456 7890
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {heroConfig && <Hero title={heroConfig.title} crumbs={heroConfig.crumbs} />}
    </>
  );
}
