import React from 'react';

import Loader from './Loader';

const Company = ({
  company,
  price,
  loadingPrice,
  loadingPriceError,
  favorites,
  addCompanyToFavorites,
  removeCompanyFromFavorites
}) => {
  let companyPriceContent = null;
  if (loadingPrice) {
    companyPriceContent = <Loader />;
  }
  if (price && !loadingPrice) {
    companyPriceContent = <p className="display-4">$ {price}</p>;
  }
  if (loadingPriceError && !loadingPrice) {
    companyPriceContent = (
      <p className="text-danger">
        {loadingPriceError.status} {loadingPriceError.data}
      </p>
    );
  }

  return (
    <div className="card mb-3 border-dark">
      <div className="card-header">
        {companyPriceContent}
        <h5 className="card-title">{company.symbol}</h5>
        <h6 className="card-subtitle text-muted">{company.companyName}</h6>
      </div>
      <div className="card-body">
        <dl className="row">
          <dt className="col-sm-3">exchange: </dt>
          <dd className="col-sm-9">{company.exchange}</dd>

          <dt className="col-sm-3">industry: </dt>
          <dd className="col-sm-9">{company.industry}</dd>

          <dt className="col-sm-3">website: </dt>
          <dd className="col-sm-9">
            <a href="http://www.apple.com">{company.website}</a>
          </dd>

          <dt className="col-sm-3">CEO: </dt>
          <dd className="col-sm-9">{company.CEO}</dd>

          <dt className="col-sm-3">issueType: </dt>
          <dd className="col-sm-9">{company.issueType}</dd>

          <dt className="col-sm-3">sector: </dt>
          <dd className="col-sm-9">{company.sector}</dd>
        </dl>

        <p className="card-text">{company.description}</p>

        {company.tags ? (
          <ul className="list-inline">
            {company.tags.map(tag => {
              return (
                <li key={tag} className="list-inline-item">
                  <span className="badge badge-light">{tag}</span>
                </li>
              );
            })}
          </ul>
        ) : null}

        {favorites && favorites.includes(company.symbol) ? (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => removeCompanyFromFavorites(company.symbol)}
          >
            Remove from favorites
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success"
            onClick={() => addCompanyToFavorites(company.symbol)}
          >
            Add to favorites
          </button>
        )}
      </div>
    </div>
  );
};

export default Company;
