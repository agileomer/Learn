import React from 'react';
import FuelCost from '../../components/fuel-cost';
import Toolbar from '../../components/toolbar';
import './home.css';

export default function Home(props) {
  return (
    <div className="cost-calculator">
        <Toolbar />
        <div className="form-calculator">
          <FuelCost />
        </div>
    </div>
  );
}