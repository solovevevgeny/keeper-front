import { Component } from "react";

import {connect} from "react-redux"

 class Balance extends Component {
    render() {
        return(
            <div className="radius shadow bg-white">
                <div className="card-body">
                    <h5>Баланс </h5>
                    {this.props.balance[0].balance.toLocaleString()}&#8381;
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        balance: state.balance
    }
}

export default connect(mapStateToProps)(Balance)