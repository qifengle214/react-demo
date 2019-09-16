import React, { Component, Fragment } from "react";
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inpValue: '',
            list: []
        }
    }
    inpChange = (e) => {
        this.setState({
            inpValue: e.target.value
        })
    }
    listChange = () => {
        const { inpValue, list } = this.state;
        this.setState({
            list: [...list, inpValue],
            inpValue: ''
        })
    }
    delItem = (index) => {
        const { list } = this.state;
        list.splice(index, 1);
        this.setState({
            list
        })
    }
    render() {
        const { inpValue, list } = this.state;
        return (
            <Fragment>
                <input
                    value={inpValue}
                    onChange={(e) => { this.inpChange(e) }}
                />
                <button onClick={this.listChange}>提交</button>
                <ul>
                    {
                        list.map((item, i) => {
                            return <TodoItem
                                listItem={item}
                                key={i}
                                listKey={i}
                                delItem={(index) => { this.delItem(index) }}
                            />
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}