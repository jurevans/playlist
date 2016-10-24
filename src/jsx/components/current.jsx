import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import Observer from '../../js/observer.js';

class CurrentComponent extends React.Component {
	render() {
		return <div>Current item</div>
	}
}

ReactDOM.render(<CurrentComponent/>, document.getElementById('current'));
