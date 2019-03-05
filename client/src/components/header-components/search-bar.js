import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/header-styles/search-bar.css';

const SearchBar = ({ isActive }) => {
    return ( 
        <div id="search-bar" className={'container-fluid bg-light' + (isActive ? '' : ' hide')}>
            <div id="custom-search-input">
                <div className="input-group">
                    <input type="text" className="form-control input-md" placeholder="Search the store" />
                    <span className="input-group-btn">
                    <button className="btn btn-info btn-md" type="button">
                        <i className="fas fa-search"></i>
                    </button>
                    </span>
                </div>
            </div>
        </div> 
    );
}
 
SearchBar.propTypes = {
    isActive: PropTypes.bool
};

export default SearchBar;