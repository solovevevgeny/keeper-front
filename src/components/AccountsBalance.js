import Axios from "axios";
import { Component } from "react";

export default class AccountsBalance extends Component {
    state = {}

    constructor(props) {
        super(props)
        this.state.accounts = [] 

        this.componentDidMount = this.componentDidMount.bind(this)

    }

    componentDidMount() {

        const sendRequest = async () => {
            try {
                await Axios.get("http://192.168.0.2/api/accounts")
                .then ((response) => {
                    // console.log(response)
                    this.setState({accounts: response.data})
                })
            }
            catch (error) {
                console.log(error)
            }
        }
        sendRequest()
    }


    render() {
        const data = this.state.accounts

        const accountsList = data.map((account) => {
            // return <li>{account.title}<br />{account.current_amount}</li>
            return (
                <div key={account.id} className="card" style={{width: 250}}>
                    <div className="card-body">
                        <h5 className="card-title">{account.title}</h5>
                        <span>{account.current_amount}</span>
                    </div>
            </div>)

        } )
        return (
                <div className="accounts-balance-list">
                    {accountsList}
                </div>
        )
    }
}