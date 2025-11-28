// src/components/SingleProduct/Reviews.jsx
import avatar from '../../assets/img/avatar.jpg';

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
  const hasChildren = Array.isArray(review.children) && review.children.length > 0;

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
          {/* если потом появится рейтинг у review — можно здесь вызвать renderStars(review.rating) */}
        </div>

        <p className="mb-2 text-dark">
          {review.comment && review.comment.trim().length > 0 ? (
            review.comment
          ) : (
            <span className="text-muted fst-italic">No comment provided.</span>
          )}
        </p>

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
