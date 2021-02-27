import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { WeatherApp } from './containers/WeatherApp';
import { Root } from './containers/Root';

class App extends Component {
    
    render() {
        return(
            <Provider store={store}>
                <Root/>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));