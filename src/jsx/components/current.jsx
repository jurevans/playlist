import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

class CurrentComponent extends Component {
	render() {
		return <div>Current item</div>
	}
}

ReactDOM.render(<CurrentComponent/>, document.getElementById('current'));
