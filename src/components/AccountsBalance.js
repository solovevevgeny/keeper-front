import { Component } from "react";

import { connect } from "react-redux"
import { Card } from "antd";


class Balances extends Component {
    render() {
        return (

            <div style={{display: 'flex'}}>
                {this.props.balances.map((balance) => {
                    return (
                        <Card 
                            size="small"
                            title={balance.title} 
                            bordered
                            style={{ width: 300 }}
                            loading={false}
                            >
                                    <p>{balance.current_amount.toLocaleString()}</p>
                        </Card>
                    )     
                })}
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        operations: state.operations,
        balances: state.accountsBalance
    }
}

export default connect(mapStateToProps)(Balances)