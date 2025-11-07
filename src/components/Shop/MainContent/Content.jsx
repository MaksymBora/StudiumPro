import { Pagination } from './Pagination';
import { ProductCard } from '../ProductCard';
import prod1 from '../../../assets/img/product-3.png';
import prod2 from '../../../assets/img/product-4.png';
import prod3 from '../../../assets/img/product-5.png';

export function Content() {
  const products = [
    {
      img: prod1,
      title: 'SmartPhone',
      subtitle: 'Apple iPad G2356',
      price: 1050,
      oldPrice: 1250,
      rating: 4,
      to: '/product/1',
    },
    {
      img: prod2,
      title: 'Smart Camera',
      subtitle: 'GoPro X12',
      price: 299,
      oldPrice: 411,
      rating: 5,
      to: '/product/2',
    },
    {
      img: prod3,
      title: 'Camera Lens',
      subtitle: 'Canon 50mm f/1.8',
      price: 199,
      oldPrice: 249,
      rating: 3,
      to: '/product/3',
    },
  ];
  return (
    <div className="tab-content">
      <div id="tab-5" className="tab-pane fade show p-0 active">
        <div className="row g-4 product">
          {products.map(p => (
            <ProductCard
              key={p.to}
              {...p}
              onAddToCart={() => console.log('Add to cart:', p.title)}
              onWishlist={() => console.log('Wishlist:', p.title)}
            />
          ))}
          <Pagination total={6} onChange={p => console.log('current page:', p)} />
        </div>
      </div>
    </div>
  );
}
