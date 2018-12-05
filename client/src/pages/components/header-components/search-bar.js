import React from 'react';

const SearchBar = (props) => {
    return ( 
        <div>
            <div id="search-bar" className={'container-fluid bg-light' + (props.active ? '' : ' hide')}>
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
        </div>
    );

}
 
export default SearchBar;