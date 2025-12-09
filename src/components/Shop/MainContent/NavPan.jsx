import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts, getFilteredProducts } from '../../../Redux/Products/operations';

export function NavPan() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSearch = e => {
    e.preventDefault();

    const term = search.trim();
    if (!term) {
      dispatch(getAllProducts());
      return;
    }

    dispatch(getFilteredProducts({ brand: term }));
  };

  return (
    <div className="row g-4 mb-3">
      {/* Search field */}
      <div className="col-xl-7">
        <div className="input-group w-100 mx-auto d-flex">
          <form className="input-group w-100 mx-auto d-flex" onSubmit={handleSearch}>
            <input
              type="search"
              className="form-control p-3"
              placeholder="Brand (e.g. Dell, Asus)"
              aria-describedby="search-icon-1"
              value={search}
              onChange={handleChange}
            />
            <button id="search-icon-1" className="input-group-text p-3" type="submit" aria-label="Search by brand">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Sort */}
      <div className="col-xl-3 text-end">
        <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between align-items-center">
          <label htmlFor="electronics" className="me-2 mb-0">
            Sort By:
          </label>
          <select
            id="electronics"
            name="electronicslist"
            className="border-0 form-select-sm bg-light me-3"
            defaultValue="volvo"
          >
            <option value="volvo">Default Sorting</option>
            <option value="audio">Low to high</option>
            <option value="audi">High to low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
