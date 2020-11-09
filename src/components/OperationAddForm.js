import { Component } from "react";
import axios from "axios"

export default class OperationAddForm extends Component{

    state = {
        isLoading: false
    }

    constructor(props) {
        super(props)
        
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    componentDidMount() {
        // console.log("componentDidMount")
    }

    changeHandler (event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]:value});
    }

    submitHandler(event) {
        this.setState({isLoading: true})
        event.preventDefault();

        console.log(this.state)

        var data = {
            type: this.state.type,
            account_from_id: this.state.account_from_id,
            account_to_id: this.state.account_to_id,
            amount: this.state.amount,
            comment: this.state.comment
        }


              axios({
            method: 'post',
            url: 'http://192.168.0.2/api/operations',
            data: data,
            validateStatus: () => true
        })
        .then ((response) => {
            console.log(response.status)
            if (response.status == 201) {
                console.log("added OK: 201")
                this.setState({isLoading: false})
                console.log(this.state)
            }

            console.log(response)
        })
        .catch (function(error) {
            console.log(error)
        })
    }

    
    render() {
        const Spinner = (isLoading) => {
            return (
                <div>
                    <span hidden={isLoading} class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span class="sr-only">Loading...</span>
                </div>
            )
        }

        return (
            <>
            <form>

                    <div className="form-group">
                        <label hmtlfor="type">Тип</label>
                        <select className="form-control" name="type"  onChange={this.changeHandler}>
                            <option value=""></option>
                            <option value="Sup">Списание</option>
                            <option value="Add">Пополнение</option>
                            <option value="Move">Перемещение</option>
                        </select>
                    </div>


                <label hmtlfor="account_from_id">Откуда</label>
                    <select className="form-control" name="account_from_id" onChange={this.changeHandler}> 
                    <option value=""></option>
                    <option value="1">Альфабанк</option>
                    <option value="2">Сбербанк</option>
                    <option value="3">ВТБ</option>
                </select>

                <label hmtlfor="account_to_id">Куда</label>
                    <select className="form-control" name="account_to_id" onChange={this.changeHandler}>
                    <option value="0"></option>
                    <option value="1">Альфабанк</option>
                    <option value="2">Сбербанк</option>
                    <option value="3">ВТБ</option>
                    <option value="4">Кошелек</option>
                </select>

                    <label hmtlfor="amount" value={this.state.amount}>Сумма</label>
                    <input className="form-control" name="amount" type="text" onChange={this.changeHandler} />

                    <label hmtlfor="amount" value={this.state.amount}>Комментарий</label>
                    <input className="form-control" name="comment" type="text" onChange={this.changeHandler} />

                    <button className="btn btn-success" type="submit" onClick={this.submitHandler}>Записать</button>

                    { Spinner(!this.state.isLoading) }
            </form>
            </>
        )
    }


}