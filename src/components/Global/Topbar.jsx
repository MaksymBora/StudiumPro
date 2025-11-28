import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated } from '../../Redux/Auth/selector';
import { logout } from '../../Redux/Auth/authSlice';

export function TopBar() {
  const isAuth = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="container-fluid px-5 d-none d-lg-block border-bottom">
      <div className="row gx-0 align-items-center">
        {/* Left links */}
        <div className="col-lg-4 text-center text-lg-start mb-lg-0">
          <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
            {!isAuth && (
              <>
                <Link to="/" className="text-muted me-2">
                  Home
                </Link>
                <small>/</small>

                <Link to="/" className="text-muted mx-2">
                  Support
                </Link>
                <small>/</small>

                <Link to="/contacts" className="text-muted ms-2">
                  Contact
                </Link>
              </>
            )}

            {isAuth && (
              <Link to="/account" className="text-muted fw-semibold">
                <i className="fa fa-user me-2"></i>
                My Account
              </Link>
            )}
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
              <a href="#" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
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
              <a href="#" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
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
              <a href="#" className="dropdown-toggle text-muted" data-bs-toggle="dropdown">
                <small>
                  <i className="fa fa-home me-2" /> My Dashboard
                </small>
              </a>

              <div className="dropdown-menu rounded">
                {!isAuth && (
                  <>
                    <Link to="/login" className="dropdown-item">
                      Login
                    </Link>
                    <Link to="/signin" className="dropdown-item">
                      SignIn
                    </Link>
                  </>
                )}

                {isAuth && (
                  <>
                    <Link to="/account" className="dropdown-item">
                      My Account
                    </Link>
                    <button className="dropdown-item text-danger" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                      Log Out
                    </button>
                  </>
                )}

                <Link to="/" className="dropdown-item">
                  Wishlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
