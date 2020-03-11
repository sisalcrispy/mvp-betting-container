import React from 'react';
import { Link } from 'react-router-dom';
import './bets-list.component.scss';

const BetsList = () => {
  const betsList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <div className="bets-list">
      <div className="container">
        <div className="row">
          {betsList.map(betsItem => (
            <div className="col-md-6">
              <Link to={`bets/${betsItem.id}`}>
                <div className="card">
                  <span>GO TO BET: {betsItem.id}</span>
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
