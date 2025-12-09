import { useState } from 'react';

export function Pagination({ total = 6, onChange }) {
  const [page, setPage] = useState(1);

  const handleClick = num => {
    setPage(num);
    onChange?.(num);
  };

  const prevPage = () => {
    if (page > 1) handleClick(page - 1);
  };

  const nextPage = () => {
    if (page < total) handleClick(page + 1);
  };

  return (
    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
      <div className="pagination d-flex justify-content-center mt-5 flex-wrap gap-2">
        <button className="btn btn-light border-0 rounded px-3" onClick={prevPage} disabled={page === 1}>
          &laquo;
        </button>

        {Array.from({ length: total }, (_, i) => i + 1).map(num => (
          <button
            key={num}
            onClick={() => handleClick(num)}
            className={`btn rounded px-3 ${
              num === page ? 'btn-primary text-white' : 'btn-outline-primary border-0 bg-light'
            }`}
          >
            {num}
          </button>
        ))}

        <button className="btn btn-light border-0 rounded px-3" onClick={nextPage} disabled={page === total}>
          &raquo;
        </button>
      </div>
    </div>
  );
}
