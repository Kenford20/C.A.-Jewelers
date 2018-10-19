import React, { Component } from 'react';
import HeaderNavbar from './header-components/header-navbar';
import HeaderNavbar2 from './header-components/header-navbar2';
import SearchBar from './header-components/search-bar';

class GlobalHeader extends Component {
    state = {
        showSearchBar: false
    }

    handleSearchBarToggle = (e) => {
        e.preventDefault();
        this.setState({
            showSearchBar: !this.state.showSearchBar
        })
    }

    render() { 
        return ( 
            <div id="global-header">
            <HeaderNavbar onToggle={this.handleSearchBarToggle}/>
            <SearchBar active={this.state.showSearchBar}/>
            <HeaderNavbar2/>  
            
        </div>
         );
    }
}
 
export default GlobalHeader;