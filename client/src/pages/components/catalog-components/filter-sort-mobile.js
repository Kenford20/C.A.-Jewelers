import React from 'react';

const FilterSortMobile = () => {
    return ( 
        <div id="filter-sort-mobile">
            {/* <div className="list-group panel"> */}
            <div className="text-center">
                <div href="#sort-filter" data-toggle="collapse" data-parent="#sort-filter" id="filter-dropdown-mobile">
                Sort & Filter <i className="fa fa-chevron-down chevron-small"></i></div>
            </div>
                <div className="collapse" id="sort-filter">
                    <a href="#sort-mobile" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#sort-mobile">
                    Sort <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                        <div className="collapse" id="sort-mobile">
                            <a href="" className="list-group-item no-border">Best Sellers</a>
                            <a href="" className="list-group-item no-border">Price: Low to High</a>
                            <a href="" className="list-group-item no-border">Price: High to Low</a>
                        </div>
                    <a href="#style-filter-mobile" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#style-filter-mobile">
                    Style <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                        <div className="collapse" id="style-filter-mobile">
                            <a href="#SubMenu1" className="list-group-item" data-toggle="collapse" data-parent="#SubMenu1">Subitem 1 <i className="fa fa-caret-down"></i></a>
                            <a href="javascript:;" className="list-group-item">Subitem 2</a>
                            <a href="javascript:;" className="list-group-item">Subitem 3</a>
                        </div>
                    <a href="#metal-filter-mobile" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#metal-filter-mobile">
                    Metal <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                        <div className="collapse" id="metal-filter-mobile">
                            <a href="" className="list-group-item no-border">Subitem 1</a>
                            <a href="" className="list-group-item no-border">Subitem 2</a>
                            <a href="" className="list-group-item no-border">Subitem 3</a>
                        </div>
                    <a href="#gemstone-filter-mobile" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#gemstone-filter-mobile">
                    Gemstone <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                        <div className="collapse" id="gemstone-filter-mobile">
                            <a href="" className="list-group-item no-border">Subitem 1</a>
                            <a href="" className="list-group-item no-border">Subitem 2</a>
                            <a href="" className="list-group-item no-border">Subitem 3</a>
                        </div>
                    <a href="#price-filter-mobile" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#price-filter-mobile">
                    Price Range <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                        <div className="collapse" id="price-filter-mobile">
                            <a href="" className="list-group-item no-border">Subitem 1</a>
                            <a href="" className="list-group-item no-border">Subitem 2</a>
                            <a href="" className="list-group-item no-border">Subitem 3</a>
                        </div>
                </div>
        </div>
     );
}
 
export default FilterSortMobile;