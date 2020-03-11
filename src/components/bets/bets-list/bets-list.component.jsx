import React from 'react';
import { Link } from 'react-router-dom';
import UseTranslations from '../../../hooks/translations.hook';

import './bets-list.component.scss';

const BetsList = () => {
  const betsList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const { t } = UseTranslations();

  return (
    <div className="bets-list">
      <div className="container">
        <div className="row">
          {betsList.map(betsItem => (
            <div className="col-md-6">
              <Link to={`bets/${betsItem.id}`}>
                <div className="card">
                  <span>{t('cta.go_to_bet')}: {betsItem.id}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BetsList;
