export function Price({ value, onChange }) {
  const handleChange = e => {
    const newValue = Number(e.target.value);
    onChange?.(newValue);
  };

  return (
    <div className="price mb-4">
      <h4 className="mb-2">Price</h4>
      <input
        type="range"
        className="form-range w-100 red-300"
        min="0"
        max="5000"
        value={value}
        onChange={handleChange}
      />
      <output className="fw-semibold">{value}</output>
    </div>
  );
}
