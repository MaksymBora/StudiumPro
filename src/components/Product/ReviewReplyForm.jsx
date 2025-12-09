import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addReviewReply } from '../../Redux/Products/operations';
import { selectIsAuthenticated } from '../../Redux/Auth/selector';
import { toast } from 'react-toastify';

export function ReviewReplyForm({ parentReviewId, onSuccess }) {
  const dispatch = useDispatch();
  const { id: productId } = useParams();

  const isAuthenticated = useSelector(selectIsAuthenticated);

  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const submitReply = e => {
    e.preventDefault();

    if (!isAuthenticated) {
      toast.info('To reply, you need to log in to your account.');
      return;
    }

    if (!text.trim()) {
      alert('Write a reply message.');
      return;
    }

    setLoading(true);

    dispatch(addReviewReply({ productId, parentReviewId, comment: text.trim() }))
      .unwrap()
      .then(() => {
        toast.success('Your reply has been posted.');
        setText('');
        setIsOpen(false);
      })
      .catch(errorMessage => {
        toast.error(errorMessage);
      });
  };

  return (
    <form onSubmit={submitReply} className="mt-2">
      <textarea
        className="form-control mb-2"
        rows="3"
        placeholder="Write a reply…"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button type="submit" className="btn btn-primary btn-sm" disabled={loading}>
        {loading ? 'Sending…' : 'Reply'}
      </button>
    </form>
  );
}
