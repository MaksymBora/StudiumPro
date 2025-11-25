import { Link } from 'react-router-dom';

export function TopBar() {
  return (
    <div className="container-fluid px-5 d-none d-lg-block border-bottom">
      <div className="row gx-0 align-items-center">
        {/* Left links */}
        <div className="col-lg-4 text-center text-lg-start mb-lg-0">
          <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
            <Link to="/help" className="text-muted me-2">
              Help
            </Link>
            <small>/</small>
            <Link to="/support" className="text-muted mx-2">
              Support
            </Link>
            <small>/</small>
            <Link to="/contact" className="text-muted ms-2">
              Contact
            </Link>
          </div>
        </div>

        {/* Center phone */}
        <div className="col-lg-4 text-center d-flex align-items-center justify-content-center">
          <small className="text-dark me-1">Call Us:</small>
          <a href="tel:+01231234567890" className="text-muted">
            (+012) 1234 567890
          </a>
        </div>

        {/* Right dropdowns */}
        <div className="col-lg-4 text-center text-lg-end">
          <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
            {/* Currency */}
            <div className="dropdown me-2">
              <a href="#" className="dropdown-toggle text-muted" data-bs-toggle="dropdown" role="button">
                <small>USD</small>
              </a>
              <div className="dropdown-menu rounded">
                <a href="#" className="dropdown-item">
                  Euro
                </a>
              </div>
            </div>

            {/* Language */}
            <div className="dropdown mx-2">
              <a href="#" className="dropdown-toggle text-muted" data-bs-toggle="dropdown" role="button">
                <small>English</small>
              </a>
              <div className="dropdown-menu rounded">
                <a href="#" className="dropdown-item">
                  English
                </a>
                <a href="#" className="dropdown-item">
                  Turkish
                </a>
                <a href="#" className="dropdown-item">
                  Spanish
                </a>
                <a href="#" className="dropdown-item">
                  Italiano
                </a>
              </div>
            </div>

            {/* Dashboard */}
            <div className="dropdown ms-2">
              <a href="#" className="dropdown-toggle text-muted" data-bs-toggle="dropdown" role="button">
                <small>
                  <i className="fa fa-home me-2" />
                  My Dashboard
                </small>
              </a>

              <div className="dropdown-menu rounded">
                <Link to="/login" className="dropdown-item">
                  Login
                </Link>
                <Link to="/signin" className="dropdown-item">
                  SignIn
                </Link>
                <Link to="/" className="dropdown-item">
                  Wishlist
                </Link>
                <Link to="/account" className="dropdown-item">
                  My Account
                </Link>
                <Link to="/logout" className="dropdown-item">
                  Log Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
