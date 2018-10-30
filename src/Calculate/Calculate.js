import React, { Component } from 'react';

class Calculate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: '',
            commission: '',
            actions: '1000',
            amount: ''
        };

        this.handlePrice = this.handlePrice.bind(this);
        this.handleCommission = this.handleCommission.bind(this);
        this.handleActions = this.handleActions.bind(this);
        this.handleAmount = this.handleAmount.bind(this);
    }

    handlePrice(e) {
        let price = e.target.value,
            commission = this.props.commission * e.target.value,
            amount = commission * this.state.actions / 1000;
        this.setState({price: price, commission: commission.toFixed(2), amount: amount.toFixed(2)});
    }

    handleCommission(e) {
        let commission = e.target.value,
            price = e.target.value / this.props.price,
            amount = commission * this.state.actions / 1000;
        this.setState({commission: commission, price: price.toFixed(2), amount: amount.toFixed(2)});
    }

    handleActions(e) {
        let actions = e.target.value,
            commission = this.state.commission,
            amount = actions * commission / 1000;
        this.setState({actions: actions, commission: commission, amount: amount.toFixed(2)});
    }

    handleAmount(e) {
        let amount = e.target.value,
            commission = this.state.commission,
            actions = amount / commission * 1000;
        this.setState({amount: amount, commission: commission, actions: actions,});
    }

    render() {
        return (
            <div className="Calculate">
                <form>
                    <label>Price:
                        <input className="price" type="number" value={this.state.price} onChange={this.handlePrice} />
                    </label>
                    <label>Price with commission:
                        <input className="commission" type="number" value= {this.state.commission} onChange={this.handleCommission} />
                    </label>
                    <label>Actions:
                        <input className="action" type="number" value={this.state.actions} onChange={this.handleActions} />
                    </label>
                    <label>Total:
                        <input className="total" type="number" value={this.state.amount} onChange={this.handleAmount} />
                    </label>
                </form>

                <div className="general-state">price: {this.state.price} <br /> comission: {this.state.commission} <br /> actions: {this.state.actions / 1000} <br /> amount: {this.state.amount}</div>
            </div>
        );
    }
}

export default Calculate;
