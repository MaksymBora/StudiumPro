import camImg from '../../assets/img/product-1.png';
import watchImg from '../../assets/img/product-2.png';

export function ProductOffer() {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <a
              href="#"
              className="d-flex align-items-center justify-content-between border bg-white rounded p-4 text-decoration-none"
            >
              <div>
                <p className="text-muted mb-3">Find the Best Gaming Laptops!</p>
                <h3 className="text-primary">Gaming Laptop</h3>
                <h1 className="display-3 text-secondary mb-0">
                  40% <span className="text-primary fw-normal">Off</span>
                </h1>
              </div>
              <img src={camImg} className="img-fluid" alt="Smart Camera" style={{ maxHeight: '120px' }} />
            </a>
          </div>

          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
            <a
              href="#"
              className="d-flex align-items-center justify-content-between border bg-white rounded p-4 text-decoration-none"
            >
              <div>
                <p className="text-muted mb-3">Find the Best Ultrabooks for Work!</p>
                <h3 className="text-primary">Ultrabook</h3>
                <h1 className="display-3 text-secondary mb-0">
                  20% <span className="text-primary fw-normal">Off</span>
                </h1>
              </div>
              <img src={watchImg} className="img-fluid" alt="Smart Watch" style={{ maxHeight: '120px' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
