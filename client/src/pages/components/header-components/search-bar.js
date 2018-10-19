import React from 'react';

const SearchBar = (props) => {
    return ( 
        <div>
            <div id="search-bar" class={'container-fluid bg-light' + (props.active ? '' : ' hide')}>
                <div class="row">
                    <div class="col-md-6">
                        <div id="custom-search-input">
                            <div class="input-group col-md-12">
                                <input type="text" class="form-control input-md" placeholder="Search the store" />
                                <span class="input-group-btn">
                                <button class="btn btn-info btn-md" type="button">
                                    <a href="#"><i class="fas fa-search"></i></a>
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