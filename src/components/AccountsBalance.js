import Axios from "axios";
import { Component } from "react";

export default class AccountsBalance extends Component {
    state = {}

    constructor(props) {
        super(props)
        this.state.accounts = [] 

        // this.componentDidMount = this.componentDidMount.bind(this)

    }

    componentDidMount() {

        const sendRequest = async () => {
            try {
                await Axios.get("http://192.168.0.2/api/accounts")
                .then ((response) => {
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

        // const data = this.state.accounts
        // console.log("--")
        // // console.log(data)
        // console.log("--")

        const data = [{title:"Сбербанк"}, {title:"Альфабанк"}]
        console.log(data)

        const accountsList = data.map((account) => {
                <li>{account.title}</li>
        } )


            // <div className="card row" style={{width: 250}}>
            //     <div className="card-body">
            //         <h5 class="card-title">{account.title}</h5>
            //         <span>{account.current_amount}</span>
            //     </div>
            // </div>

        return (
                <ul>
                {accountsList}
                </ul>

   
        )
    }
}