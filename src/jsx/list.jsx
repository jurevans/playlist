import React from 'react';
import ReactDOM from 'react-dom';

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

		return (
            <ul>
                {arrList}
            </ul>
        );
	}
}

ReactDOM.render(<ListComponent/>, document.getElementById('list'));
