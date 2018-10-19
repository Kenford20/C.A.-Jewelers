import React from 'react';

const FilterSortMobile = () => {
    return ( 
        <div id="filter-sort-mobile">
            {/* <div class="list-group panel"> */}
            <div class="text-center">
                <div href="#sort-filter" data-toggle="collapse" data-parent="#sort-filter" id="filter-dropdown-mobile">
                Sort & Filter <i class="fa fa-chevron-down chevron-small"></i></div>
            </div>
                <div class="collapse" id="sort-filter">
                    <a href="#sort-mobile" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#sort-mobile">
                    Sort <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                        <div class="collapse" id="sort-mobile">
                            <a href="" class="list-group-item no-border">Best Sellers</a>
                            <a href="" class="list-group-item no-border">Price: Low to High</a>
                            <a href="" class="list-group-item no-border">Price: High to Low</a>
                        </div>
                    <a href="#style-filter-mobile" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#style-filter-mobile">
                    Style <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                        <div class="collapse" id="style-filter-mobile">
                            <a href="#SubMenu1" class="list-group-item" data-toggle="collapse" data-parent="#SubMenu1">Subitem 1 <i class="fa fa-caret-down"></i></a>
                            <a href="javascript:;" class="list-group-item">Subitem 2</a>
                            <a href="javascript:;" class="list-group-item">Subitem 3</a>
                        </div>
                    <a href="#metal-filter-mobile" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#metal-filter-mobile">
                    Metal <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                        <div class="collapse" id="metal-filter-mobile">
                            <a href="" class="list-group-item no-border">Subitem 1</a>
                            <a href="" class="list-group-item no-border">Subitem 2</a>
                            <a href="" class="list-group-item no-border">Subitem 3</a>
                        </div>
                    <a href="#gemstone-filter-mobile" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#gemstone-filter-mobile">
                    Gemstone <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                        <div class="collapse" id="gemstone-filter-mobile">
                            <a href="" class="list-group-item no-border">Subitem 1</a>
                            <a href="" class="list-group-item no-border">Subitem 2</a>
                            <a href="" class="list-group-item no-border">Subitem 3</a>
                        </div>
                    <a href="#price-filter-mobile" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#price-filter-mobile">
                    Price Range <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                        <div class="collapse" id="price-filter-mobile">
                            <a href="" class="list-group-item no-border">Subitem 1</a>
                            <a href="" class="list-group-item no-border">Subitem 2</a>
                            <a href="" class="list-group-item no-border">Subitem 3</a>
                        </div>
                </div>
        </div>
     );
}
 
export default FilterSortMobile;