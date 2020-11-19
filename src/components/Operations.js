import { Component } from "react";

import {connect} from "react-redux"

import { List, Avatar, Text} from "antd";
import { UpCircleOutlined } from '@ant-design/icons';

class Operations extends Component {
    render() {
        return(
            <div className="balances">
                <List
                    header = {<h5>Транзакции</h5>}
                    itemLayout="horizontal"
                    size="small"
                    loading={true}
                    dataSource={this.props.operations}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<span>{item.amount.toLocaleString()}</span>}
                                description={item.comment}
                                avatar={<UpCircleOutlined />}
                                content={item.amount}
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
    
function mapStateToProps (state) {
    return {
        operations: state.operations
    }
}

export default connect(mapStateToProps)(Operations)