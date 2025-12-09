export function Pagination({ current = 1, total = 1, onChange }) {
  const handleClick = num => {
    if (num === current) return;
    onChange?.(num);
  };

  const prevPage = () => {
    if (current > 1) handleClick(current - 1);
  };

  const nextPage = () => {
    if (current < total) handleClick(current + 1);
  };

  return (
    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
      <div className="pagination d-flex justify-content-center mt-5 flex-wrap gap-2">
        <button className="btn btn-light border-0 rounded px-3" onClick={prevPage} disabled={current === 1}>
          &laquo;
        </button>

        {Array.from({ length: total }, (_, i) => i + 1).map(num => (
          <button
            key={num}
            onClick={() => handleClick(num)}
            className={`btn rounded px-3 ${
              num === current ? 'btn-primary text-white' : 'btn-outline-primary border-0 bg-light'
            }`}
          >
            {num}
          </button>
        ))}

        <button className="btn btn-light border-0 rounded px-3" onClick={nextPage} disabled={current === total}>
          &raquo;
        </button>
      </div>
    </div>
  );
}
