import React, { Component } from 'react';

class Calculate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      commission: '',
      actions: '1000',
      amount: '',
      ...props.initialValues,
    };

    this.getCalculateProps = this.getCalculateProps.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleCommission = this.handleCommission.bind(this);
    this.handleActions = this.handleActions.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
  }

  getCalculateProps() {
    return {
      ...this.state,
      handlePrice: this.handlePrice,
      handleCommission: this.handleCommission,
      handleActions: this.handleActions,
      handleAmount: this.handleAmount,
    };
  }

  handlePrice(e) {
    const price = e.target.value;
    const commission = this.props.commission * e.target.value;
    const amount = commission * this.state.actions / 1000;
    this.setState({ price, commission: commission.toFixed(2), amount: amount.toFixed(2) });
  }

  handleCommission(e) {
    const commission = e.target.value;
    const price = e.target.value / this.props.commission;
    const amount = commission * this.state.actions / 1000;
    this.setState({ commission, price: price.toFixed(2), amount: amount.toFixed(2) });
  }

  handleActions(e) {
    const actions = e.target.value;
    const { commission } = this.state;
    const amount = actions * commission / 1000;
    this.setState({ actions, commission, amount: amount.toFixed(2) });
  }

  handleAmount(e) {
    const amount = e.target.value;
    const { commission } = this.state;
    const actions = amount / commission * 1000;
    this.setState({ amount, commission, actions });
  }

  render() {
    const { children } = this.props;
    const props = this.getCalculateProps();
    return (
      <div>
      {children(props)}
      </div>
    );
  }
}

export default Calculate;
