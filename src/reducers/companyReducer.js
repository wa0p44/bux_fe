import * as actionTypes from '../actionCreators/actionTypes';
import initialState from './initialState';

export default function companyReducer(state = initialState.company, action) {
  switch (action.type) {
    case actionTypes.CHANGE_COMPANY_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm
      };
    case actionTypes.CLEAR_COMPANY_SEARCH_TERM:
      return {
        ...state,
        searchTerm: ''
      };
    case actionTypes.LOAD_COMPANY_DETAILS_START:
      return {
        ...state,
        loadingDetails: true,
        loadingDetailsError: false
      };
    case actionTypes.LOAD_COMPANY_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.company,
        loadingDetails: false,
        loadingDetailsError: false
      };
    case actionTypes.LOAD_COMPANY_DETAILS_FAILED:
      return {
        ...state,
        loadingDetails: false,
        loadingDetailsError: action.error
      };
    case actionTypes.LOAD_COMPANY_PRICE_START:
      return {
        ...state,
        loadingPrice: true,
        loadingPriceError: false
      };
    case actionTypes.LOAD_COMPANY_PRICE_SUCCESS:
      return {
        ...state,
        price: action.price,
        loadingPrice: false,
        loadingPriceError: false
      };
    case actionTypes.LOAD_COMPANY_PRICE_FAILED:
      return {
        ...state,
        loadingPrice: false,
        loadingPriceError: action.error
      };
    case actionTypes.ADD_COMPANY_TO_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.concat(action.symbol)
      };
    case actionTypes.REMOVE_COMPANY_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(symbol => symbol !== action.symbol)
      };
    case actionTypes.CLEAR_COMPANY_FAVORITES:
      return {
        ...state,
        favorites: []
      };
    default:
      return state;
  }
}
