import React from 'react';

const FilterButton = props => {
  return (
    <button type="button"
            className="w3-btn w3-black w3-hover-red"
            aria-pressed="true">
      <span className="visual-hidden">Show</span>
      <span> all</span>
      <span className="visual-hidden"> tasks</span>
    </button>
  );
};

export default FilterButton;