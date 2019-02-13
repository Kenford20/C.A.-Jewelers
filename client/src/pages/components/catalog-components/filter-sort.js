import React, { Component } from 'react';
import '../../styles/catalog-styles/filter-sort.css';

class FilterSort extends Component {
    render() { 
        return ( 
            <div id="filter-sort">
                <a href="#style-filter" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#style-filter">
                Style <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                    <div className="collapse" id="style-filter">
                        {/* <a href="#SubMenu1" className="list-group-item no-border" data-toggle="collapse" data-parent="#SubMenu1">Subitem 1 <i className="fa fa-caret-down"></i></a> */}
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>Halo</h6>
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>Solitaire</h6>
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>Three Stone</h6>
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>Vintage</h6>
                    </div>
                <a href="#shape-filter" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#shape-filter">
                Shape <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                    <div className="collapse" id="shape-filter">
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>Round</h6>
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>Princess</h6>
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>Emerald</h6>
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>Oval</h6>
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>Cushion</h6>
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>Marquise</h6>
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>Pear</h6>
                    </div>
                <a href="#metal-filter" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#metal-filter">
                Metal <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                    <div className="collapse" id="metal-filter">
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>Gold</h6>
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>Rose Gold</h6>
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>White Gold</h6>
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>Platinum</h6>
                    </div>
                <a href="#price-filter" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#price-filter">
                Price Range <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                    <div className="collapse" id="price-filter">
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>$ 500 or less</h6>
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>$ 501 - 1000 </h6>
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>$ 1001 - 3000</h6>
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>$ 3001 - 5000</h6>
                        <h6 className="list-group-item no-border" onClick={ this.props.updateFilters }>$ 5000 or more</h6>
                    </div>
            </div>
         );
    }
}
 
export default FilterSort;