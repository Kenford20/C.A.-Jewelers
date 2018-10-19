import React, { Component } from 'react';
import '../../styles/catalog-styles/filter-sort.css';

class FilterSort extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="filter-sort">
                {/* <div class="list-group panel"> */}
                {/* <a href="#" class="list-group-item list-group-item-success" data-parent="#MainMenu">Item 1</a>
                <a href="#" class="list-group-item list-group-item-success" data-parent="#MainMenu">Item 2</a> */}
                <a href="#style-filter" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#style-filter">
                Style <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                    <div class="collapse" id="style-filter">
                        <a href="#SubMenu1" class="list-group-item no-border" data-toggle="collapse" data-parent="#SubMenu1">Subitem 1 <i class="fa fa-caret-down"></i></a>
                        <a href="javascript:;" class="list-group-item no-border">Subitem 2</a>
                        <a href="javascript:;" class="list-group-item no-border">Subitem 3</a>
                    </div>
                <a href="#metal-filter" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#metal-filter">
                Metal <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                    <div class="collapse" id="metal-filter">
                        <a href="" class="list-group-item no-border">Subitem 1</a>
                        <a href="" class="list-group-item no-border">Subitem 2</a>
                        <a href="" class="list-group-item no-border">Subitem 3</a>
                    </div>
                <a href="#gemstone-filter" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#gemstone-filter">
                Gemstone <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                    <div class="collapse" id="gemstone-filter">
                        <a href="" class="list-group-item no-border">Subitem 1</a>
                        <a href="" class="list-group-item no-border">Subitem 2</a>
                        <a href="" class="list-group-item no-border">Subitem 3</a>
                    </div>
                <a href="#price-filter" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#price-filter">
                Price Range <div class="chevron-container"><i class="fa fa-chevron-down chevron-small"></i></div></a>
                    <div class="collapse" id="price-filter">
                        <a href="" class="list-group-item no-border">Subitem 1</a>
                        <a href="" class="list-group-item no-border">Subitem 2</a>
                        <a href="" class="list-group-item no-border">Subitem 3</a>
                    </div>
            </div>
              

         );
    }
}
 
export default FilterSort;