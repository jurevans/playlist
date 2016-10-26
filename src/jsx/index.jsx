import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/* Components */
import ListComponent from './components/list.jsx';
import CurrentComponent from './components/current.jsx';
import ControlsComponent from './components/controls.jsx';

class IndexComponent extends Component {
    render() {
        console.log(ListComponent);

        return <div className="app">
            <ListComponent ref="list"/>
            <CurrentComponent ref="current"/>
            <ControlsComponent ref="controls"/>
        </div>
    }
}

ReactDOM.render(<IndexComponent/>, document.getElementById('app-container'));
