import { useState } from 'react';

export function Price() {
  const [price, setPrice] = useState(0);

  return (
    <div className="price mb-4">
      <h4 className="mb-2">Price</h4>
      <input
        type="range"
        className="form-range w-100 red-300"
        min="0"
        max="500"
        value={price}
        onChange={e => setPrice(Number(e.target.value))}
      />
      <output className="fw-semibold">{price}</output>
    </div>
  );
}
