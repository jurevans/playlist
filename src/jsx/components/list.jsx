import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import Observer from '../../js/observer.js';

class ListComponent extends React.Component {

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

ReactDOM.render(<ListComponent/>, document.getElementById('list'));
