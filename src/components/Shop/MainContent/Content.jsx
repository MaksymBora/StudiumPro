import { useEffect } from 'react';
import { Pagination } from './Pagination';
import { ProductCard } from '../ProductCard';
import prod1 from '../../../assets/img/product-3.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProducts,
  selectProductsLoading,
  selectProductsError,
  selectProductsPage,
  selectProductsTotalPages,
  selectProductsFilter,
} from '../../../Redux/Products/selector';
import { getAllProducts, getFilteredProducts } from '../../../Redux/Products/operations';

export function Content() {
  const dispatch = useDispatch();

  const items = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  const page = useSelector(selectProductsPage);
  const totalPages = useSelector(selectProductsTotalPages);
  const { brand, sort } = useSelector(selectProductsFilter);

  useEffect(() => {
    dispatch(getAllProducts({ page: 1, pageSize: 12 }));
  }, [dispatch]);

  if (loading) {
    return <div className="py-5 text-center">Loading…</div>;
  }

  if (error) {
    return <div className="py-5 text-center text-danger">Error: {String(error)}</div>;
  }

  const products = items || [];

  const handlePageChange = newPage => {
    if (brand || sort) {
      dispatch(getFilteredProducts({ brand, sort, page: newPage, pageSize: 12 }));
    } else {
      dispatch(getAllProducts({ page: newPage, pageSize: 12 }));
    }
  };

  return (
    <div className="tab-content">
      <div id="tab-5" className="tab-pane fade show p-0 active">
        <div className="row g-4 product">
          {products.map(p => {
            const ratingValue = p.averageRating != null ? Math.round(Number(p.averageRating)) : 0;

            return (
              <ProductCard
                key={p.productId}
                img={prod1}
                title={p.name}
                subtitle={`${p.brand} • ${p.screenSize}"`}
                price={p.price}
                oldPrice={Math.round(p.price * 1.2)}
                rating={ratingValue}
                to={`/product/${p.productId}`}
                onAddToCart={() => console.log('Add to cart:', p.name)}
                onWishlist={() => console.log('Wishlist:', p.name)}
              />
            );
          })}

          <Pagination current={page} total={totalPages} onChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
}
