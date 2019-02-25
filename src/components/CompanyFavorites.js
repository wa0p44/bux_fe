import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as companyActionCreators from '../actionCreators/companyActionCreators';

class CompanyFavorites extends Component {
  render() {
    const {
      company,
      favorites,
      clearCompanySearchTerm,
      fetchCompanyDetails,
      fetchCompanyPrice,
      clearCompanyFavorites
    } = this.props;

    return (
      <div className="mb-3">
        <h2>Favorites</h2>
        {favorites && favorites.length > 0 ? (
          <div>
            <ul className="list-inline">
              <li className="list-inline-item mb-2">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={clearCompanyFavorites}
                >
                  Clear all
                </button>
              </li>
              {favorites.map(symbol => (
                <li key={symbol} className="list-inline-item mb-2">
                  <button
                    type="button"
                    className={
                      company && symbol === company.symbol
                        ? 'btn btn-primary'
                        : 'btn btn-secondary'
                    }
                    onClick={() => {
                      clearCompanySearchTerm();
                      fetchCompanyDetails(symbol);
                      fetchCompanyPrice(symbol);
                    }}
                  >
                    {symbol}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Your list of favorites is currently empty.</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ company }) => {
  return {
    company: company.details,
    favorites: company.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearCompanySearchTerm: () =>
      dispatch(companyActionCreators.clearCompanySearchTerm()),
    fetchCompanyDetails: symbol =>
      dispatch(companyActionCreators.fetchCompanyDetails(symbol)),
    fetchCompanyPrice: symbol =>
      dispatch(companyActionCreators.fetchCompanyPrice(symbol)),
    clearCompanyFavorites: () =>
      dispatch(companyActionCreators.clearCompanyFavorites())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyFavorites);
