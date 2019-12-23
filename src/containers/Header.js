import React, { Component } from 'react';
import ToggleButton from '../components/ToggleButton/ToggleButtonComponent';
import LogoComponent from '../components/Logo/LogoComponent';
import SearchInputComponent from '../components/SearchInput/SearchInputComponent';
import NavComponent from '../components/Nav/NavigationComponent';
import SidebarContext from '../context/SidebarContext';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.searchInputRef = React.createRef();
  }

  componentDidMount() {
  }

    onToggleSidebar = (e) => {
      e.preventDefault();
      const { toggleSidebar } = this.context;
      toggleSidebar();
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { onSearchFormSubmit } = this.props;
      onSearchFormSubmit(this.searchInputRef.current.value);
    }

    // eslint-disable-next-line react/static-property-placement
    static contextType = SidebarContext;

    render() {
      return (
        <header className="rickmrty-header">
          <ToggleButton onToggleSidebar={this.onToggleSidebar} />
          <LogoComponent />
          <SearchInputComponent
            handleSubmit={this.handleSubmit}
            searchInputRef={this.searchInputRef}
          />
          <NavComponent />
        </header>
      );
    }
}

export default Header;
// Header.contextType = SidebarContext;
