import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './page/app'
import Player from './page/palyer'
import MusicList from './page/musicList'

const routes = (
    <Route path="/" component={App}>
       {/* <Route path="/" component={Player}/>
        <Route path="/list" component={MusicList}/>*/}
    </Route>
);

class Root extends React.Component{
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" component={Player}></Route>
                        <Route  path="/list" component={MusicList}></Route>
                    </Switch>
                </App>
            </Router>

        );
    }
}
export default  Root;