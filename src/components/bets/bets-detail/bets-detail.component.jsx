import React from 'react';
import { Link } from 'react-router-dom';

const BetsDetail = props => {
  const { match } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-2 mt-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">
                    Back
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">current</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-inner">
                THIS IS THE DETAIL OF BET #{match.params.id}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetsDetail;
