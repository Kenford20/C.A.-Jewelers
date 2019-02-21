import React from 'react';

class FilterSortMobile extends React.Component {
    render(){
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
                            <h6 className="list-group-item filter-options" onClick={ this.props.sortProducts }>Best Sellers</h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.sortProducts }>Price: Low to High</h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.sortProducts }>Price: High to Low</h6>
                        </div>
                        <a href="#style-filter-mobile" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="style-filter-mobile">
                    Style <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                        <div className="collapse" id="style-filter-mobile">
                            {/* <a href="#SubMenu1" className="list-group-item filter-options" data-toggle="collapse" data-parent="#SubMenu1">Subitem 1 <i className="fa fa-caret-down"></i></a> */}
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>Halo</h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>Solitaire</h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>Three Stone</h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>Vintage</h6>
                        </div>
                    <a href="#shape-filter-mobile" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#shape-filter-mobile">
                    Shape <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                        <div className="collapse" id="shape-filter-mobile">
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>Round</h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>Princess</h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>Emerald</h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>Oval</h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>Cushion</h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>Marquise</h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>Pear</h6>
                        </div>
                    <a href="#metal-filter-mobile" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#metal-filter-mobile">
                    Metal <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                        <div className="collapse" id="metal-filter-mobile">
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>Gold</h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>Rose Gold</h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>White Gold</h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>Platinum</h6>
                        </div>
                    <a href="#price-filter-mobile" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#price-filter-mobile">
                    Price Range <div className="chevron-container"><i className="fa fa-chevron-down chevron-small"></i></div></a>
                        <div className="collapse" id="price-filter-mobile">
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>$ 500 or less</h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>$ 501 - 1000 </h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>$ 1001 - 3000</h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>$ 3001 - 5000</h6>
                            <h6 className="list-group-item filter-options" onClick={ this.props.updateFilters }>$ 5000 or more</h6>
                        </div>
                    <div id="reset-filters" onClick={ this.props.resetFilters }>RESET</div>
            </div>
        </div>
     );
    }
}
 
export default FilterSortMobile;