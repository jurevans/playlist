import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

class ControlsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
            e.preventDefault();

            console.log(e.target.name);
    }

	render() {
		return <div className="controls">
				<button name="play" onClick={this.handleClick}>Play/Pause</button>
				<button name="stop" onClick={this.handleClick}>Stop</button>
				<button name="next" onClick={this.handleClick}>Next</button>
				<button name="prev" onClick={this.handleClick}>Previous</button>
			</div>
	}
};

ReactDOM.render(<ControlsComponent/>, document.getElementById('controls'));
