// SideBar.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../Components/sidebar.css";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCheckboxChange = (e) => {
    const queryParams = new URLSearchParams(location.search);
    if (e.target.checked) {
      queryParams.append(e.target.name, e.target.value);
    } else {
      const params = queryParams.getAll(e.target.name).filter(val => val !== e.target.value);
      queryParams.delete(e.target.name);
      params.forEach(param => queryParams.append(e.target.name, param));
    }
    navigate({ search: queryParams.toString() });
  };

  return (
    <div className="sidebar">
      <div className='rating'>
        <h3>Filter by Rating</h3>
        {[1, 2, 3, 4, 5].map(rating => (
          <label key={rating}>
            <input
              type="checkbox"
              name="rating"
              value={rating}
              onChange={handleCheckboxChange}
              defaultChecked={new URLSearchParams(location.search).getAll('rating').includes(rating.toString())}
            />
            
            {rating}
          </label>
        ))}
      </div>
      <div>
        <h3>Sort by Year</h3>
        <label>
          <input
            type="radio"
            name="order"
            value="asc"
            onChange={handleCheckboxChange}
            defaultChecked={new URLSearchParams(location.search).get('order') === 'asc'}
          />
          Ascending
          <br />
        </label>

        <label>
          <input
            type="radio"
            name="order"
            value="desc"
            onChange={handleCheckboxChange}
            defaultChecked={new URLSearchParams(location.search).get('order') === 'desc'}
          />
          Descending
        </label>
      </div>
    </div>
  );
};

export default SideBar;
