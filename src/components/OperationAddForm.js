import { Component } from "react";
import axios from "axios";

import { Form, Button, Radio, Select, Input, notification } from "antd";
import { CheckCircleOutlined} from "@ant-design/icons";

export default class OperationAddForm extends Component{

    state = {
        isLoading: false
    }

    constructor(props) {
        super(props)
        
        this.submit = this.submit.bind(this);
        this.onFinish = this.onFinish.bind(this);
    }

    componentDidMount() {
        // console.log("componentDidMount")
    }

    changeHandler (event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;

        this.setState({[name]:value});
    }

    submit() {
        this.setState({isLoading: true})

        var data = {
            type: this.state.type,
            account_from_id: this.state.account_from_id,
            account_to_id: this.state.account_to_id,
            amount: this.state.amount,
            comment: this.state.comment
        }

            axios({
            method: 'post',
                url: 'http://moneykeeper/api/operations',
            data: data,
            validateStatus: () => true
        })
        .then ((response) => {
            console.log(response.status)
            if (response.status === 201) {
                console.log("added OK: 201")
                this.setState({isLoading: false})

                notification.open({
                    message: 'Запись добавлена',
                    placement: "bottomRight",
                    duration: 10,
                    icon: <CheckCircleOutlined style={{ color: '#00FF00' }} />,
                    description:
                        'Запись успешно добавлена',
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                });

                console.log(this.state)
            }

            console.log(response)
        })
        .catch (function(error) {
            console.log(error)
        })
    }

    onFinish(values){
        this.setState({ 
            type: values.type,
            account_from_id: values.account_from_id,
            account_to_id: values.account_to_id,
            amount: values.amount,
            comment: values.comment
        })

        this.submit()
    }
    
    render() {
    
        const { Option } = Select;

        const layout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };

        const initValues = { 
            type: "Sup", 
            account_from_id: "1"
        }

        return (

            <div style={{background:'#fff', padding: '20px'}}>
                <Form {...layout} name="basic" initialValues={initValues}
                onFinish={this.onFinish}
                // onFinishFailed={onFinishFailed}
            >
               
                    <Form.Item 
                    label="Операция"
                    colon={false} 
                    name="type"
                    rules={[{required: true, message: 'Выберите тип операции'}]}
                    value="Sub"
                >
                    <Radio.Group 
                        buttonStyle="solid"
                        defaultValue="Sub"
                        value="Sub"
                    >
                        <Radio.Button value="Sup">Списание</Radio.Button>
                        <Radio.Button value="Add">Пополнение</Radio.Button>
                        <Radio.Button value="Move">Перемещение</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item 
                        label="Откуда" 
                        name="account_from_id"
                        rules={[{ required: true, message: 'Введите счет списания' }]}
                    >
                        <Select initialValue="1">
                            <Option value="1">Сбербанк</Option>
                            <Option value="2">Альфабанк</Option>
                            <Option value="3">ВТБ</Option>
                    </Select>
                </Form.Item>

                    <Form.Item label="Куда" name="account_to_id"> 
                    <Select>
                        <Option value="1">Сбербанк</Option>
                        <Option value="2">Альфабанк</Option>
                        <Option value="3">ВТБ</Option>
                    </Select>
                </Form.Item>

            
                <Form.Item
                    label="Сумма"
                    name="amount"
                    rules={[{ required: true, message: 'Введите сумму' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Комментарий"
                    name="comment"
                >
                    <Input />
                </Form.Item>

                <Form.Item >
                        <Button type="primary" htmlType="submit" loading={this.state.isLoading}>
                        Записать
                    </Button>
                </Form.Item>
            </Form>
            </div>


            // <div className="form shadow radius bg-white">
            //     <h4>Добавить операцию</h4>
            // <form>

            //         <div className="form-group">
            //             <label hmtlfor="type">Тип</label>
            //             <select className="form-control" name="type"  onChange={this.changeHandler}>
            //                 <option value=""></option>
            //                 <option value="Sup">Списание</option>
            //                 <option value="Add">Пополнение</option>
            //                 <option value="Move">Перемещение</option>
            //             </select>
            //         </div>


            //     <label hmtlfor="account_from_id">Откуда</label>
            //         <select className="form-control" name="account_from_id" onChange={this.changeHandler}> 
            //         <option value=""></option>
            //         <option value="1">Альфабанк</option>
            //         <option value="2">Сбербанк</option>
            //         <option value="3">ВТБ</option>
            //     </select>

            //     <label hmtlfor="account_to_id">Куда</label>
            //         <select className="form-control" name="account_to_id" onChange={this.changeHandler}>
            //         <option value="0"></option>
            //         <option value="1">Альфабанк</option>
            //         <option value="2">Сбербанк</option>
            //         <option value="3">ВТБ</option>
            //         <option value="4">Кошелек</option>
            //     </select>

            //         <label hmtlfor="amount" value={this.state.amount}>Сумма</label>
            //         <input className="form-control" name="amount" type="text" onChange={this.changeHandler} />

            //         <label hmtlfor="amount" value={this.state.amount}>Комментарий</label>
            //         <input className="form-control" name="comment" type="text" onChange={this.changeHandler} />

            //         <button className="btn btn-success" type="submit" onClick={this.submitHandler}>Записать</button>

            //         { Spinner(!this.state.isLoading) }
            // </form>
            // </div>
        )
    }


}