import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from '../Shop/Sidebar/Sidebar';
import { selectProducts, selectProductsLoading, selectProductsError } from '../../Redux/Products/selector';
import { getAllProducts } from '../../Redux/Products/operations';
import { ProductInfo } from './ProductInfo';
import { ProductTabs } from './ProductTabs';
import { ProductGallery } from './ProductGallery';
import { ReviewForm } from './ReviewForm';

export function SingleProductContentWrapper() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const items = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (!items || items.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch, items]);

  if (loading) {
    return <div className="py-5 text-center">Loading product…</div>;
  }

  if (error) {
    return <div className="py-5 text-center text-danger">Error loading product: {String(error)}</div>;
  }

  const product = items?.find(p => p.productId === id);

  if (!product) {
    return (
      <div className="container py-5">
        <h3>Product not found</h3>
        <p className="text-muted">Maybe you followed an outdated link.</p>
      </div>
    );
  }

  const ratingValue = product.averageRating != null ? Math.round(Number(product.averageRating)) : 0;

  const handleMinus = () => setQty(prev => (prev > 1 ? prev - 1 : 1));
  const handlePlus = () => setQty(prev => prev + 1);

  return (
    <div className="container-fluid shop py-5 bg-white">
      <div className="container py-5">
        <div className="row g-4">
          <Sidebar />
          <div className="col-lg-9 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-4 single-product">
              <ProductGallery product={product} />
              <ProductInfo
                product={product}
                ratingValue={ratingValue}
                qty={qty}
                onMinus={handleMinus}
                onPlus={handlePlus}
              />
              <ProductTabs product={product} activeTab={activeTab} setActiveTab={setActiveTab} />
              <ReviewForm productId={product.productId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
