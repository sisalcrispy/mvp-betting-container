import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import context from '../../../context/context';

const BetsDetail = props => {
  const { match } = props;
  const { state } = useContext(context);
  const { t } = state;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-2 mt-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">
                  {t('back')}
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">{t('bet')} #{match.params.id}</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="p-4">
              {t('this_is_the_bet')} #{match.params.id}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetsDetail;
