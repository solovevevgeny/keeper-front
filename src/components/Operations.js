import { Component } from "react";
import axios from "axios"

import OperationsList from "./OperationsList"
import OperationListItem from "./OperationListItem"


export default class Operations extends Component {

    state = {}

    constructor(props) {
        super(props)
        this.state = {
        operations: []
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.render = this.render.bind(this);
    }

    componentDidMount() {

        const sendRequest = async () => {
            try {
                await axios.get("http://192.168.0.2/api/operations")
                .then( (response)=> {
                    // console.log(response)
                    this.setState({ operations: response.data.operations})
                })
                .catch((error)=> {
                    console.log(error)
                })
            }
            catch(error) {
                console.log(error)
            }
        }
        sendRequest()
            
    }



    render(){ 
        const data = this.state.operations
        // console.log(data)
        // console.log(data.account_from)

         const listItems = data.map((operation) => <OperationListItem key={operation.id} comment={operation.comment} type={operation.type} amount={operation.amount} /> )

        return (
            <ul className="list-group">
                {listItems}                
                
            </ul>            
        )
    }
}
