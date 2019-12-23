/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable max-len */
import React, { Component } from 'react';
import FilterComponent from '../components/Filter/FilterComponent';
import SidebarContext from '../context/SidebarContext';

const filters = [
  {
    title: 'Species',
    types: ['Human', 'Humanoid', 'Animal', 'Alien', 'Vampire', 'Any'],
  },
  {
    title: 'Gender',
    types: ['Male', 'Female', 'Genderless', 'Any'],
  },
  {
    title: 'Status',
    types: ['Alive', 'Dead', 'Any'],
  },
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asideClasses: ['rickmrty-sidebar'],
    };
  }

    onFilterSelect = (e) => {
      // e.preventDefault();
      if (e.target.type === 'radio') {
        const filter = {};
        filter.type = e.target.name;
        filter.value = e.target.value;
        const { onFilterSelect } = this.props;
        onFilterSelect(filter);
      }
    }

    // eslint-disable-next-line react/static-property-placement
    static contextType = SidebarContext;


    render() {
      let { asideClasses } = this.state;
      const { isVisible } = this.context;
      const { clearFilter } = this.props;

      if (isVisible) {
        asideClasses = ['rickmrty-sidebar'];
      } else {
        asideClasses = ['rickmrty-sidebar', 'd-none'];
      }

      return (
        <aside className={asideClasses.join(' ')}>
          <div className="filter-title">
            <h2>FILTERS</h2>
            <span role="button" onClick={clearFilter} className="clear-filter">CLEAR ALL </span>
          </div>
          <div className="filter-wrapper" id="filters">
            {
                        filters.map((filter, index) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <React.Fragment key={index}>
                            <div className="dropdown-divider" />
                            <FilterComponent title={filter.title} types={filter.types} onFilterSelect={this.onFilterSelect} />
                          </React.Fragment>
                        ))
                    }
          </div>
        </aside>
      );
    }
}

export default SideBar;
