import { Component } from "react";
import axios from "axios"


export default class Balance extends Component {
    state = {}

    constructor(props) {
        super(props)
        this.state = {
            balance: 0
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {

        const sendRequest = async () => {
            try {
                await axios.get("http://192.168.0.2/api/accounts/total")
                .then((response) => {
                    this.setState({ balance: response.data.totalBalance })
                })

            }
            catch (error) {
                console.log(error)
            }


        }
        sendRequest()

    }

    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <h5>Баланс</h5>
                    {this.state.balance}
                </div>
            </div>
               
        )
    }

}