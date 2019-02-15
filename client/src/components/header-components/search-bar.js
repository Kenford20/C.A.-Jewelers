import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ isActive }) => {
    return ( 
        <div id="search-bar" className={'container-fluid bg-light' + (isActive ? '' : ' hide')}>
            <div className="row">
                <div className="col-md-6">
                    <div id="custom-search-input">
                        <div className="input-group col-md-12">
                            <input type="text" className="form-control input-md" placeholder="Search the store" />
                            <span className="input-group-btn">
                            <button className="btn btn-info btn-md" type="button">
                                <a href="#"><i className="fas fa-search"></i></a>
                            </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
SearchBar.propTypes = {
    isActive: PropTypes.bool
};

export default SearchBar;