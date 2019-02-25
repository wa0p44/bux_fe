import axios from 'axios';

import * as actionTypes from './actionTypes';

export function changeCompanySearchTerm(searchTerm) {
  return { type: actionTypes.CHANGE_COMPANY_SEARCH_TERM, searchTerm };
}

export function clearCompanySearchTerm() {
  return { type: actionTypes.CLEAR_COMPANY_SEARCH_TERM };
}

export function loadCompanyDetailsStart() {
  return { type: actionTypes.LOAD_COMPANY_DETAILS_START };
}

export function loadCompanyDetailsSuccess(company) {
  return { type: actionTypes.LOAD_COMPANY_DETAILS_SUCCESS, company };
}

export function loadCompanyDetailsFailed(error) {
  return { type: actionTypes.LOAD_COMPANY_DETAILS_FAILED, error };
}

export function fetchCompanyDetails(symbol) {
  return dispatch => {
    dispatch(loadCompanyDetailsStart());
    axios
      .get(`https://api.iextrading.com/1.0/stock/${symbol}/company`)
      .then(response => {
        dispatch(loadCompanyDetailsSuccess(response.data));
      })
      .catch(error => {
        dispatch(loadCompanyDetailsFailed(error.response));
      });
  };
}

export function loadCompanyPriceStart() {
  return { type: actionTypes.LOAD_COMPANY_PRICE_START };
}

export function loadCompanyPriceSuccess(price) {
  return { type: actionTypes.LOAD_COMPANY_PRICE_SUCCESS, price };
}

export function loadCompanyPriceFailed(error) {
  return { type: actionTypes.LOAD_COMPANY_PRICE_FAILED, error };
}

export function fetchCompanyPrice(symbol) {
  return dispatch => {
    dispatch(loadCompanyPriceStart());
    axios
      .get(`https://api.iextrading.com/1.0/stock/${symbol}/price`)
      .then(response => {
        dispatch(loadCompanyPriceSuccess(response.data));
      })
      .catch(error => {
        dispatch(loadCompanyPriceFailed(error.response));
      });
  };
}

export function addCompanyToFavorites(symbol) {
  return { type: actionTypes.ADD_COMPANY_TO_FAVORITES, symbol };
}

export function removeCompanyFromFavorites(symbol) {
  return { type: actionTypes.REMOVE_COMPANY_FROM_FAVORITES, symbol };
}

export function clearCompanyFavorites() {
  return { type: actionTypes.CLEAR_COMPANY_FAVORITES };
}
