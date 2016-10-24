import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

class ListComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

	render() {
        let arrList = [];

        for(let i=0; i<4; i++) {
            arrList.push(<li key={'list_item_' + i}>Item {i + 1}</li>);
        }

        /* Test array of React elements */
        
        _.each(arrList, function(item){
            console.log(item);
        });

		return (
            <ul>
                {arrList}
            </ul>
        );
	}
}

ReactDOM.render(<ListComponent/>, document.getElementById('list'));
