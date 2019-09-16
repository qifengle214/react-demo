import React, { Component } from 'react';

export default class TodoItem extends Component {
    render() {
        const { listItem, listKey, delItem } = this.props;
        return <li onClick={() => { delItem(listKey) }}>{listItem}</li>
    }
}