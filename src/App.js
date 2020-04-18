import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {PageJuan, PageToo} from './components';
import {Button} from 'react-bootstrap';
import {Provider} from 'react-redux';
import store from './redux/store';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // Provider will provide anything within the Provider tags access to the store located in the store.js file
            <Provider store={store}>
                {/* Setting up the router */}
                <BrowserRouter basename="">
                    <div>
                        React Redux Example!!!
                    </div>
                    {/* Link is used by react-router-dom to know which compontent to load which is specified in the to prop */}
                    <Link to="/">
                        <Button>Juan!!!</Button>
                    </Link>
                    <Link to="/too">
                        <Button>Too!!!</Button>
                    </Link>
                    {/* Switch works exactly like a switch would in any programming langaue. */}
                    <Switch>
                        {/* Specifying the routes and specifying which components to load with the respective routes */}
                        <Route exact path="/" component={PageJuan} />
                        <Route exact path="/too" component={PageToo}  />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;