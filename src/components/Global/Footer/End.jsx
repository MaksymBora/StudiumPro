export function End() {
  return (
    <div className="container-fluid copyright py-4" style={{ background: '#F28B00' }}>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 text-center text-md-start mb-md-0">
            <span className="text-white">
              <a href="#" className="border-bottom text-white text-decoration-none">
                <i className="fas fa-copyright text-light me-2" />
                LopTopShop
              </a>
              , All rights reserved.
            </span>
          </div>

          <div className="col-md-6 text-center text-md-end text-white">
            Designed By
            <a
              className="border-bottom text-white text-decoration-none"
              href="https://htmlcodex.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML Codex.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
