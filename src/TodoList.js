import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import { getInpChange, getInpSubmit, getDelItem, getTodoList } from './store/actionCreators';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.storeChange.bind(this));
    }

    componentDidMount(){
        store.dispatch(getTodoList());
    }

    storeChange = () => {
        this.setState(store.getState());
    }

    inpChange = (e) => {
        store.dispatch(getInpChange(e.target.value));
    }
    inpSubmit = () => {
        store.dispatch(getInpSubmit());
    }
    delItem = (index) => {
        store.dispatch(getDelItem(index));
    }
    render() {
        const { inpVal, list } = this.state;
        return <Fragment>
            <Input
                placeholder='Input info'
                value={inpVal} 
                style={{ width: 300, marginRight: 10 }}
                onChange={(e) => {this.inpChange(e)}}
            />
            <Button type='primary' onClick={this.inpSubmit}>提交</Button>
            <List
                style={{ width: 300, marginTop: 10 }}
                bordered
                dataSource={list}
                renderItem={(item,index) => (
                    <List.Item onClick={() => {this.delItem(index)}}>{item}</List.Item>
                )}
            />
        </Fragment>
    }
}