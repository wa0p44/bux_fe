import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as companyActionCreators from '../actionCreators/companyActionCreators';

class Search extends Component {
  timeoutId = null;

  handleCompanySearchTermChange = event => {
    event.preventDefault();

    const {
      changeCompanySearchTerm,
      fetchCompanyDetails,
      fetchCompanyPrice
    } = this.props;
    const searchTerm = event.target.value;

    changeCompanySearchTerm(searchTerm);

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    if (searchTerm) {
      this.timeoutId = setTimeout(() => {
        fetchCompanyDetails(searchTerm);
        fetchCompanyPrice(searchTerm);
      }, 500);
    }
  };

  render() {
    const { stateSearchTerm } = this.props;
    return (
      <div id="search" className="form-row mb-3">
        <div className="form-group col-md-4">
          <input
            className="form-control"
            id="search-company"
            type="text"
            onChange={this.handleCompanySearchTermChange}
            value={stateSearchTerm}
            placeholder="Company symbol"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ company }) => {
  return {
    stateSearchTerm: company.searchTerm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCompanySearchTerm: searchTerm =>
      dispatch(companyActionCreators.changeCompanySearchTerm(searchTerm)),
    fetchCompanyDetails: searchTerm =>
      dispatch(companyActionCreators.fetchCompanyDetails(searchTerm)),
    fetchCompanyPrice: searchTerm =>
      dispatch(companyActionCreators.fetchCompanyPrice(searchTerm))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
