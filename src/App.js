import React, { Component } from 'react';
import Calculate from './Calculate/Calculate';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Calculate
          commission={1.2}
        >
          {(calcProps) => {
            const {
              price,
              commission,
              actions,
              amount,
              handlePrice,
              handleCommission,
              handleActions,
              handleAmount,
            } = calcProps;
            return (
              <div className="Calculate">
                <form>
                  <label>Price:
                    <input className="price" type="number" value={price} onChange={handlePrice} />
                  </label>
                  <label>Price with commission:
                    <input className="commission" type="number" value={commission} onChange={handleCommission} />
                  </label>
                  <label>Actions:
                    <input className="action" type="number" value={actions} onChange={handleActions} />
                  </label>
                  <label>Total:
                    <input className="total" type="number" value={amount} onChange={handleAmount} />
                  </label>
                </form>

                <div className="general-state">
                  price: {price} <br />
                  comission: {commission} <br />
                  actions: {actions / 1000} <br />
                  amount: {amount}
                </div>
              </div>
            );
          }}
        </Calculate>
      </div>
    );
  }
}

export default App;
