import { ProductSpecsBlock } from './ProductSpecsBlock';
import { Reviews } from './Reviews';

const STAR_ACTIVE = 'text-secondary';
const STAR_INACTIVE = '';

function renderStars(value) {
  const rating = Number(value) || 0;

  return Array.from({ length: 5 }, (_, i) => (
    <i key={i} className={`fa fa-star ${i < rating ? STAR_ACTIVE : STAR_INACTIVE}`} />
  ));
}

export function ProductTabs({ product, activeTab, setActiveTab }) {
  return (
    <div className="col-lg-12">
      <nav>
        <div className="nav nav-tabs mb-3">
          <button
            type="button"
            className={`nav-link border-white border-bottom-0 ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            type="button"
            className={`nav-link border-white border-bottom-0 ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </div>
      </nav>

      <div className="tab-content mb-5">
        {/* Description tab */}
        <div className={`tab-pane ${activeTab === 'description' ? 'active' : ''}`}>
          {activeTab === 'description' && (
            <>
              <p>
                Our new <b className="fw-bold">{product.name}</b> is a modern laptop from{' '}
                <b className="fw-bold">{product.brand}</b> with screen size {product.screenSize}".
              </p>

              <p className="small">{product.description || 'No detailed description provided for this product yet.'}</p>

              <ProductSpecsBlock product={product} />
            </>
          )}
        </div>

        {/* Reviews tab */}
        <div className={`tab-pane ${activeTab === 'reviews' ? 'active' : ''}`}>
          {activeTab === 'reviews' && <Reviews reviews={product.reviews || []} renderStars={renderStars} />}
        </div>
      </div>
    </div>
  );
}
