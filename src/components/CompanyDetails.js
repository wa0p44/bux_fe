import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from './Loader';
import Company from './Company';
import * as companyActionCreators from '../actionCreators/companyActionCreators';

class CompanyDetails extends Component {
  render() {
    const {
      company,
      loadingDetails,
      loadingDetailsError,
      price,
      loadingPrice,
      loadingPriceError,
      favorites,
      addCompanyToFavorites,
      removeCompanyFromFavorites
    } = this.props;

    let companyDetailsContent = null;
    if (loadingDetails) {
      companyDetailsContent = (
        <div className="text-center">
          <Loader size="5" />
        </div>
      );
    }
    if (company && !loadingDetails) {
      companyDetailsContent = (
        <Company
          company={company}
          price={price}
          loadingPrice={loadingPrice}
          loadingPriceError={loadingPriceError}
          favorites={favorites}
          addCompanyToFavorites={addCompanyToFavorites}
          removeCompanyFromFavorites={removeCompanyFromFavorites}
        />
      );
    }
    if (loadingDetailsError && !loadingDetails) {
      companyDetailsContent = (
        <div className="alert alert-danger">
          <h4 className="alert-heading">Error</h4>
          {loadingDetailsError.status} {loadingDetailsError.data}
        </div>
      );
    }

    return <div>{companyDetailsContent}</div>;
  }
}

const mapStateToProps = ({ company }) => {
  return {
    company: company.details,
    loadingDetails: company.loadingDetails,
    loadingDetailsError: company.loadingDetailsError,
    price: company.price,
    loadingPrice: company.loadingPrice,
    loadingPriceError: company.loadingPriceError,
    favorites: company.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCompanyToFavorites: symbol =>
      dispatch(companyActionCreators.addCompanyToFavorites(symbol)),
    removeCompanyFromFavorites: symbol =>
      dispatch(companyActionCreators.removeCompanyFromFavorites(symbol))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyDetails);
