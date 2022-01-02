import React from 'react';

const FilterButton = props => {
    return (
        <button type="button"
                className="btn toggle-btn"
                aria-pressed="true">
            <span className="visual-hidden">Show</span>
            <span> all</span>
            <span className="visual-hidden"> tasks</span>
        </button>
    );
};

export default FilterButton;