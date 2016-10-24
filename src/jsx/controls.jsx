import React from 'react';
import ReactDOM from 'react-dom';

class ControlsComponent extends React.Component {
	render() {
		return <div className="controls">
				<button>Play/Pause</button>
				<button>Stop</button>
				<button>Next</button>
				<button>Previous</button>
			</div>
	}
};

ReactDOM.render(<ControlsComponent/>, document.getElementById('controls'));
