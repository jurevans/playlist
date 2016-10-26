import React, { Component } from 'react';
import _ from 'underscore';

class ListComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let list = [];
        let data = {
            playlist: [
                {
                    _id: 'item1',
                    name: 'Item 1'
                },
                {
                    _id: 'item2',
                    name: 'Item 2'
                },
                {
                    _id: 'item3',
                    name: 'Item 3'
                }
            ]
        };

        _.each(data.playlist, (item) => {
            list.push(<li key={item._id}>{item.name}</li>);
        });

        return (
            <ul>
                {list}
            </ul>
        );
	}
}

export default ListComponent;
