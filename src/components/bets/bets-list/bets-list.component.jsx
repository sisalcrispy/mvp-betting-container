import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import context from '../../../context/context';

import './bets-list.component.scss';

const BetsList = () => {
  const { state } = useContext(context);
  const { t } = state;
  const betsList = [
    {
      id: 1,
      url: 'bets/1',
      label: `${t('cta.go_to_bet')}:1`,
      class: '',
    },
    {
      id: 2,
      url: 'bets/2',
      label: `${t('cta.go_to_bet')}:2`,
      class: '',
    },
    {
      id: 3,
      url: 'bets/3',
      label: `${t('cta.go_to_bet')}:3`,
      class: '',
    },
    {
      id: 4,
      url: 'module',
      label: `${t('cta.go_to_admin_module')} (${t('just_admin')})`,
      class: 'just-admin',
    },
  ];


  return (
    <div className="bets-list">
      <div className="container">
        <div className="row">
          <div className="col-md-5 offset-2 mt-3 mb-3">
            <h1>{t('index')}</h1>
          </div>
          {betsList.map((betsItem, index) => (
            <div key={betsItem.id} className={`col-md-4 ${index % 2 === 0 ? 'offset-md-2' : ''}`}>
              <Link to={betsItem.url}>
                <div className="card">
                  <span>{betsItem.label}</span>
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
