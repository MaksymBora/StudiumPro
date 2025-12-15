import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getFilteredProducts } from '../../../Redux/Products/operations';
import { selectProductsFilter } from '../../../Redux/Products/selector';

export function NavPan() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const { brand, sort } = useSelector(selectProductsFilter);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSearch = e => {
    e.preventDefault();

    const term = search.trim();
    if (!term) {
      dispatch(getAllProducts({ page: 1, pageSize: 12 }));
      return;
    }

    dispatch(getFilteredProducts({ brand: term, sort: null, page: 1, pageSize: 12 }));
  };

  const handleSortChange = e => {
    const value = e.target.value;

    let sortParam = null;
    if (value === 'rating_asc') sortParam = 'rating_asc';
    if (value === 'rating_desc') sortParam = 'rating_desc';

    const currentBrand = search.trim() || brand || '';

    if (!currentBrand && !sortParam) {
      dispatch(getAllProducts({ page: 1, pageSize: 12 }));
      return;
    }

    dispatch(
      getFilteredProducts({
        brand: currentBrand,
        sort: sortParam,
        page: 1,
        pageSize: 12,
      })
    );
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
      <div className="col-xl-5 text-end">
        <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between align-items-center">
          <label htmlFor="electronics" className="me-2 mb-0">
            Sort By:
          </label>
          <select
            id="electronics"
            name="electronicslist"
            className="border-0 form-select-sm bg-light me-3"
            defaultValue=""
            onChange={handleSortChange}
          >
            <option value="">Default Sorting</option>
            <option value="rating_asc">Rating: low to high</option>
            <option value="rating_desc">Rating: high to low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
