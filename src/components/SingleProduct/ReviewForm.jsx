// src/components/SingleProduct/ReviewForm.jsx
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProductRating } from '../../Redux/Products/operations';
import { selectIsAuthenticated } from '../../Redux/Auth/selector';

export function ReviewForm() {
  const dispatch = useDispatch();
  const { id: productId } = useParams();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const [selectedRating, setSelectedRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleStarClick = value => {
    if (!isAuthenticated) {
      alert('To give a rating, you need to log into your account.');
      return;
    }
    setSelectedRating(value);
  };

  const handleReviewSubmit = e => {
    e.preventDefault();

    if (!isAuthenticated) {
      alert('To submit a rating, you need to log in to your account.');
      return;
    }

    if (!selectedRating) {
      alert('Please give a rating from 1 to 5.');
      return;
    }

    dispatch(
      addProductRating({
        productId,
        rating: selectedRating,
        comment: comment.trim(),
      })
    )
      .unwrap()
      .then(() => {
        alert('Thank you! The rating has been saved.');
        setSelectedRating(0);
        setComment('');
      })
      .catch(errorMessage => {
        alert(errorMessage);
      });
  };

  return (
    <form onSubmit={handleReviewSubmit}>
      <h4 className="mb-4 fw-bold">Leave a Reply</h4>

      <div className="d-flex align-items-center mb-4">
        <p className="mb-0 me-3">Please rate:</p>
        <div className="d-flex align-items-center" style={{ fontSize: 18 }}>
          {[1, 2, 3, 4, 5].map(value => (
            <i
              key={value}
              className={`fa fa-star ${value <= selectedRating ? 'text-warning' : 'text-muted'}`}
              style={{ cursor: 'pointer', marginRight: 4 }}
              onClick={() => handleStarClick(value)}
              onMouseEnter={() => isAuthenticated && setSelectedRating(value)}
              onMouseLeave={() => {}}
            />
          ))}
        </div>
        <button
          type="submit"
          className="btn btn-primary border border-secondary text-white rounded-pill px-4 py-2 ms-3"
        >
          Post Rating
        </button>
      </div>

      <div className="row g-4">
        <div className="col-lg-12">
          <div className="border-bottom rounded my-4">
            <textarea
              className="form-control border-0"
              cols="30"
              rows="5"
              placeholder="Your Review (optional)"
              spellCheck="false"
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
