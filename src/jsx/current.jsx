import React from 'react';
import ReactDOM from 'react-dom';

class CurrentComponent extends React.Component {
	render() {
		return <h1>Now Playing</h1>
	}
}

ReactDOM.render(<CurrentComponent/>, document.getElementById('current'));
