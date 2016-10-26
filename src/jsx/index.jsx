import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListComponent from './components/list.jsx';
import CurrentComponent from './components/current.jsx';
import ControlsComponent from './components/controls.jsx';

class IndexComponent extends Component {
    render() {
        console.log(ListComponent);
        
        return <div className="app">
            <ListComponent/>
            <CurrentComponent/>
            <ControlsComponent/>
        </div>
    }
}

ReactDOM.render(<IndexComponent/>, document.getElementById('app-container'));
