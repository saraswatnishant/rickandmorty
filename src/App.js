import React, { Component } from 'react';
import './assets/styles/App.scss';
import querystring from 'querystring';
import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import Result from './containers/Result';
import SidebarContext from './context/SidebarContext';
import axiosInstance from './config/axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarContext: {
        isVisible: true,
        toggleSidebar: this.toggleSidebar,
      },
      result: {},
      applyFilters: {},
      filterPayload: '',
      searchPayload: '',
    };
  }

  componentDidMount() {
    this.getData();
  }

  toggleSidebar = () => {
    const { sidebarContext } = this.state;
    sidebarContext.isVisible = !sidebarContext.isVisible;
    this.setState({ sidebarContext });
  }

  getData = () => {
    axiosInstance.get(`/character/?${this.getPayload() || ''}`).then((response) => {
      const result = { ...response.data, status: 'success' };
      this.setState({ result });
    },
    (error) => {
      const result = { ...error.response.data.error, status: 'error' };
      this.setState({ result });
    });
  }

  onSearchFormSubmit = (searchInputValue) => {
    const payload = {
      name: searchInputValue,
    };
    this.setState({ searchPayload: querystring.stringify(payload) }, () => {
      this.getData();
    });
  }

  onFilterSelect =(filter) => {
    const { applyFilters } = this.state;
    if (filter.value !== 'Any') {
      applyFilters[filter.type.toLowerCase()] = filter.value;
      this.setState({ applyFilters, filterPayload: querystring.stringify(applyFilters) }, () => {
        this.getData();
      });
    } else {
      delete applyFilters[filter.type.toLowerCase()];

      this.setState({ applyFilters, filterPayload: querystring.stringify(applyFilters) }, () => {
        this.getData();
      });
    }
  }

  // eslint-disable-next-line consistent-return
  getPayload = () => {
    const { searchPayload, filterPayload } = this.state;
    if (searchPayload && filterPayload) {
      return `${searchPayload}&${filterPayload}`;
    } if (searchPayload) {
      return searchPayload;
    } if (filterPayload) {
      return filterPayload;
    }
  }

  clearFilter = () => {
    const rootElement = document.querySelector('#filters');
    const radioButton = rootElement.querySelectorAll('input[type="radio"]:checked');
    if (radioButton.length > 0) {
      radioButton.forEach((element) => {
        // eslint-disable-next-line no-param-reassign
        element.checked = false;
      });
    }
  }

  render() {
    const { sidebarContext, result } = this.state;
    return (
      <SidebarContext.Provider value={sidebarContext}>
        <div className="App">
          <Header onSearchFormSubmit={this.onSearchFormSubmit} />
          <Sidebar onFilterSelect={this.onFilterSelect} clearFilter={this.clearFilter} />
          <Result result={result} />
        </div>
      </SidebarContext.Provider>
    );
  }
}

export default App;
