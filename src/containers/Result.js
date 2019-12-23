import React, { Component } from 'react';
import Card from '../components/Card/CardComponent';
import SidebarContext from '../context/SidebarContext';
import SearchInputComponent from '../components/SearchInput/SearchInputComponent';
import Dropdown from '../components/Dropdown/DropdownComponent';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainClasses: ['rickmrty-main'],
      result: undefined,
    };
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    this.setState({ result: nextProps.result });
  }

    // sidebar-hidden
    onItemClick = (e) => {
      const value = e.currentTarget.innerText;
      const { result } = this.state;
      if (value === 'Ascending') {
        result.results.sort((a, b) => a.id - b.id);
      } else {
        result.results.sort((a, b) => b.id - a.id);
      }

      this.setState({ result });
    }

    // eslint-disable-next-line react/static-property-placement
    static contextType = SidebarContext;


    render() {
      let { mainClasses } = this.state;
      const { result } = this.state;
      const { isVisible } = this.context;
      if (isVisible) {
        mainClasses = ['rickmrty-main'];
      } else {
        mainClasses = ['rickmrty-main', 'sidebar-hidden'];
      }
      return (
        <main className={mainClasses.join(' ')}>
          <div className="main-search">
            <SearchInputComponent />
          </div>
          <section className="search-results">
            {(result && result.results)
              ? (
                <div className="container-fluid">
                  <div className="row">
                    <header className="main-header">
                      <h2 className="main-title">THE RICK AND MORTY</h2>
                      <Dropdown id="sortDropdown" label="Sort by Id" items={['Ascending', 'Descending']} onItemClick={this.onItemClick} />
                    </header>
                    {
                                    (result.results).map((item, index) => (
                                      // eslint-disable-next-line react/no-array-index-key
                                      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-3" key={index}>
                                        <Card data={item} />
                                      </div>
                                    ))
                                }
                  </div>
                </div>
              ) : (
                <div className="error-msg">
                  <p>No result found</p>
                </div>
              )}
          </section>
        </main>
      );
    }
}

export default Result;
