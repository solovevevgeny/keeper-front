import { Component } from "react";

export default class OperationListItem extends Component {
    constructor(props) {
        super(props)
        // console.log(props)
    }

    render() {
        
        return (
            <li className="list-group-item" key={this.props.id}>
                type: {this.props.type} | account_from_id: {this.props.account_from_id} | account_to_id: {this.props.account_to_id} | {this.props.amount} | {this.props.comment}            </li>
        )
    }

}