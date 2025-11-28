// src/components/SingleProduct/Reviews.jsx
import { useState } from 'react';
import { useSelector } from 'react-redux';
import avatar from '../../assets/img/avatar.jpg';
import { ReviewReplyForm } from './ReviewReplyForm';
import { selectIsAuthenticated } from '../../Redux/Auth/selector';

function formatDate(utcString) {
  if (!utcString) return '';
  const date = new Date(utcString);
  return date.toLocaleString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function ReviewItem({ review, renderStars, isChild = false }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [showReplyForm, setShowReplyForm] = useState(false);

  const hasChildren = Array.isArray(review.children) && review.children.length > 0;

  const toggleReplyForm = () => {
    if (!isAuthenticated) {
      alert('To reply, you need to log in to your account.');
      return;
    }
    setShowReplyForm(prev => !prev);
  };

  const reviewRating = Number.isFinite(review.rating) ? review.rating : null;

  return (
    <div className={`d-flex mb-4 ${isChild ? 'ms-5' : ''}`}>
      <img
        src={avatar}
        className="img-fluid rounded-circle p-3"
        style={{
          width: isChild ? '70px' : '100px',
          height: isChild ? '70px' : '100px',
        }}
        alt={`${review.userName} avatar`}
      />
      <div className={isChild ? 'small' : ''}>
        <p className="mb-1 text-muted" style={{ fontSize: isChild ? 12 : 14 }}>
          {formatDate(review.createdAtUtc)}
        </p>

        <div className="d-flex justify-content-between align-items-center mb-1">
          <h5 className={`mb-0 ${isChild ? 'fs-6' : ''}`}>{review.userName}</h5>

          {/* ⭐ Рейтинг для parent-комментариев */}
          {!isChild && reviewRating != null && (
            <div className="d-flex ms-3" style={{ fontSize: 14 }}>
              {[1, 2, 3, 4, 5].map(value => (
                <i
                  key={value}
                  className={`fa fa-star ${value <= reviewRating ? 'text-danger' : 'text-muted'}`}
                  style={{ marginLeft: 2 }}
                />
              ))}
            </div>
          )}
        </div>

        <p className="mb-2 text-dark">
          {review.comment && review.comment.trim().length > 0 ? (
            review.comment
          ) : (
            <span className="text-muted fst-italic">No comment provided.</span>
          )}
        </p>

        {/* Кнопка Answer только для верхнего уровня */}
        {!isChild && (
          <button type="button" className="btn btn-link btn-sm p-0 mb-2" onClick={toggleReplyForm}>
            Answer
          </button>
        )}

        {/* Форма ответа */}
        {showReplyForm && !isChild && (
          <div className="mt-2">
            <ReviewReplyForm parentReviewId={review.reviewId} onSuccess={() => setShowReplyForm(false)} />
          </div>
        )}

        {/* Дети */}
        {hasChildren && (
          <div className="mt-2">
            {review.children.map(child => (
              <ReviewItem key={child.reviewId} review={child} renderStars={renderStars} isChild={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Reviews({ reviews, renderStars }) {
  if (!reviews || reviews.length === 0) {
    return <p className="text-muted mb-0">No reviews yet. Be the first to leave one!</p>;
  }

  return (
    <>
      {reviews.map(review => (
        <ReviewItem key={review.reviewId} review={review} renderStars={renderStars} isChild={false} />
      ))}
    </>
  );
}
