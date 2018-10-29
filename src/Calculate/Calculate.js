import React, { Component } from 'react';

class Calculate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: '',
            commission: '',
            aliquot: '1000',
            amount: ''
        };

        this.handlePrice = this.handlePrice.bind(this);
        this.handleAliquot = this.handleAliquot.bind(this);
    }

    handlePrice(e) {
        let price = e.target.value,
            commission = this.props.commission * e.target.value,
            amount = commission * this.state.aliquot / 1000;
        this.setState({price: price, commission: commission, amount: amount});
    }

    handleAliquot(e) {
        this.setState({aliquot: e.target.value});
    }

    render() {
        return (
            <div className="Calculate">
                <form>
                    <label>Price:
                        <input className="Price" type="text" value={this.state.price} onChange={this.handlePrice} />
                    </label>
                    <label>Actions:
                        <input className="Action" type="text" value={this.state.aliquot} onChange={this.handleAliquot} />
                    </label>
                    <div className="Commission">Price with commission: {this.state.commission}</div>
                    <div className="Total">Total: {this.state.amount}$</div>
                </form>
            </div>
        );
    }
}


export default Calculate;
