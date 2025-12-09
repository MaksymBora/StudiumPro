import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProductRating } from '../../Redux/Products/operations';
import { selectIsAuthenticated } from '../../Redux/Auth/selector';
import { toast } from 'react-toastify';

export function ReviewForm() {
  const dispatch = useDispatch();
  const { id: productId } = useParams();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  const currentRating = hoverRating || selectedRating;

  const handleStarClick = value => {
    if (!isAuthenticated) {
      toast.info('To give a rating, you need to log into your account.');
      return;
    }
    setSelectedRating(value);
  };

  const handleReviewSubmit = e => {
    e.preventDefault();

    if (!isAuthenticated) {
      toast.info('To submit a rating, you need to log in to your account.');
      return;
    }

    if (!selectedRating) {
      toast.warning('Please select a rating from 1 to 5.');
      return;
    }

    if (!comment.trim()) {
      toast.warning('Please write a review comment.');
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
        toast.success('Thank you! Your rating and comment have been saved.');
        setSelectedRating(0);
        setHoverRating(0);
        setComment('');
      })
      .catch(errorMessage => {
        toast.error(errorMessage);
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
              className={`fa fa-star ${value <= currentRating ? 'text-warning' : 'text-muted'}`}
              style={{ cursor: 'pointer', marginRight: 4 }}
              onClick={() => handleStarClick(value)}
              onMouseEnter={() => isAuthenticated && setHoverRating(value)}
              onMouseLeave={() => setHoverRating(0)}
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
              placeholder="Your Review *"
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
