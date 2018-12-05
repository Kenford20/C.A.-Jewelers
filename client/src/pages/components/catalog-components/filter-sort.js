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
                {/* <div className="list-group panel"> */}
                {/* <a href="#" className="list-group-item list-group-item-success" data-parent="#MainMenu">Item 1</a>
                <a href="#" className="list-group-item list-group-item-success" data-parent="#MainMenu">Item 2</a> */}
                <a href="#style-filter" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#style-filter">
                Style <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                    <div className="collapse" id="style-filter">
                        <a href="#SubMenu1" className="list-group-item no-border" data-toggle="collapse" data-parent="#SubMenu1">Subitem 1 <i className="fa fa-caret-down"></i></a>
                        <a href="javascript:;" className="list-group-item no-border">Subitem 2</a>
                        <a href="javascript:;" className="list-group-item no-border">Subitem 3</a>
                    </div>
                <a href="#metal-filter" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#metal-filter">
                Metal <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                    <div className="collapse" id="metal-filter">
                        <a href="" className="list-group-item no-border">Subitem 1</a>
                        <a href="" className="list-group-item no-border">Subitem 2</a>
                        <a href="" className="list-group-item no-border">Subitem 3</a>
                    </div>
                <a href="#gemstone-filter" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#gemstone-filter">
                Gemstone <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                    <div className="collapse" id="gemstone-filter">
                        <a href="" className="list-group-item no-border">Subitem 1</a>
                        <a href="" className="list-group-item no-border">Subitem 2</a>
                        <a href="" className="list-group-item no-border">Subitem 3</a>
                    </div>
                <a href="#price-filter" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#price-filter">
                Price Range <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                    <div className="collapse" id="price-filter">
                        <a href="" className="list-group-item no-border">Subitem 1</a>
                        <a href="" className="list-group-item no-border">Subitem 2</a>
                        <a href="" className="list-group-item no-border">Subitem 3</a>
                    </div>
            </div>
              

         );
    }
}
 
export default FilterSort;