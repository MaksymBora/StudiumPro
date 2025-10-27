import prod3 from '../../../assets/img/product-3.png';
import prod4 from '../../../assets/img/product-4.png';
import prod5 from '../../../assets/img/product-5.png';

export function FeaturedProds() {
  const featuredProducts = [
    { img: prod3, title: 'SmartPhone', price: '2.99 $', oldPrice: '4.11 $', rating: 4 },
    { img: prod4, title: 'Smart Camera', price: '2.99 $', oldPrice: '4.11 $', rating: 5 },
    { img: prod5, title: 'Camera Lens', price: '2.99 $', oldPrice: '4.11 $', rating: 3 },
  ];

  const maxStars = 5;

  return (
    <div className="featured-product mb-4">
      <h4 className="mb-3">Featured products</h4>

      {featuredProducts.map(product => (
        <div key={product.title} className="featured-product-item d-flex align-items-center mb-3">
          <div className="rounded me-4" style={{ width: 100, height: 100 }}>
            <img
              src={product.img}
              alt={product.title}
              className="img-fluid rounded w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div>
            <h6 className="mb-2">{product.title}</h6>

            {/* Stars */}
            <div className="d-flex mb-2">
              {Array.from({ length: maxStars }, (_, i) => (
                <i
                  key={i}
                  className="fa fa-star"
                  style={{
                    color: i < product.rating ? '#f92400' : '#919191',
                  }}
                ></i>
              ))}
            </div>

            {/* Price */}
            <div className="d-flex mb-2">
              <h5 className="fw-bold me-2 mb-0">{product.price}</h5>
              <h5 className="text-danger text-decoration-line-through mb-0">{product.oldPrice}</h5>
            </div>
          </div>
        </div>
      ))}

      <div className="d-flex justify-content-center my-4">
        <a href="#" className="btn btn-primary px-4 py-3 rounded-pill w-100">
          View More
        </a>
      </div>
    </div>
  );
}
