import React, { Component } from 'react';

class Calculate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            multiplier: '',
            divider: ''
        };

        this.handleMultiply = this.handleMultiply.bind(this);
        this.handleDivide = this.handleDivide.bind(this);
    }

    handleMultiply(e) {
        this.setState({multiplier: e.target.value, divider: e.target.value * 2});
    }

    handleDivide(e) {
        this.setState({divider: e.target.value, multiplier: e.target.value / 2});
    }


    render() {
        return (
            <div className="Calculate">
                <input className="Multiplier" type="text" value={this.state.multiplier} onChange={this.handleMultiply} />
                <input className="Divider" type="text" value={this.state.divider} onChange={this.handleDivide} />
            </div>
        );
    }
}


export default Calculate;
