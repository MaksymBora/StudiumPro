// src/components/SingleProduct/Reviews.jsx
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import avatar from '../../assets/img/avatar.jpg';
import { addReviewReply } from '../../Redux/Products/operations';
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
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { id: productId } = useParams();

  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');

  const hasChildren = Array.isArray(review.children) && review.children.length > 0;

  const handleAnswerClick = () => {
    if (!isAuthenticated) {
      alert('To reply, you need to log in to your account.');
      return;
    }
    setShowReplyForm(prev => !prev);
  };

  const handleReplySubmit = e => {
    e.preventDefault();

    if (!isAuthenticated) {
      alert('To reply, you need to log in to your account.');
      return;
    }

    if (!replyText.trim()) {
      alert('Please enter a reply text.');
      return;
    }

    dispatch(
      addReviewReply({
        productId,
        parentReviewId: review.reviewId,
        comment: replyText.trim(),
      })
    )
      .unwrap()
      .then(() => {
        setReplyText('');
        setShowReplyForm(false);
      })
      .catch(err => {
        alert(err);
      });
  };

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
      <div className={isChild ? 'small w-100' : 'w-100'}>
        <p className="mb-1 text-muted" style={{ fontSize: isChild ? 12 : 14 }}>
          {formatDate(review.createdAtUtc)}
        </p>
        <div className="d-flex justify-content-between align-items-center mb-1">
          <h5 className={`mb-0 ${isChild ? 'fs-6' : ''}`}>{review.userName}</h5>
        </div>

        <p className="mb-2 text-dark">
          {review.comment && review.comment.trim().length > 0 ? (
            review.comment
          ) : (
            <span className="text-muted fst-italic">No comment provided.</span>
          )}
        </p>

        <div className="mb-2">
          <button type="button" className="btn btn-link btn-sm p-0" onClick={handleAnswerClick}>
            Answer
          </button>
        </div>

        {showReplyForm && (
          <form onSubmit={handleReplySubmit} className="mb-3">
            <div className="mb-2">
              <textarea
                className="form-control form-control-sm"
                rows="3"
                placeholder="Your reply *"
                value={replyText}
                onChange={e => setReplyText(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-sm border border-secondary text-white rounded-pill px-3 py-1"
            >
              Send reply
            </button>
          </form>
        )}

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
